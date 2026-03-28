import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { Projects } from './pages/Projects';


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
     <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App
