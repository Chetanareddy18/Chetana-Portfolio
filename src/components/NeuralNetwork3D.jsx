import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

function NeuralNetwork({ count = 40 }) {
  const pointsRef = useRef();
  const linesRef = useRef();

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    // Match particle background palette: purple, violet, cyan, sky
    const palette = [
      new THREE.Color("#8b5cf6"),
      new THREE.Color("#a78bfa"),
      new THREE.Color("#06b6d4"),
      new THREE.Color("#38bdf8"),
      new THREE.Color("#c4b5fd"),
    ];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 1.2 + Math.random() * 2.0;
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  // Connected network — larger radius for visible connections
  const { linePositions, lineColors } = useMemo(() => {
    const lPos = [];
    const lCol = [];
    const connectionRadius = 2.2; // larger = more visible connections
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < connectionRadius) {
          lPos.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
          lCol.push(
            colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2],
            colors[j * 3], colors[j * 3 + 1], colors[j * 3 + 2]
          );
        }
      }
    }
    return { linePositions: new Float32Array(lPos), lineColors: new Float32Array(lCol) };
  }, [positions, colors, count]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.08; // slower = calmer
    if (pointsRef.current && linesRef.current) {
      pointsRef.current.rotation.y = t;
      pointsRef.current.rotation.x = t * 0.4;
      linesRef.current.rotation.y = t;
      linesRef.current.rotation.x = t * 0.4;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={linePositions.length / 3} array={linePositions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={lineColors.length / 3} array={lineColors} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

export default function NeuralNetwork3D() {
  return (
    <div className="w-full h-[500px] md:h-[600px] relative z-10 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.6} color="#8b5cf6" />
        <pointLight position={[-8, -8, 5]} intensity={0.4} color="#06b6d4" />

        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
          <NeuralNetwork count={40} />
        </Float>

        <Stars radius={20} depth={50} count={800} factor={2.5} saturation={0.8} fade speed={0.4} />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />

        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={0.9} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
