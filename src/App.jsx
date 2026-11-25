import { useState } from 'react';
import { Nav, Hero, Band, CaseFiles, Experience, Skills, Honors, Archive, Contact } from './components/Sections';
import { InkCursor, ScrollPencil, useMagnetic, useEasterEgg } from './components/Wow';
import { FourCs, Embroidery, OpenWork, Constellation, Beyond } from './components/Story';

export default function App() {
  const [openId, setOpenId] = useState(null);
  useMagnetic();
  useEasterEgg();
  return (
    <>
      <ScrollPencil />
      <InkCursor />
      <Nav />
      <main>
        <Hero />
        <FourCs />
        <Experience />
        <Band />
        <CaseFiles openId={openId} setOpenId={setOpenId} />
        <Embroidery />
        <Skills />
        <Honors />
        <OpenWork />
        <Constellation />
        <Beyond />
        <Archive />
        <Contact />
      </main>
    </>
  );
}
