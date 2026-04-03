import { motion } from "framer-motion";
import Footer from "../components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.5,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};
const skills = [
    { name: "React", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 88, category: "Frontend" },
    { name: "Tailwind CSS", level: 80, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Go", level: 70, category: "Backend" },
    { name: "Redis", level: 65, category: "Backend" },
];

const experience = [
    {
        role: "Open Source Contributor",
        org: "Elite Coders",
        period: "Jan 2026 – Present",
        desc: "Contributing to open-source repositories — reviewing PRs, shipping features, and collaborating with developers across the community.",
    },
    {
        role: "Open Source Member",
        org: "GDGC · VJIT",
        period: "Oct 2025 – Present",
        desc: "Active member of the Google Developer Group on Campus. Participating in open-source initiatives, developer events, and peer knowledge-sharing sessions.",
    },
    {
        role: "Student Intern",
        org: "Scaler School of Technology",
        period: "Jul 2024 – Sep 2024 · Bengaluru",
        desc: "Intensive hands-on program at one of India's most rigorous tech institutions. Built foundational engineering skills that fed directly into real shipped projects.",
    },
];

export function About() {
    return (
        <>
            <div className="w-full px-4 sm:px-6 md:px-6 mt-25">
                {/* Hero + Image */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
                    <motion.div {...fadeUp} className="flex-1">
                        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
                            Hey, I'm Sai Sathvik — a Computer Science student at Vidya Jyothi
                            Institute of Technology.
                        </h1>
                        <br />
                        <p className="text-neutral-700 leading-relaxed">
                            I focus on building scalable, real-time web applications and modern
                            user interfaces. I enjoy turning ideas into real products from
                            full-stack marketplaces to CLI tools and OTP-based sharing systems.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full md:w-80 md:h-80 rounded-2xl overflow-hidden bg-neutral-200 flex-shrink-0"
                    >
                        <img
                            src="/assets/profilephoto.jpeg"
                            alt="Sai Sathvik"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                
                <motion.div {...fadeUp} className="max-w-3xl mb-20">
                    <h2 className="text-2xl font-medium mb-4">My Journey</h2>
                    <p className="text-neutral-700 leading-relaxed">
                        It started with a simple question: <em>how does this actually work?</em> What began
                        with calculators and to-do apps quickly grew into full-stack systems — deployed,
                        real, and used by others.
                        <br /><br />
                        Over time, I moved from just writing React frontends to architecting backends
                        with Node.js and Redis, and eventually learning Go to build CLI tools that run
                        on Windows, macOS, and Linux. Today I focus on systems that are fast, real-time,
                        and built to last — not just to demo.
                    </p>
                </motion.div>

                {/* Experience */}
                <motion.div {...fadeUp} className="max-w-3xl mb-20">
                    <h2 className="text-2xl font-medium mb-8">Experience</h2>

                    <div className="relative">
                        {/* vertical rule */}
                        <div className="absolute left-0 top-2 bottom-2 w-px bg-neutral-200" />

                        <div className="space-y-10 pl-8">
                            {experience.map((item, i) => (
                                <div key={i} className="relative">
                                    {/* dot */}
                                    <span className="absolute -left-[33px] top-1.5 w-2 h-2 rounded-full bg-neutral-900 ring-2 ring-white" />
                                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                                        <div>
                                            <p className="font-medium text-neutral-900">{item.role}</p>
                                            <p className="text-sm text-neutral-500">{item.org}</p>
                                        </div>
                                        <span className="text-xs text-neutral-400 whitespace-nowrap font-mono">
                                            {item.period}
                                        </span>
                                    </div>
                                    <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Education */}
                <motion.div {...fadeUp} className="max-w-3xl mb-20">
                    <h2 className="text-2xl font-medium mb-8">Education</h2>

                    <div className="relative">
                        <div className="absolute left-0 top-2 bottom-2 w-px bg-neutral-200" />

                        <div className="pl-8 relative">
                            <span className="absolute -left-[33px] top-1.5 w-2 h-2 rounded-full bg-neutral-900 ring-2 ring-white" />
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                                <div>
                                    <p className="font-medium text-neutral-900">
                                        Bachelor of Technology (BTech), Computer Science
                                    </p>
                                    <p className="text-sm text-neutral-500">
                                        Vidya Jyothi Institute of Technology
                                    </p>
                                </div>
                                <span className="text-xs text-neutral-400 whitespace-nowrap font-mono">
                                    2024 – 2028
                                </span>
                            </div>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                                Four-year undergraduate program in Computer Science. Building things
                                that matter alongside whatever the curriculum demands — with a focus on
                                systems thinking, real-time architecture, and developer tooling.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Technical Arsenal */}
                <motion.div {...fadeUp} className="max-w-3xl mb-20">
                    <h2 className="text-2xl font-medium mb-8">Technical Arsenal</h2>

                    <div className="space-y-4">
                        {skills.map((skill, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <span className="w-28 text-sm font-medium text-neutral-800 flex-shrink-0">
                                    {skill.name}
                                </span>
                                <div className="flex-1 h-1 bg-neutral-100 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-neutral-900 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.9, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                                    />
                                </div>
                                <span className="w-16 text-xs text-neutral-400 font-mono text-right flex-shrink-0">
                                    {skill.category}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {["WebSockets", "Express.js", "Supabase", "Vite", "GitHub Actions", "GoReleaser", "DSA"].map(
                            (tech) => (
                                <span
                                    key={tech}
                                    className="text-xs font-mono px-3 py-1 rounded border border-neutral-200 text-neutral-500"
                                >
                                    {tech}
                                </span>
                            )
                        )}
                    </div>
                </motion.div>

                {/* Focus */}
                <motion.div {...fadeUp} className="max-w-3xl mb-20">
                    <h2 className="text-2xl font-medium mb-4">What I'm Focused On</h2>
                    <ul className="space-y-2 text-neutral-700">
                        <li>• Real-time applications</li>
                        <li>• Scalable backend systems using Node.js & Go</li>
                        <li>• Clean UI using React & Tailwind</li>
                        <li>• Developer tooling & CLI-first software</li>
                        <li>• Data Structures & problem solving</li>
                    </ul>
                </motion.div>

                {/* CTA */}
                <section className="w-full pb-20">
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
            </div>
            <Footer />
        </>
    );
}