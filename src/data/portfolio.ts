import type { Education, Experience, Project } from '../types/portfolio';

// Personal information and content live here, separate from the presentation.
export const profile = {
  name: 'Venkatesh Maley',
  firstName: 'Venkatesh',
  role: 'Full-Stack Developer',
  email: 'venkateshmaley1@gmail.com',
  phone: '+91 79930 67617',
  phoneHref: 'tel:+917993067617',
  github: 'https://github.com/Venkatesh-Maley',
  linkedin: 'https://www.linkedin.com/in/venkatesh-maley/',
  resume: '/Venkatesh_Maley_Full_Stack.pdf',
  image: '/profile-pic.jpg',
};

export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const experiences: Experience[] = [
  {
    company: 'GrowthPanda', role: 'Backend Developer',
    logo: '/images/companies/growthpanda-icon.png',
    period: 'Mar 2026 — Present', location: 'Indiranagar, Bangalore · Hybrid',
    highlights: [
      'Developed HiFocus client APIs using Node.js, Express.js, TypeScript, and MongoDB for CRM, leads, sales orders, tickets, engineer assignments, inventory, warranties, and invoicing.',
      'Secured APIs with JWT authentication, role-based access control, and request validation, enforcing team and branch permissions.',
      'Built RAG customer support and knowledge-base search with OpenAI, LangChain, and Qdrant, with Socket.IO for real-time communication.',
      'Managed release and database extraction scripts, staging and production environments, and deployment troubleshooting; collaborated with design, product, QA, clients, and frontend teams on requirements and API integration.',
    ],
    technologies: ['Node.js', 'Express.js', 'TypeScript', 'MongoDB', 'OpenAI', 'LangChain', 'Qdrant', 'Socket.IO', 'RAG'],
  },
  {
    company: 'SreeVia AI Technologies', role: 'Software Development Engineer Intern',
    logo: '/images/companies/sreevia-icon.png',
    period: 'Jun 2025 — Feb 2026', location: 'Madhapur, Hyderabad · Onsite',
    highlights: [
      'Developed backend APIs, data models, and core business logic for Rankify using Node.js.',
      'Worked with AWS VPC, EC2, S3, ALB, IAM, Certificate Manager, and CloudWatch for secure, scalable deployments.',
      'Integrated OpenAI APIs into the existing codebase to generate AI-based outputs and responses.',
      'Helped translate requirements into technical designs and supported development, testing, and deployment.',
    ],
    technologies: ['Node.js', 'AWS', 'OpenAI API', 'REST APIs'],
  },
  {
    company: 'Metapointer Labs', role: 'Software Developer Intern',
    logo: '/images/companies/metapointer.png',
    period: 'Sep 2024 — May 2025', location: 'HITEC City, Hyderabad · Onsite',
    highlights: [
      'Built scalable backend APIs for PropToll using Node.js and LoopBack, with Swagger API documentation.',
      'Enhanced Angular frontend components and integrated them with backend modules.',
      'Refactored code and maintained a consistent codebase structure to support maintainability.',
      'Fixed critical bugs and optimized performance across frontend and backend modules.',
    ],
    technologies: ['Node.js', 'LoopBack', 'Angular', 'Swagger'],
  },
];

export const projects: Project[] = [
  {
    title: 'Blood Donation Service', category: 'HEALTHCARE · BACKEND ENGINEERING',
    description: 'A backend that connects blood requests with the people who can help. Built around a complete request-to-fulfillment workflow.',
    highlights: ['JWT access & refresh tokens with role-based permissions', 'Admin approval, volunteer acceptance, and fulfillment', 'Redis login rate limiting and batch approval operations'],
    technologies: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'Redis', 'OpenAPI'],
    repository: 'https://github.com/Venkatesh-Maley/Healthcare-Blood-Donation-Service',
    slides: [
      { src: '/images/projects/blood-api.svg', alt: 'Illustrative sample of Blood Donation Service API documentation with example endpoints.', caption: 'API documentation concept' },
      { src: '/images/projects/blood-requests.svg', alt: 'Illustrative request-management dashboard with fictional blood requests and statuses.', caption: 'Blood request management concept' },
      { src: '/images/projects/blood-response.svg', alt: 'Illustrative blood request lifecycle and fictional JSON API response.', caption: 'Request lifecycle and API response' },
    ],
  },
  {
    title: 'LINKRAA', category: 'COMMUNITY · FULL-STACK DEVELOPMENT',
    description: 'A real-time group chat platform bringing RGUKT students and alumni together through shared conversations.',
    highlights: ['React interface for alumni and student conversations', 'Node.js and Express backend for server-side operations', 'Secure authentication, authorization, and MongoDB storage'],
    technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
    repository: 'https://github.com/Venkatesh-Maley/LinkRAA-Chat-Application',
    slides: [
      { src: '/images/projects/linkraa-login.svg', alt: 'Illustrative LINKRAA sign-in screen with fictional login fields.', caption: 'Community sign-in concept' },
      { src: '/images/projects/linkraa-groups.svg', alt: 'Illustrative LINKRAA directory of student and alumni community groups.', caption: 'Community group directory concept' },
      { src: '/images/projects/linkraa-chat.svg', alt: 'Illustrative LINKRAA group chat with fictional messages.', caption: 'Group conversation concept' },
    ],
  },
];

export const education: Education[] = [
  { degree: 'B.Tech · Computer Science & Engineering', institution: 'RGUKT IIIT, R.K. Valley, Idupulapaya', period: 'Nov 2021 — May 2025', grade: '8.2 / 10 CGPA' },
  { degree: 'Pre-University Course · MPC', institution: 'RGUKT IIIT, R.K. Valley, Idupulapaya', period: 'Sep 2019 — Nov 2021', grade: '9.3 / 10 CGPA' },
  { degree: 'Secondary School Certificate', institution: 'ZPHS Pathi Puttur, Vadamalapet, Chittoor', period: 'Jun 2018 — May 2019', grade: '10 / 10 Points' },
];
