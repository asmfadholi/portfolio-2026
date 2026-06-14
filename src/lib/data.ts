export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
  featured: boolean;
  year: number;
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readTime: number;
  featured: boolean;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const projects: Project[] = [
  {
    slug: "portfolio-2026",
    title: "Portfolio 2026",
    description:
      "A minimal, multi-themed personal portfolio built with Next.js, TypeScript, TailwindCSS, and Framer Motion. Features five color themes and smooth page transitions.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    url: "https://asmfadholi.vercel.app",
    featured: true,
    year: 2026,
  },
  {
    slug: "ja-learning",
    title: "JA Learning",
    description:
      "A Japanese language learning platform for intermediate learners. Features structured lessons across 11 chapters, 1,400+ vocabulary words, kanji instruction, quizzes, and audio pronunciation guides.",
    tags: ["Next.js", "React", "TypeScript", "Vercel"],
    url: "https://ja-learning.vercel.app",
    featured: true,
    year: 2024,
  },
  {
    slug: "transfr",
    title: "Transfr",
    description:
      "A web app that enables seamless transfer of digital wallet balances between popular Indonesian e-wallet platforms including OVO, Dana, GoPay, and LinkAja.",
    tags: ["React", "Firebase"],
    url: "https://transfr-web.firebaseapp.com",
    featured: true,
    year: 2019,
  },
  {
    slug: "desa-wisata",
    title: "Desa Wisata",
    description:
      "A tourism destination web platform showcasing local Indonesian villages as travel destinations, helping travelers discover and explore rural tourism spots.",
    tags: ["Vue.js", "Firebase"],
    url: "https://desa-wisata-c1a52.web.app",
    featured: true,
    year: 2020,
  },
];

export const posts: Post[] = [
  {
    slug: "multi-theme-css-variables",
    title: "Building a Multi-Theme System with CSS Custom Properties",
    description:
      "A deep dive into using CSS custom properties and data attributes to power a robust, flash-free multi-theme system in Next.js without any third-party libraries.",
    date: "2026-05-20",
    tags: ["CSS", "Next.js", "Design Systems"],
    readTime: 8,
    featured: true,
  },
  {
    slug: "framer-motion-patterns",
    title: "5 Framer Motion Patterns Every React Developer Should Know",
    description:
      "From orchestrated stagger animations to shared layout transitions — practical patterns that will make your UIs feel alive without overwhelming the user.",
    date: "2026-04-12",
    tags: ["React", "Framer Motion", "Animation"],
    readTime: 10,
    featured: true,
  },
  {
    slug: "nextjs-performance-tips",
    title: "Next.js Performance: Beyond the Basics",
    description:
      "Core Web Vitals, image optimization, font subsetting, partial prerendering, and streaming SSR — the techniques I use on every production Next.js project.",
    date: "2026-03-08",
    tags: ["Next.js", "Performance", "Web Vitals"],
    readTime: 12,
    featured: true,
  },
  {
    slug: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns for Component Libraries",
    description:
      "Polymorphic components, conditional types, and template literal types — the TypeScript tricks that make building a component library a joy instead of a chore.",
    date: "2026-02-14",
    tags: ["TypeScript", "React", "Patterns"],
    readTime: 9,
    featured: false,
  },
  {
    slug: "css-grid-masonry",
    title: "True Masonry Layout with CSS Grid",
    description:
      "How to achieve a proper masonry layout using only CSS Grid and the upcoming masonry display specification, with a JavaScript fallback for older browsers.",
    date: "2026-01-22",
    tags: ["CSS", "Grid", "Layout"],
    readTime: 6,
    featured: false,
  },
];

export const skills: SkillGroup[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "TailwindCSS", "Framer Motion", "Radix UI"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL"] },
  { category: "Tooling", items: ["Vite", "Webpack", "Docker", "CI/CD", "Git"] },
];

export const personal = {
  name: "Fadholi",
  role: "Software Engineer",
  tagline: "I build fast, accessible, and beautiful web experiences.",
  bio: "I'm a full-stack engineer with a deep focus on the frontend. I care about performance, design systems, and the small details that make products feel delightful.",
  location: "Japan",
  email: "business.asmfadholi@gmail.com",
  github: "https://github.com/asmfadholi",
  twitter: "https://x.com/asmfadholi",
  linkedin: "https://www.linkedin.com/in/mochammad-fadholi",
};
