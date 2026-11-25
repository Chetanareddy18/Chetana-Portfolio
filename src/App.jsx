import { useState } from 'react';
import { Nav, Hero, Band, CaseFiles, Experience, Proof, Honors, Archive, Contact } from './components/Sections';

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
        <Proof setOpenId={setOpenId} />
        <Honors />
        <Archive />
        <Contact />
      </main>
    </>
  );
}
