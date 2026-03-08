import {
  FaUser,
  FaBriefcase,
  FaCode,
  FaServer,
  FaEnvelope,
  FaShieldAlt,
  FaTools,
} from 'react-icons/fa'

export const navItems = [
  { name: 'About', link: '#about', icon: FaUser },
  { name: 'Services', link: '#services', icon: FaBriefcase },
  { name: 'Skills', link: '#skills', icon: FaCode },
  { name: 'Projects', link: '#projects', icon: FaServer },
  { name: 'Contact', link: '#contact', icon: FaEnvelope },
]

export const personalInfo = {
  name: 'Adarsh Sharma',
  role: 'Full Stack Developer & Cyber Security Analyst',
  tagline: 'Developer by craft, security by mindset.',
  bio: 'Hi, I’m Adarsh. I bridge the gap between robust software engineering and secure digital infrastructures. With a strong foundation in Java, C++, and modern web technologies, I build scalable applications while ensuring security best practices. My goal is to create digital experiences that are not only functional and beautiful but also safe.',
  email: 'adarsh0103sharma@gmail.com',
  phone: '+91 77039 29918',
  socials: {
    github: 'https://github.com/Adarsh234/',
    linkedin: 'https://www.linkedin.com/in/adarsh-sharma-b45106308',
    twitter: 'https://x.com/SungJinWoo1159',
  },
}

export const services = [
  {
    id: 1,
    title: 'Full-Stack Development',
    desc: 'Building scalable web apps using Next.js, React, Node.js, and SQL/NoSQL databases.',
    icon: FaCode,
    features: [
      'SSR & SSG',
      'API Routes',
      'State Management',
      'Performance Optimization',
    ],
  },
  {
    id: 2,
    title: 'Cyber Security Analysis',
    desc: 'Web application security, vulnerability assessment, and secure authentication practices.',
    icon: FaShieldAlt,
    features: [
      'Penetration Testing',
      'Vulnerability Assessment',
      'Secure Auth',
      'Data Encryption',
    ],
  },
  {
    id: 3,
    title: 'Database Design',
    desc: 'Architecting efficient schemas for MySQL, PostgreSQL, and MongoDB.',
    icon: FaServer,
    features: [
      'Schema Design',
      'Query Optimization',
      'Data Migration',
      'Backup Solutions',
    ],
  },
  {
    id: 4,
    title: 'UI/UX Implementation',
    desc: 'Translating designs into responsive, interactive, and accessible web interfaces.',
    icon: FaTools,
    features: [
      'Responsive Design',
      'Accessibility (A11y)',
      'Animations',
      'Design Systems',
    ],
  },
]

export const skills = {
  languages: [
    'JavaScript (ES6+)',
    'TypeScript',
    'Java',
    'C / C++',
    'Python',
    'SQL',
  ],
  frontend: [
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'HTML5',
    'CSS3',
    'Bootstrap',
  ],
  backend: [
    'Node.js',
    'Express.js',
    'REST APIs',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
  ],
  tools: ['Git & GitHub', 'VS Code', 'Postman', 'Vercel', 'Netlify', 'Figma'],
  security: [
    'Ethical Hacking',
    'Web App Security',
    'Digital Forensics',
    'Steganography',
  ],
}

export const projects = [
  {
    id: 1,
    title: 'iBlog Website',
    des: 'A responsive content management platform for bloggers to share stories.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'https://iblog-website.vercel.app/',
    github: 'https://github.com/Adarsh234/IBlog',
    image: '/projects/p1.png',
  },
  {
    id: 2,
    title: 'Code Crackers',
    des: 'A collaborative coding platform designed for hackathons and team challenges.',
    tech: ['Next.js', 'Tailwind', 'PostgreSQL'],
    link: 'https://code-cracker-five.vercel.app/',
    github: 'https://github.com/Adarsh234/code-cracker',
    image: '/projects/p2.png',
  },
  {
    id: 3,
    title: 'Leave Approval System',
    des: 'Internal tool for managing employee leave requests with role-based access.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    link: 'https://leave-approval-webster.vercel.app/',
    github: 'https://github.com/Adarsh234/v0-leave-approval-system',
    image: '/projects/p3.png',
  },
  {
    id: 4,
    title: 'Taste Bud Treat',
    des: 'It is a food-themed web application designed to showcase a menu, recipes, or a food ordering interface.',
    tech: ['React.js', 'Tailwind', 'MonogoDB'],
    link: 'https://taste-buds-treat.vercel.app/',
    github: 'https://github.com/Adarsh234/TasteBudsTreat',
    image: '/projects/p4.png',
  },
  {
    id: 5,
    title: 'PIMS-Placement Management System',
    des: 'A next-generation, centralized platform that streamlines campus recruitment by seamlessly connecting students, recruiters, and administrators.',
    tech: ['Next.js', 'Tailwind', 'PostgreSql'],
    link: 'https://placement-management-system-nine.vercel.app/',
    github: 'https://github.com/Adarsh234/Placement_Management_System',
    image: '/projects/p5.png',
  },
]
