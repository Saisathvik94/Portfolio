export interface Project {
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
  blogContent?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "queuely",
    index: "01",
    title: "Queuely",
    tagline: "Reliable notification infrastructure for modern applications.",
    category: "Infrastructure / Backend",
    year: "2026",
    stack: ["Go", "Next.js", "Redis"],
    githubUrl: "https://github.com/Saisathvik94/Queuely",
    liveUrl: "https://queuely.saisathvik.site",
    stars: 5,
    span: "large",
    image: "/projects/queuely.png",
    blogContent: `
Queuely provides reliable notification infrastructure for modern applications. 

Send transactional emails, SMS, push notifications, and webhooks using one simple SDK. 

No message brokers, no queue setup, and no backend complexity — just an API key and production-ready notifications instantly.
    `
  },
  {
    id: "shareout",
    index: "02",
    title: "Shareout",
    tagline: "Ephemeral file sharing via one-time OTP",
    category: "Full-Stack Web App",
    year: "2025",
    stack: ["React", "Node.js", "Redis", "Supabase"],
    githubUrl: "https://github.com/Saisathvik94/Shareout",
    liveUrl: "https://shareout-taupe.vercel.app/",
    stars: 5,
    span: "mid",
    image: "/projects/shareout.png",
    blogContent: `
**Shareout** is a simple and powerful tool that lets users share text, and soon files & images, instantly through a one-time password (OTP). Built for speed and simplicity.

### 🔐 OTP-Based Secure Sharing
- Share anything using a one-time password.
- Each OTP is mapped to a Redis key and expires automatically.

### ⚡ Instant Text Sharing
- Send text instantly through a simple UI.

### 🖼️ File & Media Sharing 
- Files/images upload to a Supabase bucket, and the URL is securely stored in Redis.
- Retrieved simply using the OTP.

### ⏳ Auto-Expiring Data
- Redis TTL ensures shared content deletes automatically.

### 🛡️ Rate Limiting
- Protects from spam, abuse, and excessive OTP generation.
    `
  },
  {
    id: "organizer",
    index: "03",
    title: "Organizer",
    tagline: "One command. Clean directories.",
    category: "CLI Tool · Go",
    year: "2026",
    stack: ["Go", "GoReleaser", "Bash"],
    githubUrl: "https://github.com/Saisathvik94/organizer",
    stars: 5,
    span: "wide",
    image: "/projects/organizer.png",
    blogContent: `
**Organizer CLI** is a simple, fast, cross-platform command-line tool written in Go to organize files in a directory based on their file types (Images, Documents, Videos, Programs, etc.).

Just run one command and your messy folder becomes clean ✨

### 🚀 Features
**📁 Organizes files by file extensions**
- 🖼️ Images → \`Images/\`
- 📄 Documents → \`Documents/\`
- 🎥 Videos → \`Videos/\`
- 🎵 Audio → \`Audio/\`
- 💻 Code files → \`Programs/\`
- 📦 Archives → \`Archives/\`
- 📌 Others → \`Others/\`

**👷‍♂️ Works for:**
- A single file or a whole directory (like Downloads)
- Automatically creates folders if they don’t exist
- Cross-platform support (Windows, macOS, Linux)
    `
  },
  {
    id: "codemaxx",
    index: "04",
    title: "CodeMaxx",
    tagline: "AI-powered coding assistant in terminal",
    category: "CLI Tool · AI",
    year: "2026",
    stack: ["Go", "Claude API"],
    githubUrl: "https://github.com/Saisathvik94/codemaxx",
    stars: 3,
    span: "mid",
    image: "/projects/codemaxx.png",
    blogContent: `
**CodeMaxx** is a cross-platform CLI tool that helps developers understand and fix code using multiple large language models (LLMs).

### 🤖 Using Local AI (Ollama)
You can run models entirely on your machine.
- Install Ollama and pull a model like \`qwen2.5-coder:3b\`.
- Select it inside CodeMaxx with \`codemaxx models\`.
- All commands will **run locally** without sending your code to external APIs.

**Best for:**
- Private repositories
- Offline development
- Security-sensitive projects

CodeMaxx bridges the gap between your local terminal environment and powerful AI models.
    `
  },
  {
    id: "vendora",
    index: "05",
    title: "Vendora",
    tagline: "Marketplace with modular architecture",
    category: "Full-Stack Web App",
    year: "2025",
    stack: ["React", "Node", "MongoDB"],
    githubUrl: "https://github.com/Saisathvik94/Vendora",
    stars: 2,
    span: "large",
    image: "/projects/vendora.png",
    blogContent: `
Vendora is a complete full-stack e-commerce marketplace. The primary focus of this project was to learn and implement a modular architecture on the backend.

### Architecture
The backend is split into multiple independent modules handling Users, Products, Orders, and Payments. This makes the system resilient and easier to maintain.
    `
  }
];
