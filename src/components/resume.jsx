import { FaDownload } from "react-icons/fa";

export default function Resume(){
    return(
           <div className="w-full fade-section" id="resume">
                      <section className="py-16">
                        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 p-6">
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-1">Resume</h3>
                            <p className="text-sm text-white/50">Download my resume to learn more about my experience and skills.</p>
                          </div>
                          <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:opacity-90 transition-opacity flex-shrink-0">
                            <FaDownload className="w-4 h-4" /> Download
                          </a>
                        </div>
                      </section>
                    </div>
    )
}