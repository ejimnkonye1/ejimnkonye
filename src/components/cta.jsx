import { 

  FaArrowRight,

} from 'react-icons/fa';
export default function CTA() {
    return (
          <div className="w-full fade-section" id="contact">
                      <section className="py-16">
                        <div className="relative overflow-hidden rounded-xl bg-black py-20 px-8 border border-white/10">
                          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, white 10px, white 11px)' }}></div>
                          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)' }}></div>
                          <div className="absolute top-4 left-4 text-white/20 text-lg font-light">+</div>
                          <div className="absolute top-4 right-4 text-white/20 text-lg font-light">+</div>
                          <div className="absolute bottom-4 left-4 text-white/20 text-lg font-light">+</div>
                          <div className="absolute bottom-4 right-4 text-white/20 text-lg font-light">+</div>
                          <div className="relative z-10 text-center max-w-xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Let's work together</h2>
                            <p className="text-white/50 mb-10 text-base">Have a project in mind? Let's create something amazing.</p>
                            <div className="flex items-center justify-center gap-4">
                              <a href="mailto:codebynz01@gmail.com" className="inline-flex items-center px-6 py-2.5 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                                Email Me
                              </a>
                              <a href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors">
                                Book a Call <FaArrowRight className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
    )
}