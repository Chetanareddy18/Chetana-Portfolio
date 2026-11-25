import { useState } from 'react';
import { Nav, Hero, Band, CaseFiles, Experience, Skills, Honors, Archive, Contact } from './components/Sections';

export default function App() {
  const [openId, setOpenId] = useState(null);
  return (
    <>
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
