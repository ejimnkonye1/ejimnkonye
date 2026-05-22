import { FaMedium, FaTwitter } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

export default function Blog() {
   const blogPosts = [

     {
       title: 'Frontend technologies React.js vs Vue.js',
       excerpt: 'React.js and Vue.js are two popular frontend frameworks in the developer world, switching top spot on the podium each year in the categories of “most loved, used or popular.',
       url: 'https://medium.com/@ejimnkonyeonyedika/frontend-technologies-react-js-vs-vue-js-c3b8c61fedb7',
       date: 'Jun 28, 2024',
       icon: <FaMedium />
     },
     {
       title: 'Solving My First Backend Challenge: Hosting an API s',
       excerpt: 'A deep dive into Backend frameworks and what makes each one stand out.',
       url: 'https://medium.com/@ejimnkonyeonyedika/solving-my-first-backend-challenge-hosting-an-api-d4e6f4e9ef93',
       date: 'Jun 28, 2024',
       icon: <FaMedium />
     }
   ];
    return (
          <div className="w-full fade-section" id="blog">
                      <section className="py-12">
                        <h2 className="text-xl font-semibold text-white mb-6">Blog</h2>
                        <div className="space-y-3">
                          {blogPosts.map((post, idx) => (
                            <a key={idx} href={post.url} target="_blank" rel="noopener noreferrer" className="group block p-4 border border-white/10 rounded-lg bg-black/30 hover:bg-white/5 transition-colors">
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-sm font-medium text-white mb-1">{post.title}</h3>
                                  <p className="text-xs text-white/50 line-clamp-1">{post.excerpt}</p>
                                  <div className="flex items-center gap-3 mt-3">
                                    <span className="flex items-center text-white/50">{post.icon}</span>
                                    <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-500 group-hover:underline">
                                      Read more <LuArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </span>
                                  </div>
                                </div>
                                <span className="text-xs text-white/50 flex-shrink-0">{post.date}</span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </section>
                    </div>
    )}