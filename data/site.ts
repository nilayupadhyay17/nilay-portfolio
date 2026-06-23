export const site = {
  metadata: {
    title: "Nilay Upadhyay | Senior Software Engineer",
    description:
      "Senior software engineer with 8+ years designing scalable full-stack systems, microservices, and cloud-native applications on AWS and Azure.",
  },

  personal: {
    name: "Nilay Upadhyay",
    shortName: "nilay",
    title: "Senior Software Engineer",
    location: "Toronto, ON",
    email: "nilayupadhyay2179@gmail.com",
    phone: "437-663-7967",
  },

  sidebar: {
    brand: "Nilay Upadhyay",
    nav: [
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    external: [
      { label: "Resume", href: "#" },
      { label: "LinkedIn", href: "https://linkedin.com/in/nilayupadhyay" },
      { label: "GitHub", href: "https://github.com/Nilayupadhyay" },
    ],
  },

  hero: {
    status: "Open to senior opportunities",
    greeting: "Senior Software Engineer",
    roles: [
      "Full-Stack Systems Architect",
      "Cloud-Native Engineer",
      "API & Platform Lead",
    ],
    bio: "I architect and ship production-grade systems across the full stack — from React and Next.js frontends to Node.js microservices, event-driven pipelines, and cloud deployments on AWS and Azure. With 8+ years in Agile environments, I partner with product and engineering leaders to translate business goals into reliable, secure, and scalable software.",
    highlights: [
      "8+ years in production systems",
      "Microservices & REST APIs",
      "AWS · Azure · Docker · K8s",
      "CI/CD & zero-downtime deploys",
    ],
    stats: [
      { label: "Years", value: "8+" },
      { label: "Cloud", value: "AWS · Azure" },
      { label: "Focus", value: "Full-Stack" },
    ],
  },

  experience: {
    title: "Experience",
    subtitle:
      "Progression from mobile and backend engineering to full-stack ownership, system design, and production reliability.",
    items: [
      {
        role: "Software Engineer",
        company: "AAscent Info Solutions",
        location: "Ahmedabad, India",
        period: "Oct 2021 — Aug 2023",
        highlights: [
          "Owned full-stack delivery across Node.js, TypeScript, Express, and React — designing APIs, real-time WebSocket features, and responsive UIs for business-critical workflows.",
          "Architected secure auth with OAuth 2.0, JWT, and role-based access control for multi-tenant application flows.",
          "Established TDD practices with Jest and drove CI/CD automation with Docker, cutting post-release defects by 45%.",
          "Led code reviews and architectural discussions; partnered with product stakeholders on estimation, prioritization, and sprint delivery.",
        ],
      },
      {
        role: "Software Developer",
        company: "Octo Telematics North America",
        location: "Newton, MA",
        period: "Feb 2019 — Sept 2021",
        highlights: [
          "Built and scaled Node.js services processing high-volume real-time telematics data for internal and customer-facing platforms.",
          "Designed REST APIs and improved system reliability through root-cause analysis, enhanced logging, and monitoring on distributed services.",
          "Resolved production incidents across APIs, data pipelines, and dashboards; collaborated with QA and DevOps on safe rollouts.",
        ],
      },
      {
        role: "Android Developer",
        company: "Octo Telematics North America",
        location: "Newton, MA",
        period: "Dec 2017 — Jan 2019",
        highlights: [
          "Led end-to-end mobile architecture for telematics apps analyzing driver behavior via GPS and sensor data.",
          "Built BLE communication modules that improved connection stability and reduced data transmission latency by 40%.",
          "Partnered with backend teams on API contracts and end-to-end deployment of mobile releases in Agile sprints.",
        ],
      },
    ],
  },

  projects: {
    title: "Selected Work",
    subtitle:
      "Representative systems demonstrating architecture decisions, cloud deployment, and end-to-end ownership.",
    items: [
      {
        title: "EduFlow",
        period: "Apr 2025 — Oct 2025",
        description:
          "Role-based EdTech platform serving students, instructors, and administrators with modular backend services and production AWS infrastructure.",
        tech: ["React", "Node.js", "MongoDB", "Redux", "JWT", "Docker", "AWS ECS"],
        accent: "from-violet-500/30 via-purple-500/10 to-transparent",
        highlights: [
          "Designed modular Express APIs with JWT auth and MongoDB schemas for courses, enrollment, and progress tracking.",
          "Integrated Stripe payments and Cloudinary media delivery; deployed containerized services on AWS ECS with load balancing.",
        ],
      },
      {
        title: "CodeRise",
        period: "Feb 2025 — Apr 2025",
        description:
          "Coding assessment platform engineered for secure, concurrent code execution at scale.",
        tech: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS EC2"],
        accent: "from-cyan-500/30 via-blue-500/10 to-transparent",
        highlights: [
          "Built a container-based execution engine with isolated Docker sandboxes for safe user-submitted program runs.",
          "Reduced database load by 60% via Redis caching; deployed to AWS EC2 with automated restart policies and monitoring.",
        ],
      },
      {
        title: "Eventify",
        period: "Nov 2024 — Jan 2025",
        description:
          "Event management and ticketing platform with relational data modeling and payment automation.",
        tech: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe"],
        accent: "from-emerald-500/30 via-teal-500/10 to-transparent",
        highlights: [
          "Designed PostgreSQL schemas and REST APIs for event discovery, ticketing, and role-based access control.",
          "Integrated Stripe checkout and automated email notifications for end-to-end booking workflows.",
        ],
      },
    ],
  },

  skills: {
    title: "Technical Expertise",
    subtitle:
      "Depth across system design, implementation, and operational excellence.",
    categories: [
      {
        category: "Architecture & Leadership",
        skills: [
          "System Design",
          "Microservices",
          "REST API Design",
          "Code Reviews",
          "Technical Estimation",
          "Agile / Scrum",
          "TDD",
        ],
      },
      {
        category: "Frontend",
        skills: [
          "React",
          "Next.js",
          "Angular",
          "TypeScript",
          "Redux",
          "Tailwind CSS",
        ],
      },
      {
        category: "Backend & Data",
        skills: [
          "Node.js",
          "Express.js",
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
        ],
      },
    ],
    languages: ["JavaScript", "TypeScript", "Java", "Python", "Kotlin"],
  },

  contact: {
    title: "Open to senior engineering roles",
    subtitle:
      "I'm interested in senior full-stack, platform, and backend opportunities — especially teams building scalable cloud-native products. Reach out to discuss architecture, leadership, or your next initiative.",
    emailLabel: "Email",
  },
};
