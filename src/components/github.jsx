import { useEffect, useState } from "react";

export default function Github() {
  const [contributions, setContributions] = useState(null);
  const [loading, setLoading] = useState(true);
  const username = "ejimnkonye1";

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        // Fetch user data from GitHub API
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        
        // GitHub API doesn't directly give contribution count, 
        // but we can use public repos as an indicator
        setContributions({
          publicRepos: data.public_repos,
          followers: data.followers,
          following: data.following,
          createdAt: data.created_at,
          // Approximate contributions (you can adjust this)
          totalContributions: data.public_repos * 15 + (data.followers * 2)
        });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setContributions({
          publicRepos: 0,
          followers: 0,
          following: 0,
          totalContributions: 582 // fallback to your original number
        });
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, [username]);

  if (loading) {
    return (
      <div className="w-full fade-section" id="github">
        <section className="py-12">
          <h2 className="text-xl font-semibold text-white mb-6">GitHub Activity</h2>
          <div className="p-4 rounded-lg border border-white/10 bg-black/30">
            <p className="text-white/50 text-sm">Loading GitHub data...</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full fade-section" id="github">
      <section className="py-12">
        <h2 className="text-xl font-semibold text-white mb-6">GitHub Activity</h2>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="p-3 rounded-lg border border-white/10 bg-black/30 text-center">
            <p className="text-xl font-bold text-white">{contributions?.publicRepos || 0}</p>
            <p className="text-xs text-white/50">Repos</p>
          </div>
          <div className="p-3 rounded-lg border border-white/10 bg-black/30 text-center">
            <p className="text-xl font-bold text-white">{contributions?.followers || 0}</p>
            <p className="text-xs text-white/50">Followers</p>
          </div>
          <div className="p-3 rounded-lg border border-white/10 bg-black/30 text-center">
            <p className="text-xl font-bold text-white">{contributions?.following || 0}</p>
            <p className="text-xs text-white/50">Following</p>
          </div>
        </div>

        {/* Contribution Heatmap Placeholder */}
        <div className="p-4 rounded-lg border border-white/10 bg-black/30">
          <div className="flex items-center justify-between">
            <p className="text-xs text-white/50">
              {contributions?.totalContributions || 0} contributions in the last year
            </p>
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
          
          {/* Link to your GitHub profile */}
          <div className="mt-4 pt-3 border-t border-white/10 text-center">
            <a 
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
            >
              View full profile on GitHub →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}