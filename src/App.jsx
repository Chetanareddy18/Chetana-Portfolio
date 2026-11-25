import { useState } from 'react';
import { Nav, Hero, Band, CaseFiles, Experience, Skills, Honors, Archive, Contact } from './components/Sections';
import { InkCursor, ScrollPencil, useMagnetic, useEasterEgg } from './components/Wow';

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
        <Experience />
        <Band />
        <CaseFiles openId={openId} setOpenId={setOpenId} />
        <Skills />
        <Honors />
        <Archive />
        <Contact />
      </main>
    </>
  );
}
