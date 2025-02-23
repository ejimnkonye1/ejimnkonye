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
import new1 from    '../images/new.png';

export const projects = [
    {
      id: 'care',
      title: 'Care Connect',
      description: 'CareConnect is a web-based creche management system that connects parents, staff, and administrators. It provides real-time updates on children\'s activities, attendance, and events, allowing parents to stay informed and securely pay fees. Staff and admin can easily manage operations and send announcements.',
      images: [care1, care2, care3, care4, care5, care6,new1],
      technologies: ['Reactjs', 'Firebase', 'Redux', 'Recharts'],
      liveSite: 'https://care-connect-wine.vercel.app',
      sourceCode: 'https://github.com/ejimnkonye1/care-Connect',
    },
    {
      id: 'quiz',
      title: 'Math Circus',
      description: 'Math Circus! 🎪 This is an engaging math quiz application designed for kids to practice their arithmetic skills in a fun and interactive way.',
      images: [quiz1, quiz2, quiz3, quiz4],
      technologies: ['Reactjs', 'Redux', 'Tailwind'],
      liveSite: 'https://math-circus.vercel.app/',
      sourceCode: 'https://github.com/ejimnkonye1/MathCircus',
    },
    {
      id: 'chat',
      title: 'Chat App',
      description: 'Chat App is a real-time messaging platform with a dark mode, designed for smooth and easy communication. With instant message delivery and a simple, intuitive interface, it’s perfect for individual and group chats, helping users stay connected effortlessly.',
      images: [chat1, chat2, chat3, chat4],
      technologies: ['Reactjs', 'Redux', 'Tailwind', 'Firebase'],
      liveSite: 'https://chat-app-mu-ebon.vercel.app/',
      sourceCode: 'https://github.com/ejimnkonye1/Chat-app',
    },
    {
      id: 'food',
      title: 'ChickBite',
      description: 'Discover ChickBite, your go-to for delicious, bite-sized chicken snacks! Perfectly seasoned and ready to enjoy, these tasty morsels are ideal for any occasion—snack time, parties, or quick meals. Experience the flavor and convenience of ChickBite today.',
      images: [food1, food2, food3],
      technologies: ['Reactjs', 'Css', 'Tailwind'],
      liveSite: 'https://chickbite.vercel.app/',
      sourceCode: 'https://github.com/ejimnkonye1/foodstore',
    },
  ];