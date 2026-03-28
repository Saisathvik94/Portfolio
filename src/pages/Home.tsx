import CloudAnimation from "../ui/CloudAnimation";
import SectionDivider from "../ui/SectionDivider";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";



const skills = [
  "JavaScript",
  "TypeScript",
  "Go",
  "Python",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Three.js",
  "Node.js",
  "Express.js",
  "Flask",
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
    description: "Share text, images, and files instantly via secure, temporary sessions — no account needed.",
    tags: ["JavaScript", "React", "Node.js"],
    image: "/projects/shareout.png",
    githubUrl: "https://github.com/Saisathvik94/Shareout",
    liveUrl: "https://shareout-taupe.vercel.app/"
  },
  {
    title: "Vendora",
    description: "Vendora is a full-stack marketplace web app with a modular architecture for efficiently managing products, users, and dynamic interactions.",
    tags: ["React", "Nodejs", "Expressjs", "MongoDb"],
    image: "/projects/vendora.png",
    githubUrl: "https://github.com/Saisathvik94/organizer",
  },
  {
    title: "CodeMaxx",
    description: "AI-powered tool to explain, fix, and improve your code — works across multiple languages.",
    tags: ["Go", "AI", "CLI"],
    image: "/projects/codemaxx.png",
    githubUrl: "https://github.com/Saisathvik94/codemaxx",
  },
];

export function Home() {
   
   return (
      <div>
         <CloudAnimation />
         {/* Intro section */}
         <section className="relative z-10 w-full min-h-screen flex items-center justify-center px-6 sm:px-8 py-16 sm:py-24">        
         <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15, delayChildren: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 max-w-6xl w-full"
         >
            
            <motion.div 
               variants={{
               hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
               show: { opacity: 1, scale: 1, filter: "blur(0px)" }
               }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="relative flex-shrink-0"
            >
               <motion.div
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full p-1.5 backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl overflow-hidden"
               >
               <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <span className="text-[10px] text-white/20 tracking-[0.5em] uppercase">
                     <img src="/profilephoto.jpeg" alt="myimage" />
                  </span>
               </div>
               </motion.div>
               
               <div className="absolute -inset-10 bg-blue-400/10 blur-[100px] rounded-full -z-10" />
            </motion.div>

            <div className="text-center md:text-left flex flex-col items-center md:items-start max-w-xl w-full">
               <motion.span 
               variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
               className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] mb-4 block"
               >
               Web Developer & Go Enthusiast
               </motion.span>
               
               <motion.h1 
               variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
               className="text-white text-4xl sm:text-6xl md:text-8xl font-light mb-4 tracking-tight"
               style={{ fontFamily: "'Cormorant Garamond', serif" }}
               >
               Sai Sathvik
               </motion.h1>

               <motion.h2 
               variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
               className="text-blue-100/70 text-base sm:text-xl md:text-2xl font-light italic mb-8 px-4 sm:px-0"
               style={{ fontFamily: "'Cormorant Garamond', serif" }}
               >
               Building fast, purposeful software from web apps to CLI tools.
               </motion.h2>

               <motion.div 
               variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
               className="flex gap-6 sm:gap-8 items-center md:items-start"
               >
                  {['About', 'Projects', 'Contact'].map((link) => (
                  <a 
                     key={link} 
                     href={`${link.toLowerCase()}`}
                     className="text-white/40 hover:text-white transition-all duration-300 text-[10px] uppercase tracking-[0.3em] border-b border-transparent hover:border-white/40 pb-1"
                  >
                     {link}
                  </a>
                  ))}
               </motion.div>
            </div>

         </motion.div>
         </section>

         <SectionDivider/>

         {/* Skills */}

         <section className="w-full px-6 sm:px-10 md:px-16 lg:px-20 py-20 sm:py-24">
            <motion.div
            className="w-full flex flex-col gap-8 sm:gap-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 }}}}
            >
               {/* Heading */}
               <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}}} 
               className="flex flex-col gap-3">
                  <p className="text-white/50 text-xs sm:text-sm font-medium tracking-widest uppercase">
                     What I work with
                  </p>
                  <h2
                     className="text-white text-4xl sm:text-5xl font-bold leading-tight"
                     style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                     Skills
                  </h2>
                  <motion.div
                     className="h-[2px] w-28 rounded-full bg-white/40"
                     initial={{ scaleX: 0, originX: 0 }}
                     whileInView={{ scaleX: 1 }}
                     transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                     viewport={{ once: true }}
                  />
               </motion.div>
         
               <motion.div
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 }}}}
                  className="flex flex-wrap gap-2 sm:gap-3"
               >
                  {skills.map((skill, i) => (
                     <motion.span
                     key={i}
                     variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}}}
                     whileHover={{ y: -2, scale: 1.05 }}
                     transition={{ type: "spring", stiffness: 400, damping: 20 }}
                     className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs   sm:text-sm font-medium text-white bg-white/10 border border-white/25 hover:bg-white/20 hover:border-blue-400/70 hover:text-blue-200 transition-colors duration-200 backdrop-blur-sm"
                     >
                     {skill}
                     </motion.span>
                  ))}
               </motion.div>
            </motion.div>
         </section>

         <SectionDivider/>

         {/* Projects */}
         <section className="w-full px-6 sm:px-10 md:px-16 lg:px-20 py-20 sm:py-24">
            <motion.div
            className="w-full flex flex-col gap-10 sm:gap-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
               hidden: {},
               show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
            }}
            >
      
            <motion.div
               variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
               }}
               className="flex flex-col gap-3"
            >
               <p className="text-white/50 text-xs sm:text-sm font-medium tracking-widest uppercase">
                  Things I've built
               </p>
               <h2
                  className="text-white text-4xl sm:text-5xl font-bold leading-tight"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
               >
                  Projects
               </h2>
               <motion.div
                  className="h-[2px] w-42 rounded-full bg-white/40"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
               />
            </motion.div>
      
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
               {featuredProjects.map((project, i) => (
                  <motion.div
                  key={i}
                  variants={{
                     hidden: { opacity: 0, y: 20 },
                     show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group flex flex-col rounded-2xl overflow-hidden
                              bg-white/10 border border-white/20
                              hover:bg-white/15 hover:border-white/35
                              backdrop-blur-sm transition-colors duration-300"
                  >
                  {/* Screenshot */}
                  <div className="relative w-full h-44 overflow-hidden border-b border-white/10">
                     <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                        (e.currentTarget.nextSibling as HTMLElement).style.display = "flex";
                        }}
                        className="w-full h-full object-cover object-top
                                 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                     />
                     {/* Subtle bottom fade so screenshot blends into card body */}
                     <div className="absolute bottom-0 left-0 right-0 h-8
                                    bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                  </div>
      
                  {/* Card body */}
                  <div className="flex flex-col gap-4 p-5 sm:p-6">
      
                     <div className="flex flex-col gap-1.5">
                        <h3
                        className="text-white text-lg sm:text-xl font-semibold"
                        >
                        {project.title}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                        {project.description}
                        </p>
                     </div>
      
                     <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, t) => (
                           <span
                              key={t}
                              className="px-2.5 py-1 rounded-full text-[11px] font-medium text-white/70 bg-white/10 border border-white/20"
                           >
                              {tag}
                           </span>
                        ))}
                        </div>
      
                        <div className="flex items-center gap-4">
                        {project.githubUrl && (
                           <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-white/50 hover:text-white text-[11px] uppercase tracking-[0.2em] transition-colors duration-200"
                           >
                              GitHub <ArrowUpRight size={11} />
                           </a>
                        )}
                        {project.liveUrl && (
                           <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-white/50 hover:text-white text-[11px] uppercase tracking-[0.2em] transition-colors duration-200"
                           >
                              Live <ArrowUpRight size={11} />
                           </a>
                        )}
                        </div>
                     </div>
      
                  </div>
                  </motion.div>
               ))}
            </div>
      
            {/* View all */}
            <motion.div
               variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
               }}
               className="flex justify-end"
            >
               <a
                  href="/projects"
                  className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300"
               >
                  <span className="text-[11px] uppercase tracking-[0.3em]">
                  View all projects
                  </span>
                  <motion.span
                  className="flex items-center"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                  <ArrowUpRight size={15} />
                  </motion.span>
               </a>
            </motion.div>
      
            </motion.div>
         </section>
      </div>
   );
}