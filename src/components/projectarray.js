// Import images
import quiz1 from '../images/quiz1.png';
import quiz2 from '../images/quiz2.png';
import quiz3 from '../images/quiz3.png';
import quiz4 from '../images/quiz4.png';
import care1 from '../images/care1.png';
import care2 from '../images/care2.png';
import care3 from '../images/care3.png';
import care4 from '../images/care4.png';
import care5 from '../images/care5.png';
import care6 from '../images/care6.png';
import chat1 from '../images/chat1.png';
import chat2 from '../images/chat2.png';
import chat3 from '../images/chat3.png';
import chat4 from '../images/chat4.png';
import food1 from '../images/food1.png';
import food2 from '../images/food2.png';
import food3 from '../images/food3.png';
import new1 from '../images/new.png';

// Categories
export const categories = ['All', 'Web App', 'Portfolio', 'Mobile App', 'API / Backend', 'Collaboration'];

// All projects
export const projects = [
  // ─── Web Apps ───
  {
    id: 'care',
    title: 'Care Connect',
    category: 'Web App',
    description: 'A web-based creche management system that connects parents, staff, and administrators. Provides real-time updates on children\'s activities, attendance, and events.',
    images: [care1, care2, care3, care4, care5, care6, new1],
    technologies: ['React', 'Firebase', 'Redux', 'Recharts'],
    liveSite: 'https://care-connect-wine.vercel.app',
    sourceCode: 'https://github.com/ejimnkonye1/care-Connect',
  },
  {
    id: 'chat',
    title: 'Chat App',
    category: 'Web App',
    description: 'A real-time messaging platform with dark mode. Features instant message delivery, intuitive interface, and support for individual and group chats.',
    images: [chat1, chat2, chat3, chat4],
    technologies: ['React', 'Redux', 'Tailwind', 'Firebase'],
    liveSite: 'https://chat-app-mu-ebon.vercel.app/',
    sourceCode: 'https://github.com/ejimnkonye1/Chat-app',
  },
  {
    id: 'quiz',
    title: 'Math Circus',
    category: 'Web App',
    description: 'An engaging math quiz application designed for kids to practice their arithmetic skills in a fun and interactive way.',
    images: [quiz1, quiz2, quiz3, quiz4],
    technologies: ['React', 'Redux', 'Tailwind'],
    liveSite: 'https://math-circus.vercel.app/',
    sourceCode: 'https://github.com/ejimnkonye1/MathCircus',
  },
  {
    id: 'food',
    title: 'ChickBite',
    category: 'Web App',
    description: 'A food delivery and snacks website with menu browsing, cart, and ordering functionality.',
    images: [food1, food2, food3],
    technologies: ['React', 'CSS', 'Tailwind'],
    liveSite: 'https://chickbite.vercel.app/',
    sourceCode: 'https://github.com/ejimnkonye1/foodstore',
  },
  {
    id: 'niquewear',
    title: 'NiqueWear',
    category: 'Web App',
    description: 'A clothing e-commerce platform with product listings, cart functionality, and a modern shopping experience.',
    images: [], // Add your screenshots here
    technologies: ['React', 'JavaScript', 'Tailwind'],
    sourceCode: 'https://github.com/ejimnkonye1/NiqueWear',
  },
  {
    id: 'bilbox',
    title: 'Bilbox',
    category: 'Web App',
    description: 'A full-stack web application built with TypeScript and modern tooling.',
    images: [], // Add your screenshots here
    technologies: ['TypeScript', 'React', 'Tailwind'],
    liveSite: 'https://bilbox.vercel.app',
    sourceCode: 'https://github.com/ejimnkonye1/Bilbox',
  },
  {
    id: 'nzwears',
    title: 'NZ Wears',
    category: 'Web App',
    description: 'An e-commerce website with product catalog, shopping cart, and checkout functionality.',
    images: [], // Add your screenshots here
    technologies: ['React', 'JavaScript', 'CSS'],
    liveSite: 'https://nz-wears.vercel.app',
    sourceCode: 'https://github.com/ejimnkonye1/NZ-WEARS',
    collab: true,
  },
  {
    id: 'bilpay',
    title: 'BilPay',
    category: 'Web App',
    description: 'A payment application with transaction management and clean UI.',
    images: [], // Add your screenshots here
    technologies: ['JavaScript', 'React', 'CSS'],
    liveSite: 'https://bilpay-gilt.vercel.app',
    sourceCode: 'https://github.com/ejimnkonye1/bilpay',
  },
  {
    id: 'cars',
    title: 'Cars Showcase',
    category: 'Web App',
    description: 'A car showcase website featuring vehicle listings with detailed specs and a sleek UI.',
    images: [], // Add your screenshots here
    technologies: ['JavaScript', 'React', 'CSS'],
    liveSite: 'https://cars-three-dun.vercel.app',
    sourceCode: 'https://github.com/ejimnkonye1/Cars',
  },
  {
    id: 'domadmin',
    title: 'Dom Admin',
    category: 'Web App',
    description: 'An admin dashboard with data management, charts, and user controls.',
    images: [], // Add your screenshots here
    technologies: ['JavaScript', 'React', 'Tailwind'],
    sourceCode: 'https://github.com/ejimnkonye1/dom-admin',
  },
  {
    id: 'academic',
    title: 'Academic Assistant',
    category: 'Web App',
    description: 'An educational support platform to help students manage their academic workflow and resources.',
    images: [], // Add your screenshots here
    technologies: ['TypeScript', 'Next.js', 'Tailwind'],
    sourceCode: 'https://github.com/ejimnkonye1/v0-academic-assistant-platform',
  },

  // ─── Portfolios ───
  {
    id: 'deprof',
    title: 'Deprof Portfolio',
    category: 'Portfolio',
    description: 'A professional portfolio website built for a client with modern design and smooth animations.',
    images: [], // Add your screenshots here
    technologies: ['React', 'JavaScript', 'Tailwind'],
    liveSite: 'https://deprof-portfolio.vercel.app',
    sourceCode: 'https://github.com/ejimnkonye1/Deprof-portfolio-',
  },
  {
    id: 'ify',
    title: 'Ify Portfolio',
    category: 'Portfolio',
    description: 'A personal portfolio website designed and developed for a client.',
    images: [], // Add your screenshots here
    technologies: ['React', 'JavaScript', 'CSS'],
    liveSite: 'https://ifebuchejuliet.vercel.app',
    sourceCode: 'https://github.com/ejimnkonye1/ify-portfolio-',
  },
  {
    id: 'ejimnkonye',
    title: 'My Portfolio',
    category: 'Portfolio',
    description: 'My personal developer portfolio showcasing projects, skills, and experience.',
    images: [], // Add your screenshots here
    technologies: ['React', 'Tailwind', 'Vite'],
    liveSite: 'https://ejimnkonye.vercel.app',
    sourceCode: 'https://github.com/ejimnkonye1/ejimnkonye',
  },

  // ─── Mobile App ───
  {
    id: 'reactnative',
    title: 'React Native App',
    category: 'Mobile App',
    description: 'A mobile application built with React Native for cross-platform development.',
    images: [], // Add your screenshots here
    technologies: ['React Native', 'TypeScript', 'Expo'],
    sourceCode: 'https://github.com/ejimnkonye1/learning-react-native-',
  },
  {
    id: 'storra',
    title: 'Storra App',
    category: 'Mobile App',
    description: 'A storage/inventory management mobile application.',
    images: [], // Add your screenshots here
    technologies: ['TypeScript', 'React Native'],
    sourceCode: 'https://github.com/ejimnkonye1/storra-app',
  },

  // ─── API / Backend ───
  {
    id: 'email',
    title: 'Email API',
    category: 'API / Backend',
    description: 'A backend email service API for sending emails via web forms.',
    images: [], // Add your screenshots here
    technologies: ['Node.js', 'Express', 'JavaScript'],
    liveSite: 'https://email-green-chi.vercel.app',
    sourceCode: 'https://github.com/ejimnkonye1/email',
  },
  {
    id: 'lostfound',
    title: 'Lost & Found',
    category: 'API / Backend',
    description: 'A Python-based backend system for managing lost and found items.',
    images: [], // Add your screenshots here
    technologies: ['Python', 'Flask', 'REST API'],
    sourceCode: 'https://github.com/ejimnkonye1/lost-and-found',
  },

  // ─── Collaborations ───
  {
    id: 'anontruth',
    title: 'AnonTruth',
    category: 'Collaboration',
    description: 'Anonymous group chat app where messages are sent without revealing identity. Over 500 users sharing thoughts freely.',
    images: [], // Add your screenshots here
    technologies: ['React', 'Firebase', 'Tailwind'],
    liveSite: 'https://anon-truth-owpm.vercel.app',
    sourceCode: 'https://github.com/ejimnkonye1/AnonTruth',
    collab: true,
  },
  {
    id: 'oceanic',
    title: 'Oceanic',
    category: 'Collaboration',
    description: 'A collaborative full-stack TypeScript project built with a team.',
    images: [], // Add your screenshots here
    technologies: ['TypeScript', 'React', 'Node.js'],
    sourceCode: 'https://github.com/JUSTTNZ/Oceanic',
    collab: true,
  },
  {
    id: 'creatives30',
    title: 'Creatives30',
    category: 'Collaboration',
    description: 'A platform where developers submit projects, share progress, and explore others\' work. Built for code challenges and community events.',
    images: [], // Add your screenshots here
    technologies: ['JavaScript', 'React', 'Node.js'],
    sourceCode: 'https://github.com/skidev101/creatives30',
    collab: true,
  },
  {
    id: 'trupay',
    title: 'TruPay',
    category: 'Collaboration',
    description: 'A payment system application with secure transaction handling.',
    images: [], // Add your screenshots here
    technologies: ['JavaScript', 'React', 'Node.js'],
    sourceCode: 'https://github.com/ejimnkonye1/TRUPAY',
    collab: true,
  },
  {
    id: 'storraweb',
    title: 'Storra Web',
    category: 'Collaboration',
    description: 'The frontend web application for the Storra platform.',
    images: [], // Add your screenshots here
    technologies: ['React', 'TypeScript', 'Tailwind'],
    sourceCode: 'https://github.com/ejimnkonye1/STORRA-WEB-FE',
    collab: true,
  },
  {
    id: 'cre8afrika',
    title: 'Cre8 Afrika',
    category: 'Web App',
    description: 'A creative agency web platform for Afrika, showcasing creative talents and services across the continent.',
    images: [], // Add your screenshots here
    technologies: ['React', 'JavaScript', 'Tailwind'],
    sourceCode: 'https://github.com/estyne/cre8afrika_web',
  },
  {
    id: 'cxbliss',
    title: 'CX Bliss',
    category: 'Web App',
    description: 'A customer experience platform designed to help businesses deliver seamless and delightful user experiences.',
    images: [], // Add your screenshots here
    technologies: ['React', 'JavaScript', 'Tailwind'],
    sourceCode: 'https://github.com/trustedcoder/cxbliss_web',
  },
  {
    id: 'oceanicpaint',
    title: 'Oceanic Paint',
    category: 'Web App',
    description: 'A web application for Oceanic Paint company, showcasing paint products, color catalogs, and services.',
    images: [], // Add your screenshots here
    technologies: ['TypeScript', 'React', 'Next.js'],
    liveSite: 'https://oceanic-paint.vercel.app',
    sourceCode: 'https://github.com/JUSTTNZ/oceanic-paint',
  },
  {
    id: 'estyne',
    title: 'Estyne',
    category: 'Web App',
    description: 'A professional brand website with modern design, animations, and responsive layout.',
    images: [], // Add your screenshots here
    technologies: ['React', 'JavaScript', 'CSS'],
    sourceCode: 'https://github.com/trustedcoder/estyne-web',
  },
];
