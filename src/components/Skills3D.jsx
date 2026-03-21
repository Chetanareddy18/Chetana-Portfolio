import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, Html, Stars } from '@react-three/drei';

const skillsData = [
  { 
    title: "AI / ML", 
    items: [
      "Scikit-learn",
      "ML Algorithms",
      "Model Development",
      "Model Training",
      "Model Evaluation",
      "Hyperparameter Tuning",
      "Statistics for Data Science"
    ] 
  },

  { 
    title: "Deep Learning", 
    items: [
      "ANN",
      "CNN",
      "GNN",
      "LSTM",
      "Computer Vision",
      "Time Series Forecasting"
    ] 
  },

  { 
    title: "NLP & GenAI", 
    items: [
      "NLP",
      "LLMs",
      "Generative AI",
      "RAG",
      "Agentic AI",
      "LangChain",
      "LangGraph",
      "Hugging Face",
      "Prompt Engineering",
      "Embeddings"
    ] 
  },

  { 
    title: "Programming", 
    items: [
      "Python",
      "JavaScript",
      "Java",
      "SQL",
      "C"
    ] 
  },

  { 
    title: "Web Dev", 
    items: [
      "React",
      "Node.js",
      "Flask",
      "Django",
      "FastAPI",
      "HTML5",
      "CSS3",
      "Bootstrap"
    ] 
  },

  { 
    title: "Data Science", 
    items: [
      "Pandas",
      "NumPy",
      "EDA",
      "Feature Engineering",
      "Data Preprocessing",
      "Statistical Analysis",
      "Data Interpretation",
      "Power BI",
      "Matplotlib",
      "Seaborn",
      "Plotly"
    ] 
  },

  { 
    title: "Big Data", 
    items: [
      "Hadoop",
      "PySpark",
      "Big Data Processing",
      "Data Engineering"
    ] 
  },

  { 
    title: "Databases", 
    items: [
      "MySQL",
      "MongoDB",
      "NoSQL",
      "Pinecone"
    ] 
  },

  { 
    title: "Cloud", 
    items: [
      "AWS",
      "Azure",
      "IBM Cloud",
      "n8n"
    ] 
  },

  { 
    title: "Tools", 
    items: [
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "Google Colab",
      "VS Code",
      "Excel"
    ] 
  },

  { 
    title: "Soft Skills", 
    items: [
      "Problem Solving",
      "Analytical Thinking",
      "Communication",
      "Collaboration",
      "Adaptability"
    ] 
  },
];

function OrbitingSkill({ skill, radius, index, total }) {
  const [hovered, setHovered] = useState(false);
  const phi = Math.acos(-1 + (2 * index) / total);
  const theta = Math.sqrt(total * Math.PI) * phi;
  const x = radius * Math.cos(theta) * Math.sin(phi);
  const y = radius * Math.sin(theta) * Math.sin(phi);
  const z = radius * Math.cos(phi);

  return (
    <group position={[x, y, z]}>
      <Html transform sprite>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative px-6 py-3 rounded-full border border-brand-purple/40 bg-brand-deep/80 text-white font-semibold cursor-pointer transition-all hover:scale-110"
        >
          {skill.title}
          {hovered && (
            <div className="absolute top-14 left-1/2 -translate-x-1/2 w-72 bg-brand-deep border border-white/10 rounded-xl p-4 shadow-2xl z-50">
              <h4 className="text-brand-purple font-semibold mb-3 text-center">{skill.title}</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {skill.items.map((item, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 text-slate-300">{item}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}

function SkillCloud() {
  const groupRef = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[2, 32, 32]}>
          <meshStandardMaterial color="#0f172a" emissive="#8b5cf6" emissiveIntensity={0.8} wireframe />
        </Sphere>
      </Float>
      {skillsData.map((skill, idx) => (
        <OrbitingSkill key={idx} skill={skill} index={idx} total={skillsData.length} radius={6} />
      ))}
    </group>
  );
}

export default function Skills3D() {
  return (
    <div className="w-full h-[600px] relative z-0 mt-10 mb-10">
      <Canvas camera={{ position: [0, 0, 18], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <SkillCloud />
        <OrbitControls autoRotate autoRotateSpeed={1} enableZoom={false} />
      </Canvas>
    </div>
  );
}