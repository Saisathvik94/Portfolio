import { useEffect, useRef } from "react";
import CloudAnimation from "../ui/CloudAnimation";
import Lenis from "lenis";

export function Home() {

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
      <div>
         <CloudAnimation />
         <div className="bg-[#2e6fd4] opacity-78% w-full">
            <div className="absolute bottom-0 w-full inset-x-0 bg-gradient-to-t from-[#2e6fd4] to-transparent" />
            <div className="relative z-20 text-center pt-24 pb-12 px-6">
               <p className="text-white/45 text-[10px] tracking-[0.45em] uppercase mb-4"
                  style={{ fontFamily: "system-ui, sans-serif" }}>
                  Destination
               </p>
               <h2
                  className="text-white font-light leading-snug"
                  style={{
                     fontFamily: "'Cormorant Garamond', serif",
                     fontSize: "clamp(2rem, 5.5vw, 4.2rem)",
                  }}
               >
                  Let me take you
                  <br />
                  <em className="italic">through a journey</em>
               </h2>
            </div>
            <img src="/villagebg.avif" alt="image" />
         </div>
      </div>
   );
}