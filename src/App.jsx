import { useState } from 'react';
import { Nav, Hero, Band, CaseFiles, Journey, Proof, Honors, Archive, Contact } from './components/Sections';

export default function App() {
  const [openId, setOpenId] = useState(null);
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Band />
        <CaseFiles openId={openId} setOpenId={setOpenId} />
        <Journey />
        <Proof setOpenId={setOpenId} />
        <Honors />
        <Archive />
        <Contact />
      </main>
    </>
  );
}
