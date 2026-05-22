 import { 
   SiTypescript, 
   SiJavascript, 
   SiReact, 
   SiNodedotjs, 
   SiElectron, 
   SiSupabase, 
   SiPython, 
   SiPostgresql, 
   SiMongodb, 
   SiPrisma, 
 
   SiBun, 
   SiTailwindcss, 
   SiDocker,
   SiNextdotjs
 } from 'react-icons/si';
 export default function Skills() {
    const skills = [
      { name: 'TypeScript', icon: <SiTypescript className="w-3.5 h-3.5" style={{ color: '#3178C6' }} /> },
      { name: 'JavaScript', icon: <SiJavascript className="w-3.5 h-3.5" style={{ color: '#F7DF1E' }} /> },
      { name: 'React/Next.js', icon: <SiReact className="w-3.5 h-3.5" style={{ color: '#61DAFB' }} /> },
      { name: 'Node.js', icon: <SiNodedotjs className="w-3.5 h-3.5" style={{ color: '#339933' }} /> },
      { name: 'Electron', icon: <SiElectron className="w-3.5 h-3.5" style={{ color: '#47848F' }} /> },
      { name: 'Supabase', icon: <SiSupabase className="w-3.5 h-3.5" style={{ color: '#3FCF8E' }} /> },
      { name: 'Python', icon: <SiPython className="w-3.5 h-3.5" style={{ color: '#3776AB' }} /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="w-3.5 h-3.5" style={{ color: '#4169E1' }} /> },
      { name: 'MongoDB', icon: <SiMongodb className="w-3.5 h-3.5" style={{ color: '#47A248' }} /> },
      { name: 'Prisma', icon: <SiPrisma className="w-3.5 h-3.5" style={{ color: '#2D3748' }} /> },
      { name: 'AWS', icon: <SiBun className="w-3.5 h-3.5" style={{ color: '#FF9900' }} /> },
      { name: 'Bun', icon: <SiBun className="w-3.5 h-3.5" style={{ color: '#FBF0DF' }} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-3.5 h-3.5" style={{ color: '#06B6D4' }} /> },
      { name: 'Docker', icon: <SiDocker className="w-3.5 h-3.5" style={{ color: '#2496ED' }} /> }
    ];
    return(
  <div className="w-full fade-section" id="skills">
              <section className="py-12">
                <h2 className="text-xl font-semibold text-white mb-6">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white">
                      {skill.icon}
                      {skill.name}
                    </div>
                  ))}
                </div>
              </section>
            </div>
    )}