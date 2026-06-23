export const site = {
  metadata: {
    title: "Nilay Upadhyay | Software Engineer",
    description:
      "Full-stack software engineer with 8+ years of experience building React, Node.js, and cloud-native applications.",
  },

  personal: {
    name: "Nilay Upadhyay",
    shortName: "nilay",
    title: "Software Engineer",
    location: "Toronto, ON",
    email: "nilayupadhyay2179@gmail.com",
    phone: "437-663-7967",
  },

  nav: [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    greeting: "Hello, world.",
    bio: "8+ years building full-stack web applications with React, Node.js, TypeScript, and cloud technologies. I design RESTful APIs, microservices, and database-driven systems — shipping high-performance solutions from concept to production in Agile environments.",
    ctaPrimary: { label: "View my work", href: "#projects" },
    ctaSecondary: { label: "Get in touch", href: "#contact" },
  },

  projects: {
    title: "Projects",
    subtitle: "Recent full-stack work from my portfolio.",
    items: [
      {
        title: "EduFlow",
        period: "Apr 2025 — Oct 2025",
        description:
          "Role-based full-stack EdTech platform for students, instructors, and administrators — with course management, Stripe payments, and Cloudinary media delivery.",
        tech: ["React", "Node.js", "MongoDB", "Redux", "Docker", "AWS ECS"],
        gradient: "from-blue-500/20 to-cyan-500/10",
      },
      {
        title: "CodeRise",
        period: "Feb 2025 — Apr 2025",
        description:
          "Online coding assessment platform with secure, container-based code execution in isolated Docker environments and Redis caching for concurrent workloads.",
        tech: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS EC2"],
        gradient: "from-violet-500/20 to-purple-500/10",
      },
      {
        title: "Eventify",
        period: "Nov 2024 — Jan 2025",
        description:
          "Full-stack event management and ticketing platform supporting event creation, discovery, JWT auth, and Stripe-powered ticket purchases.",
        tech: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe"],
        gradient: "from-emerald-500/20 to-teal-500/10",
      },
    ],
  },

  experience: {
    title: "Experience",
    subtitle: "8+ years across full-stack web and mobile development.",
    items: [
      {
        role: "Software Engineer",
        company: "AAscent Info Solutions",
        location: "Ahmedabad, India",
        period: "Oct 2021 — Aug 2023",
        description:
          "Built full-stack applications with Node.js, TypeScript, Express, and React — including RESTful APIs, WebSocket features, OAuth 2.0/JWT auth, and third-party integrations. Containerized services with Docker, contributed to CI/CD pipelines, and adopted TDD with Jest, reducing post-release defects by 45%.",
      },
      {
        role: "Software Developer",
        company: "Octo Telematics North America",
        location: "Newton, MA",
        period: "Feb 2019 — Sept 2021",
        description:
          "Developed Node.js backend services processing large volumes of real-time telematics data. Designed REST APIs, diagnosed production incidents, and improved scalability through service optimization, monitoring enhancements, and efficient database interactions.",
      },
      {
        role: "Android Developer",
        company: "Octo Telematics North America",
        location: "Newton, MA",
        period: "Dec 2017 — Jan 2019",
        description:
          "Led end-to-end Android app development in Java/Kotlin for driver behavior analysis via GPS and telematics data. Built BLE communication modules, improving connection stability and data transmission latency by 40%.",
      },
    ],
  },

  skills: {
    title: "Skills",
    subtitle: "Languages: JavaScript, TypeScript, Java, Python, Kotlin.",
    categories: [
      {
        category: "Frontend",
        skills: [
          "React",
          "Next.js",
          "Angular",
          "TypeScript",
          "Redux",
          "Tailwind CSS",
          "HTML5 / CSS3",
        ],
      },
      {
        category: "Backend & Data",
        skills: [
          "Node.js",
          "Express.js",
          "REST APIs",
          "Kafka",
          "WebSockets",
          "PostgreSQL",
          "MongoDB",
          "Redis",
        ],
      },
      {
        category: "Cloud & DevOps",
        skills: [
          "AWS",
          "Azure",
          "Docker",
          "Kubernetes",
          "Jenkins",
          "GitHub Actions",
          "CI/CD",
          "Git",
        ],
      },
    ],
  },

  contact: {
    title: "Contact",
    subtitle: "Have a project in mind? I'd love to hear from you.",
    successTitle: "Message sent!",
    successMessage: "Thanks for reaching out. I'll get back to you soon.",
    sendAnotherLabel: "Send another message",
    submitLabel: "Send message",
  },

  footer: {
    social: [
      { label: "GitHub", href: "https://github.com/Nilayupadhyay" },
      { label: "LinkedIn", href: "https://linkedin.com/in/nilayupadhyay" },
    ],
  },
};
