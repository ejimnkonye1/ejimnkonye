export default function Github(){
    return(
            <div className="w-full fade-section" id="github">
              <section className="py-12">
                <h2 className="text-xl font-semibold text-white mb-6">GitHub Activity</h2>
                <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-white/50">582 contributions in the last year</p>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-white/50 mr-1">Less</span>
                      <div className="w-2.5 h-2.5 rounded-[2px] bg-white/5"></div>
                      <div className="w-2.5 h-2.5 rounded-[2px] bg-white/20"></div>
                      <div className="w-2.5 h-2.5 rounded-[2px] bg-white/40"></div>
                      <div className="w-2.5 h-2.5 rounded-[2px] bg-white/60"></div>
                      <div className="w-2.5 h-2.5 rounded-[2px] bg-white/80"></div>
                      <span className="text-xs text-white/50 ml-1">More</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
    )
}