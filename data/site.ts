export const site = {
  metadata: {
    title: "Nilay Upadhyay | Senior Full Stack Engineer",
    description:
      "Senior Full Stack Engineer with 7+ years building SaaS, EdTech, and enterprise platforms with React, Next.js, Node.js, and cloud infrastructure on AWS and Azure.",
  },

  personal: {
    name: "Nilay Upadhyay",
    title: "Senior Full Stack Engineer",
    location: "Toronto, ON",
    email: "nilayupadhyay2179@gmail.com",
    phone: "437-663-7967",
  },

  nav: {
    brand: "Nilay Upadhyay",
    links: [
      { label: "About", href: "#about" },
      { label: "Stack", href: "#stack" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    external: [
      { label: "Resume", href: "#" },
      { label: "LinkedIn", href: "https://linkedin.com/in/nilayupadhyay" },
      { label: "GitHub", href: "https://github.com/Nilayupadhyay" },
    ],
  },

  hero: {
    badge: "Available for Senior Engineering Roles",
    headline: "Building scalable products and cloud solutions.",
    subheadline:
      "Senior Full Stack Engineer with 7+ years of experience delivering SaaS, enterprise and cloud-native applications.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "AWS",
      "PostgreSQL",
    ],
    ctas: {
      projects: { label: "View Projects", href: "#projects" },
      resume: { label: "Download Resume", href: "#" },
    },
    metrics: [
      { value: "7+", label: "Years Experience" },
      { value: "Full Stack", label: "Engineer" },
      { value: "AWS + Azure", label: "Cloud" },
      { value: "Open", label: "To Work" },
    ],
  },

  about: {
    title: "About",
    subtitle: "Engineering products that scale — from architecture to production.",
    intro: [
      "I'm a Senior Full Stack Engineer with 7+ years designing and shipping production systems across React, Next.js, TypeScript, Node.js, and cloud platforms on AWS and Azure.",
      "I've delivered SaaS and EdTech platforms, enterprise integrations, and cloud-native services — partnering with product and engineering teams to ship reliable software with measurable impact.",
    ],
    highlights: [
      "7+ Years Experience",
      "Full Stack Development",
      "Cloud Architecture",
      "SaaS Platforms",
      "Team Collaboration",
    ],
  },

  stack: {
    title: "Tech Stack",
    subtitle: "Technologies I use to build modern, scalable products.",
    categories: [
      {
        name: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Redux", "Tailwind"],
      },
      {
        name: "Backend",
        skills: ["Node.js", "Express", "NestJS"],
      },
      {
        name: "Cloud",
        skills: ["AWS", "Azure", "Docker"],
      },
      {
        name: "Database",
        skills: ["PostgreSQL", "MongoDB", "Redis"],
      },
      {
        name: "AI Workflow",
        skills: ["Cursor", "Claude", "OpenAI APIs"],
      },
    ],
  },

  experience: {
    title: "Experience",
    subtitle: "Full-stack ownership across SaaS, telematics, and enterprise systems.",
    items: [
      {
        role: "Software Engineer",
        company: "AAscent Info Solutions",
        location: "Ahmedabad, India",
        period: "Oct 2021 — Aug 2023",
        metrics: [
          "↓ 45% post-release defects",
          "↑ 40% faster CI/CD deploys",
          "Multi-tenant SaaS platform",
        ],
        highlights: [
          "Owned full-stack delivery with Node.js, TypeScript, Express, and React for business-critical workflows.",
          "Architected OAuth 2.0, JWT, and RBAC for secure multi-tenant application flows.",
          "Established TDD with Jest and Docker-based CI/CD automation across Agile sprints.",
        ],
      },
      {
        role: "Software Developer",
        company: "Octo Telematics North America",
        location: "Newton, MA",
        period: "Feb 2019 — Sept 2021",
        metrics: [
          "↓ 60% API latency reduction",
          "100k+ events processed daily",
          "↑ 40% deployment speed",
        ],
        highlights: [
          "Built and scaled Node.js services processing high-volume real-time telematics data.",
          "Designed REST APIs with enhanced logging and monitoring for distributed services.",
          "Resolved production incidents across APIs, pipelines, and dashboards with DevOps.",
        ],
      },
      {
        role: "Android Developer",
        company: "Octo Telematics North America",
        location: "Newton, MA",
        period: "Dec 2017 — Jan 2019",
        metrics: [
          "↓ 40% data transmission latency",
          "End-to-end mobile architecture",
          "BLE module optimization",
        ],
        highlights: [
          "Led mobile architecture for telematics apps analyzing driver behavior via GPS and sensors.",
          "Built BLE modules improving connection stability and reducing transmission latency.",
          "Partnered with backend teams on API contracts and Agile release delivery.",
        ],
      },
    ],
  },

  projects: {
    title: "Featured Projects",
    subtitle: "Production systems with measurable impact across EdTech, SaaS, and cloud.",
    items: [
      {
        title: "EduFlow",
        period: "Apr 2025 — Oct 2025",
        description:
          "Role-based EdTech platform serving students, instructors, and administrators with modular backend services and production AWS infrastructure.",
        tech: ["React", "Node.js", "MongoDB", "Redux", "Docker", "AWS ECS"],
        results: [
          "Modular Express APIs with JWT auth and enrollment tracking",
          "Stripe payments + AWS ECS deployment with load balancing",
        ],
        gradient: "from-violet-600/40 via-purple-600/20 to-blue-600/30",
        liveDemo: "#",
        github: "#",
      },
      {
        title: "CodeRise",
        period: "Feb 2025 — Apr 2025",
        description:
          "Coding assessment platform engineered for secure, concurrent code execution at scale with containerized sandboxes.",
        tech: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS EC2"],
        results: [
          "↓ 60% database load via Redis caching",
          "Isolated Docker execution engine for safe code runs",
        ],
        gradient: "from-blue-600/40 via-cyan-600/20 to-violet-600/30",
        liveDemo: "#",
        github: "#",
      },
      {
        title: "Eventify",
        period: "Nov 2024 — Jan 2025",
        description:
          "Event management and ticketing platform with relational data modeling, Stripe payments, and automated notifications.",
        tech: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe"],
        results: [
          "PostgreSQL schemas + REST APIs for ticketing workflows",
          "End-to-end Stripe checkout with email automation",
        ],
        gradient: "from-emerald-600/30 via-teal-600/15 to-blue-600/25",
        liveDemo: "#",
        github: "#",
      },
    ],
  },

  whatIBuild: {
    title: "What I Build",
    subtitle: "End-to-end systems across product, platform, and infrastructure.",
    items: [
      {
        title: "SaaS Applications",
        description: "Multi-tenant platforms with auth, billing, and scalable backends.",
        icon: "layers",
      },
      {
        title: "Enterprise Platforms",
        description: "Business-critical systems with reliability and security at scale.",
        icon: "building",
      },
      {
        title: "Cloud Infrastructure",
        description: "AWS and Azure deployments with Docker and CI/CD pipelines.",
        icon: "cloud",
      },
      {
        title: "REST APIs",
        description: "Well-designed APIs with caching, monitoring, and documentation.",
        icon: "api",
      },
      {
        title: "Admin Dashboards",
        description: "Data-rich interfaces with role-based access and real-time updates.",
        icon: "dashboard",
      },
      {
        title: "AI Integrations",
        description: "LLM-powered features and AI-assisted development workflows.",
        icon: "spark",
      },
    ],
  },

  contact: {
    title: "Let's Build Something Great",
    subtitle: "Interested in collaborating or hiring? Let's connect.",
    ctas: [
      { label: "Email Me", href: "mailto:nilayupadhyay2179@gmail.com", primary: true },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/nilayupadhyay",
        external: true,
      },
      { label: "Download Resume", href: "#" },
    ],
  },
};
