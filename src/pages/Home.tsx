import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react";
import Footer from "../components/Footer";

// Skills
const skills = [
   "JavaScript",
   "TypeScript",
   "Go",
   "Python",
   "React",
   "Nextjs",
   "Websockets",
   "Node.js",
   "Express.js",
   "Postgres",
   "MongoDB",
   "Git",
];

// projects interface
interface Project {
   title: string
   description: string
   tags: string[]
   image: string
   githubUrl?: string
   liveUrl?: string
}

const featuredProjects: Project[] = [
   {
      title: "Shareout",
      description:
         "Share text, images, and files instantly via secure, temporary sessions — no account needed.",
      tags: ["JavaScript", "React", "Node.js"],
      image: "/projects/shareout.png",
      githubUrl: "https://github.com/Saisathvik94/Shareout",
      liveUrl: "https://shareout-taupe.vercel.app/"
   },
   {
      title: "Vendora",
      description:
         "A full-stack marketplace with modular architecture for managing products and users.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/projects/vendora.png",
      githubUrl: "https://github.com/Saisathvik94/Vendora",
   },
   {
      title: "CodeMaxx",
      description:
         "AI-powered tool to explain, fix, and improve code across multiple languages.",
      tags: ["Go", "AI", "CLI"],
      image: "/projects/codemaxx.png",
      githubUrl: "https://github.com/Saisathvik94/codemaxx",
   },
]

// White Cursor
const WHITE_CURSOR = `url("data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 26" overflow="visible"><path d="M 5.691 1.119 C 5.769 1.183 5.846 1.247 5.923 1.311 C 6.073 1.436 6.222 1.561 6.371 1.686 C 6.619 1.895 6.871 2.099 7.124 2.302 C 7.429 2.548 7.733 2.796 8.038 3.044 C 8.29 3.25 8.543 3.456 8.797 3.661 C 9.281 4.054 9.764 4.45 10.241 4.851 C 10.507 5.075 10.779 5.29 11.053 5.504 C 11.302 5.703 11.546 5.909 11.79 6.114 C 12.01 6.3 12.234 6.482 12.461 6.659 C 12.767 6.899 13.065 7.148 13.362 7.398 C 13.583 7.584 13.807 7.765 14.034 7.943 C 14.3 8.152 14.561 8.367 14.82 8.585 C 15.127 8.843 15.438 9.095 15.753 9.343 C 16.409 9.862 17.055 10.394 17.694 10.932 C 17.961 11.155 18.232 11.371 18.506 11.585 C 18.755 11.784 18.999 11.99 19.243 12.195 C 19.463 12.381 19.687 12.562 19.914 12.74 C 21.858 14.27 21.858 14.27 21.984 15.25 C 22.047 16.069 21.936 16.736 21.418 17.402 C 20.985 17.864 20.444 18.312 19.781 18.357 L 19.638 18.358 L 19.474 18.359 L 19.296 18.36 L 19.106 18.361 C 18.97 18.362 18.834 18.363 18.699 18.364 C 18.483 18.365 18.267 18.366 18.052 18.368 C 17.438 18.373 16.825 18.377 16.212 18.38 C 15.836 18.383 15.461 18.385 15.085 18.389 C 14.943 18.39 14.801 18.39 14.658 18.391 C 12.835 18.399 11.213 18.632 9.83 19.93 C 9.504 20.264 9.234 20.648 8.958 21.023 C 8.742 21.313 8.52 21.597 8.298 21.883 C 7.936 22.353 7.575 22.824 7.217 23.297 C 7.133 23.409 7.048 23.52 6.964 23.631 C 6.801 23.846 6.638 24.061 6.477 24.277 C 5.9 25.044 5.332 25.796 4.324 25.983 C 3.406 26.041 2.663 25.976 1.931 25.369 C 1.348 24.818 1.056 24.158 1.016 23.368 L 1.004 23.133 L 0.991 22.877 L 0.977 22.604 C 0.965 22.355 0.952 22.105 0.94 21.856 C 0.927 21.588 0.913 21.319 0.9 21.051 C 0.867 20.407 0.835 19.762 0.803 19.118 C 0.788 18.815 0.773 18.511 0.758 18.209 L 0.748 18.026 C 0.724 17.532 0.699 17.038 0.675 16.544 C 0.656 16.166 0.637 15.788 0.618 15.409 C 0.539 13.811 0.457 12.213 0.374 10.616 C 0.336 9.887 0.299 9.159 0.262 8.43 C 0.232 7.847 0.202 7.264 0.171 6.681 C 0.15 6.282 0.129 5.884 0.109 5.485 C 0.098 5.257 0.086 5.029 0.074 4.801 C -0.073 2.114 -0.073 2.114 0.766 1.009 C 2.211 -0.568 4.232 -0.114 5.691 1.119 Z" fill="white" stroke="black" stroke-width="1.2" stroke-linejoin="round"/></svg>`)}") 3 5, auto`;


export function Home() {
   // Hover Project 
   const [activeProject, setActiveProject] = useState<number | null>(null)
   const [mouse, setMouse] = useState({ x: 0, y: 0 })

   useEffect(() => {
      const move = (e: MouseEvent) => {
         setMouse({ x: e.clientX, y: e.clientY })
      }

      window.addEventListener("mousemove", move)
      return () => window.removeEventListener("mousemove", move)
   }, [])

   // Video Scroll
   const ref = useRef(null)

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
   })

   const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1])
   const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1])
   const y = useTransform(scrollYProgress, [0, 1], [80, 0])
   return (
      <div className="bg-[#fafafa] text-[#111] mt-25 md:mt-12">
         {/* HERO */}
         <section className="min-h-screen bg-[#fafafa] text-black flex items-center px-4 md:px-8">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-start gap-16">
               <motion.div
                  initial="hidden"
                  animate="show"
                  className="flex-1"
               >
                  <motion.h1
                     variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }}
                     className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight"
                  >
                     I’m Sai Sathvik, I build full-stack apps, developer tools, and real-time systems.
                  </motion.h1>

                  {/* SECOND LINE */}
                  <motion.p
                     variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }}
                     className="mt-8 text-lg md:text-xl text-black/60 max-w-2xl leading-relaxed"
                  >
                     I design and build software that is performant, reliable, and
                     built for real-world use from web applications to backend systems.
                  </motion.p>

                  {/* LINKS */}
                  <motion.div
                     variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }}
                     className="mt-10 flex gap-8 text-xs uppercase tracking-[0.3em]"
                  >
                     {["Work", "About", "Contact"].map((link) => (
                        <a
                           key={link}
                           href={`/${link.toLowerCase()}`}
                           className="relative group"
                        >
                           <span className="text-black/50 group-hover:text-black transition">
                              {link}
                           </span>
                           <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all group-hover:w-full" />
                        </a>
                     ))}
                  </motion.div>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="flex"
               >
                  <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl">

                     <img
                        src="/assets/profilephoto.jpeg"
                        alt="profile"
                        className="w-full h-full object-cover brightness-90"
                     />

                     <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/10 mix-blend-overlay" />
                     <div className="absolute -inset-10 bg-black/10 blur-3xl -z-10" />
                  </div>
               </motion.div>

            </div>
         </section>
         <div className="px-4 md:px-6">
            <section
               ref={ref}
               style={{ cursor: WHITE_CURSOR }}
               className="relative rounded-lg w-full h-[80vh] mt-15 overflow-hidden flex items-center"
            >
               <motion.video
                  src="/runner.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ scale }}
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-90"
               />

               {/* DARK OVERLAY */}
               <div className="absolute inset-0 bg-black/50" />

               <motion.div
                  style={{ opacity, y }}
                  className="relative z-10 px-8 md:px-10 max-w-4xl"
               >
                  <p
                     className="
                     text-white
                     text-3xl md:text-6xl
                     leading-[1.15]
                     tracking-[-0.01em]
                     font-light
                  "
                     style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                     I build <span className="italic">scalable systems,</span>
                     <br />
                     real time applications
                     <br />
                     where <span className="italic">performance</span> meets
                     <span className="italic"> thoughtful design</span>.
                  </p>
               </motion.div>
            </section>
         </div>

         {/* PROJECTS */}
         <section className="px-4 md:px-6 py-25 md:py-30">
            <motion.div
               className="w-full flex flex-col justify-between mb-5 gap-10 sm:gap-10"
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, amount: 0.2 }}
               variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
            >

               <div className="flex flex-col gap-3">
                  <h2 className="text-black text-4xl sm:text-5xl font-serif leading-tight">
                     Some of my Work
                  </h2>
                  <motion.div
                     className="h-[2px] w-72 rounded-full bg-black/40 md:w-95"
                     initial={{ scaleX: 0, originX: 0 }}
                     whileInView={{ scaleX: 1 }}
                     transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                     viewport={{ once: true }}
                  />
               </div>
            </motion.div>
            <div className="w-full flex flex-col gap-10">
               {featuredProjects.map((project, i) => (
                  <motion.div
                     key={i}
                     onMouseEnter={() => setActiveProject(i)}
                     onMouseLeave={() => setActiveProject(null)}
                     variants={{
                        hidden: { opacity: 0, y: 30 },
                        show: {
                           opacity: 1,
                           y: 0,
                           transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                        }
                     }}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: true }}
                     whileHover={{ y: -2 }}
                     className="group p-5"
                  >
                     <h2 className="font-serif text-4xl transition-all group-hover:italic">
                        {project.title}
                     </h2>

                     <p className="font-sans text-black/60 mt-3 max-w-xl">
                        {project.description}
                     </p>

                     <div className="flex gap-4 mt-4 text-xs uppercase tracking-widest text-black/40">
                        {project.tags.map((tag) => (
                           <span key={tag}>{tag}</span>
                        ))}
                     </div>
                     <div className="flex gap-4 mt-4 text-xs uppercase tracking-widest text-black/40">
                        {project.githubUrl && (
                           <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-black hover:text-black/50 text-[11px] uppercase tracking-[0.2em] transition-colors duration-200"
                           >
                              GitHub <ArrowUpRight size={11} />
                           </a>
                        )}
                        {project.liveUrl && (
                           <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-black hover:text-black/50 text-[11px] uppercase tracking-[0.2em] transition-colors duration-200"
                           >
                              Live <ArrowUpRight size={11} />
                           </a>
                        )}
                     </div>

                  </motion.div>
               ))}
            </div>

            <AnimatePresence>
               {activeProject !== null && (
                  <motion.img
                     key={activeProject}
                     src={featuredProjects[activeProject].image}
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{
                        opacity: 1,
                        scale: 1,
                        x: mouse.x + 40,
                        y: mouse.y - 120,
                     }}
                     exit={{ opacity: 0, scale: 0.9 }}
                     transition={{
                        opacity: { duration: 0.25, ease: "easeIn" }, // smooth in
                        scale: { duration: 0.25 },
                        x: { type: "spring", stiffness: 140, damping: 18 },
                        y: { type: "spring", stiffness: 140, damping: 18 },
                     }}
                     className="fixed top-0 left-0 w-[320px] h-[220px] object-cover pointer-events-none z-[9999] rounded-xl shadow-2xl"
                  />
               )}
            </AnimatePresence>
         </section>

         {/* SKILLS */}
         <section className="w-full px-8 md:px-10 px-8">
            <motion.div
               className="w-full flex flex-col gap-8 sm:gap-10"
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, amount: 0.2 }}
               variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
            >
               {/* Heading */}
               <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } }}
                  className="flex flex-col gap-3">
                  <p className="text-black/50 text-xs sm:text-sm font-medium tracking-widest uppercase">
                     What I work with
                  </p>
                  <h2
                     className="text-black text-4xl sm:text-5xl font-serif leading-tight"
                  >
                     Skills
                  </h2>
                  <motion.div
                     className="h-[2px] w-22 rounded-full bg-black/40 md:w-28"
                     initial={{ scaleX: 0, originX: 0 }}
                     whileInView={{ scaleX: 1 }}
                     transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                     viewport={{ once: true }}
                  />
               </motion.div>

               <motion.div
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
                  className="flex flex-wrap gap-2 sm:gap-3"
               >
                  {skills.map((skill, i) => (
                     <motion.span
                        key={i}
                        variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } }}
                        whileHover={{ y: -2, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-black bg-black/10 border border-white/25 hover:bg-white/20 hover:border-black transition-colors duration-200 backdrop-blur-sm"
                     >
                        {skill}
                     </motion.span>
                  ))}
               </motion.div>
            </motion.div>
         </section>

         {/* CTA */}
         <section className="w-full px-8 md:px-10 px-8 py-40">
            <motion.div
               variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               className="max-w-3xl"
            >
               <h2 className="font-serif text-4xl mb-6">
                  Let’s build something meaningful.
               </h2>

               <a
                  href="/contact"
                  className="font-sans text-sm uppercase tracking-[0.3em] border-b border-black hover:opacity-60"
               >
                  Get in touch
               </a>
            </motion.div>
         </section>
         <Footer />
      </div>
   )
}