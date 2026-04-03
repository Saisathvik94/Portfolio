import { motion } from "framer-motion";
import Footer from "../components/Footer";

interface Project {
  id: string;
  index: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  image: string; 
  span: "large" | "mid" | "small" | "wide";
}

const PROJECTS: Project[] = [
  {
    id: "shareout",
    index: "01",
    title: "Shareout",
    tagline: "Ephemeral file sharing via one-time OTP",
    category: "Full-Stack Web App",
    year: "2025",
    stack: ["React", "Node.js", "Redis", "Supabase"],
    githubUrl: "https://github.com/Saisathvik94/Shareout",
    liveUrl: "https://shareout-taupe.vercel.app/",
    stars: 5,
    span: "wide",
    image: "/projects/shareout.png",  // ← add your static image
  },
  {
    id: "organizer",
    index: "02",
    title: "Organizer",
    tagline: "One command. Clean directories.",
    category: "CLI Tool · Go",
    year: "2026",
    stack: ["Go", "GoReleaser", "Bash"],
    githubUrl: "https://github.com/Saisathvik94/organizer",
    stars: 5,
    span: "small",
    image: "/projects/organizer.png",
  },
  {
    id: "codemaxx",
    index: "03",
    title: "CodeMaxx",
    tagline: "AI-powered coding assistant in terminal",
    category: "CLI Tool · AI",
    year: "2026",
    stack: ["Go", "Claude API"],
    githubUrl: "https://github.com/Saisathvik94/codemaxx",
    stars: 3,
    span: "large",
    image: "/projects/codemaxx.png",
  },
  {
    id: "vendora",
    index: "04",
    title: "Vendora",
    tagline: "Marketplace with modular architecture",
    category: "Full-Stack Web App",
    year: "2025",
    stack: ["React", "Node", "MongoDB"],
    githubUrl: "https://github.com/Saisathvik94/Vendora",
    stars: 2,
    span: "mid",
    image: "/projects/vendora.png",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};


const SPAN_MAP = {
  large: "md:col-span-7 md:row-span-5",
  mid: "md:col-span-5 md:row-span-5",
  small: "md:col-span-5 md:row-span-3",
  wide: "md:col-span-12 md:row-span-4",
};

const WHITE_CURSOR = `url("data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 26" overflow="visible"><path d="M 5.691 1.119 C 5.769 1.183 5.846 1.247 5.923 1.311 C 6.073 1.436 6.222 1.561 6.371 1.686 C 6.619 1.895 6.871 2.099 7.124 2.302 C 7.429 2.548 7.733 2.796 8.038 3.044 C 8.29 3.25 8.543 3.456 8.797 3.661 C 9.281 4.054 9.764 4.45 10.241 4.851 C 10.507 5.075 10.779 5.29 11.053 5.504 C 11.302 5.703 11.546 5.909 11.79 6.114 C 12.01 6.3 12.234 6.482 12.461 6.659 C 12.767 6.899 13.065 7.148 13.362 7.398 C 13.583 7.584 13.807 7.765 14.034 7.943 C 14.3 8.152 14.561 8.367 14.82 8.585 C 15.127 8.843 15.438 9.095 15.753 9.343 C 16.409 9.862 17.055 10.394 17.694 10.932 C 17.961 11.155 18.232 11.371 18.506 11.585 C 18.755 11.784 18.999 11.99 19.243 12.195 C 19.463 12.381 19.687 12.562 19.914 12.74 C 21.858 14.27 21.858 14.27 21.984 15.25 C 22.047 16.069 21.936 16.736 21.418 17.402 C 20.985 17.864 20.444 18.312 19.781 18.357 L 19.638 18.358 L 19.474 18.359 L 19.296 18.36 L 19.106 18.361 C 18.97 18.362 18.834 18.363 18.699 18.364 C 18.483 18.365 18.267 18.366 18.052 18.368 C 17.438 18.373 16.825 18.377 16.212 18.38 C 15.836 18.383 15.461 18.385 15.085 18.389 C 14.943 18.39 14.801 18.39 14.658 18.391 C 12.835 18.399 11.213 18.632 9.83 19.93 C 9.504 20.264 9.234 20.648 8.958 21.023 C 8.742 21.313 8.52 21.597 8.298 21.883 C 7.936 22.353 7.575 22.824 7.217 23.297 C 7.133 23.409 7.048 23.52 6.964 23.631 C 6.801 23.846 6.638 24.061 6.477 24.277 C 5.9 25.044 5.332 25.796 4.324 25.983 C 3.406 26.041 2.663 25.976 1.931 25.369 C 1.348 24.818 1.056 24.158 1.016 23.368 L 1.004 23.133 L 0.991 22.877 L 0.977 22.604 C 0.965 22.355 0.952 22.105 0.94 21.856 C 0.927 21.588 0.913 21.319 0.9 21.051 C 0.867 20.407 0.835 19.762 0.803 19.118 C 0.788 18.815 0.773 18.511 0.758 18.209 L 0.748 18.026 C 0.724 17.532 0.699 17.038 0.675 16.544 C 0.656 16.166 0.637 15.788 0.618 15.409 C 0.539 13.811 0.457 12.213 0.374 10.616 C 0.336 9.887 0.299 9.159 0.262 8.43 C 0.232 7.847 0.202 7.264 0.171 6.681 C 0.15 6.282 0.129 5.884 0.109 5.485 C 0.098 5.257 0.086 5.029 0.074 4.801 C -0.073 2.114 -0.073 2.114 0.766 1.009 C 2.211 -0.568 4.232 -0.114 5.691 1.119 Z" fill="white" stroke="black" stroke-width="1.2" stroke-linejoin="round"/></svg>`)}") 3 5, auto`;

function ProjectCard({ p }: { p: Project }) {
  const isLarge = p.span === "large";
  const isWide = p.span === "wide";

  return (
    <motion.article
      variants={{ hidden: { opacity: 0, y: 60 },show: {opacity: 1,y: 0,transition: {duration: 0.8,ease: [0.22, 1, 0.36, 1]}}}}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={`
        group relative col-span-1 ${SPAN_MAP[p.span]}
        rounded-2xl overflow-hidden
        bg-black
        backdrop-blur-xl
        border border-neutral-200/50
        hover:border-neutral-300
        transition-all duration-300
      `}
    >
      {/* Image — only visible on hover */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="
            w-full h-full object-cover
            scale-105 group-hover:scale-110
            opacity-0 group-hover:opacity-100
            transition-all duration-700 ease-out
          "
        />
        {/* Overlay — only darkens when image is showing */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500" />
      </div>

      {/* Watermark index */}
      <span
        aria-hidden
        className="
          absolute bottom-0 right-4
          text-[6rem] md:text-[8rem]
          font-serif leading-none
          opacity-[0.03] group-hover:opacity-[0.07]
          transition duration-500
          text-white
          pointer-events-none select-none
        "
      >
        {p.index}
      </span>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-8">

        {/* Top */}
        <div className="flex justify-between items-start">
          <span className="text-[12px] uppercase tracking-widest text-neutral-400">
            — {p.index}
          </span>
          <span className="text-[12px] text-neutral-400 flex items-center gap-1">
            ★ {p.stars}
          </span>
        </div>

        {/* Body */}
        <div className="mt-auto space-y-3">
          <p className="text-[11px] uppercase tracking-wide text-neutral-500">
            {p.category}
          </p>

          <h3
            className={`
              font-serif font-semibold leading-[1.1] text-white
              ${isWide ? "text-4xl md:text-5xl" : isLarge ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"}
            `}
          >
            {p.title}
          </h3>

          <p className="text-sm text-neutral-400 max-w-md">
            {p.tagline}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {p.stack.map((tech) => (
              <span
                key={tech}
                className="text-[12px] px-2 py-1 rounded-md bg-neutral-800 text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6 text-[11px] text-neutral-400">
          <span>{p.year}</span>
          <div className="flex items-center gap-4 text-sm">
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Live →
              </a>
            )}
            <a
              href={p.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Work() {
  return (
    <>
      <section className="w-full mt-25 px-4 sm:px-6 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6"
        >
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-600 mb-2">
              Selected Work · 2025–2026
            </p>
            <h2 className="font-condensed text-neutral-900 text-6xl md:text-8xl font-semibold leading-[0.95] tracking-tight">
              PROJECTS
            </h2>
          </div>
          <p className="text-[11px] font-mono text-neutral-500 md:text-right max-w-xs">
            A curated collection of projects focused on engineering, design and real-world impact.
          </p>
        </motion.div>

        <motion.div
          className="h-[2px] w-full rounded-full bg-black mb-10"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ cursor: WHITE_CURSOR }}
          className="
            grid grid-cols-1 md:grid-cols-12
            gap-4 md:gap-6
            md:auto-rows-[72px]
            md:grid-flow-row-dense
          "
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </motion.div>
      </section>
      <Footer />
    </>
  );
}