import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import oceanicImage from '../images/oceanic.png';

export const Projects = () => {
  const projects = [
    {
      title: "DevStream",
      desc: "A Chrome extension + SaaS platform that records synchronized desktop and mobile website sessions for developers. Includes replay system, dashboard, and session sharing.",
      tags: ["Chrome Extension", "React", "Node.js", "Supabase", "TypeScript"],
      liveUrl: "https://devstream.vercel.app",
      githubUrl: "https://github.com",
      img: "/projects/devstream.png",
    },
    {
      title: "Creche Management System",
      desc: "A full-stack platform for parents, staff, and admin with real-time messaging, attendance tracking, meal updates, payments, and activity logs.",
      tags: ["React", "Firebase", "Firestore", "Node.js", "Paystack"],
      liveUrl: "https://creche-app.vercel.app",
      githubUrl: "https://github.com",
      img: "/projects/creche.png",
    },
    {
      title: "30-Day Challenge Platform",
      desc: "A gamified platform with GitHub-style heatmaps, rankings, progress tracking, leaderboards, and user streak systems.",
      tags: ["React", "Vite", "Tailwind CSS", "Redux"],
      liveUrl: "#",
      githubUrl: "https://github.com",
      img: "/projects/challenge.png",
    },
    {
      title: 'DevDock',
      desc: 'A developer-focused desktop dashboard for monitoring services, CPU/memory usage, network activity, and logs in real-time.',
      tags: ['Electron', 'React', 'Node.js', 'WebSocket'],
      liveUrl: 'https://dev-dock-two.vercel.app',
      githubUrl: 'https://github.com',
      img: '/projects/devdock.png'
    },
    {
      title: 'Oceanic',
      desc: 'A crypto exchange platform where users can buy, sell, and track cryptocurrencies with real-time market data and interactive charts.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
      liveUrl: 'https://www.oceaniccharts.com',
      githubUrl: 'https://github.com',
      img: oceanicImage // This is the imported image
    },
    {
      title: 'Classora',
      desc: 'An e-learning platform with course management, quizzes, leaderboards, rewards, and gamified progress tracking for students.',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: 'https://storra-web-fe.vercel.app',
      githubUrl: 'https://github.com',
      img: '/projects/classora.png'
    },
  ];

  return (
    <div className="w-full fade-section" id="projects">
      <section className="py-12">
        <h2 className="text-xl font-semibold text-white mb-6">Projects</h2>
        <div className="space-y-4">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 border border-white/10 rounded-lg bg-black/30 cursor-pointer overflow-hidden hover:border-white/20 transition-all">
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="relative w-full sm:w-52 h-40 sm:h-32 rounded-lg border border-white/20 bg-black overflow-hidden">
                  {/* Fixed image rendering for regular React */}
                  <img 
                    src={typeof project.img === 'string' ? project.img : project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://placehold.co/400x200/1a1a1a/ffffff?text=${project.title}`;
                    }}
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                  <p className="text-sm text-white/70 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-xs px-2 py-1 rounded border border-white/10 bg-white/5 text-white/50">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded border border-white/10 hover:border-white/30 transition-colors text-white/70"
                  >
                    <FiExternalLink className="w-3.5 h-3.5" /> Live
                  </a>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded border border-white/10 hover:border-white/30 transition-colors text-white/70"
                    >
                      <FaGithub className="w-3.5 h-3.5" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};