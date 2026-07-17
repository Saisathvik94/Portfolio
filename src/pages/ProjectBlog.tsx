import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data/projectsData";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import ReactMarkdown from "react-markdown";

export function ProjectBlog() {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafafa]">
        <h1 className="text-4xl font-serif text-black">Project not found</h1>
        <Link to="/work" className="ml-4 text-neutral-500 underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#fafafa] min-h-screen text-[#111]">
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-24 md:py-32">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-neutral-500 hover:text-black transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Back to Work
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-amber-600 mb-4">
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-tight tracking-tight mb-6">
            {project.title}
          </h1>

          <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mb-10 leading-relaxed">
            {project.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-12">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm uppercase tracking-widest bg-black text-white px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors"
              >
                Visit Site <ExternalLink size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm uppercase tracking-widest border border-neutral-300 px-6 py-3 rounded-full hover:bg-neutral-100 transition-colors"
              >
                Source Code <Github size={16} />
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-video md:aspect-[21/9] bg-neutral-200 rounded-3xl overflow-hidden mb-16 shadow-xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg prose-neutral max-w-none"
        >
          <div className="mb-10 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full border border-neutral-200 bg-white shadow-sm text-neutral-600"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="text-lg md:text-xl text-neutral-800 leading-relaxed space-y-6">
            {project.blogContent ? (
              <ReactMarkdown
                components={{
                  h3: ({ node, ...props }) => (
                    <h3 className="text-2xl font-serif mt-10 mb-4" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="mb-6" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="text-neutral-700" {...props} />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong className="font-semibold text-black" {...props} />
                  ),
                }}
              >
                {project.blogContent}
              </ReactMarkdown>
            ) : (
              <p>More details coming soon.</p>
            )}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
