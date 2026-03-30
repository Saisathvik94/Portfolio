import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const featuredProjects = [
  {
    title: "Shareout",
    description:
      "Share text, images, and files instantly via secure, temporary sessions — no account needed.",
    tags: ["JavaScript", "React", "Node.js"],
  },
  {
    title: "Vendora",
    description:
      "A full-stack marketplace with modular architecture for managing products and users.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "CodeMaxx",
    description:
      "AI-powered tool to explain, fix, and improve code across multiple languages.",
    tags: ["Go", "AI", "CLI"],
  },
]


export function Home() {
   const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [80, 0])
  return (
    <div className="bg-[#fafafa] text-[#111] mt-25 md:mt-25">
      {/* HERO */}
      <section className="min-h-screen bg-[#fafafa] text-black flex items-center px-4 md:px-16">
         <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-16">
         <motion.div
            initial="hidden"
            animate="show"
            className="flex-1"
         >
            <motion.h1
               variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }}}}
               className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1]"
            >
               I’m Sai Sathvik, I build full-stack applications, developer tools, and real-time systems.
            </motion.h1>

            {/* SECOND LINE */}
            <motion.p
               variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }}}}
               className="mt-8 text-lg md:text-xl text-black/60 max-w-2xl leading-relaxed"
            >
               I design and build software that is performant, reliable, and
               built for real-world use from web applications to backend systems.
            </motion.p>

            {/* LINKS */}
            <motion.div
               variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }}}}
               className="mt-10 flex gap-8 text-xs uppercase tracking-[0.3em]"
            >
               {["Projects", "About", "Contact"].map((link) => (
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
               src="/profilephoto.jpeg"
               alt="profile"
               className="w-full h-full object-cover grayscale contrast-125 brightness-90"
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
            className="relative rounded-lg w-full h-[80vh] mt-15 overflow-hidden flex items-center"
         >
            {/* 🎥 VIDEO */}
            <motion.video
            src="/projects/runner.mp4"
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
      <section className="px-8 py-32">
        <div className="max-w-5xl flex flex-col gap-24">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}}}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              className="group cursor-pointer"
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-8 py-32">
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}}}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="font-serif text-3xl mb-6">
            Tools & Technologies
          </h2>

          <p className="font-sans text-lg text-black/70 leading-loose">
            JavaScript, TypeScript, Go, Python, React, Tailwind CSS,
            Framer Motion, Three.js, Node.js, Express, Flask, MongoDB, Git
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-8 py-40">
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}}}
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

    </div>
  )
}