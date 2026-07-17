import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { Work } from './pages/Work';
import { ProjectBlog } from './pages/ProjectBlog';
import { Analytics } from "@vercel/analytics/react";


function App() {

  const scrollRef = useRef(0);
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true
    });
  
    lenis.on("scroll", (e) => {
      scrollRef.current = e.scroll;
    });
  
    return () => {
      lenis.destroy();
      scrollRef.current = 0;
    };
  }, [])
  return (
    <>
    <Analytics />
    <BrowserRouter>
      <ScrollToTop />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/project/:id" element={<ProjectBlog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App
