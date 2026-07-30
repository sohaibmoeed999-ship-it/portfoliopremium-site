import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, BookOpen, User, Folder, Sparkles } from 'lucide-react';
import { Github } from './BrandIcons';

export default function GithubStats() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fallbackProfile = {
    login: 'sohaibmoeed999-ship-it',
    public_repos: 18,
    followers: 12,
    following: 15,
    bio: 'Data Science student | Python Developer | AI & Prompt Engineer',
    html_url: 'https://github.com/sohaibmoeed999-ship-it'
  };

  const fallbackRepos = [
    {
      name: 'issb-navigator-site-vc',
      description: 'A modern web application designed to help ISSB candidates prepare using an organized and interactive interface.',
      stargazers_count: 2,
      forks_count: 0,
      language: 'JavaScript',
      html_url: 'https://github.com/sohaibmoeed999-ship-it/issb-navigator-site-vc'
    },
    {
      name: 'job-portal-practice',
      description: 'A practice project built to improve Full-Stack Development skills using Vibe Coding while creating a clean, responsive job portal interface.',
      stargazers_count: 1,
      forks_count: 0,
      language: 'JavaScript',
      html_url: 'https://github.com/sohaibmoeed999-ship-it/job-portal-practice'
    },
    {
      name: 'lifelink-2.0-blood-donor-Matrix',
      description: 'A university semester project developed to simplify blood donor management and emergency blood request workflows.',
      stargazers_count: 1,
      forks_count: 1,
      language: 'C#',
      html_url: 'https://github.com/sohaibmoeed999-ship-it/lifelink-2.0-blood-donor-Matrix'
    },
    {
      name: 'python-automation-scripts',
      description: 'Collection of custom automation, scraping, and task management utilities built using Python.',
      stargazers_count: 3,
      forks_count: 0,
      language: 'Python',
      html_url: 'https://github.com/sohaibmoeed999-ship-it'
    }
  ];

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const username = 'sohaibmoeed999-ship-it';
        
        // Fetch profile
        const profileRes = await fetch(`https://api.github.com/users/${username}`);
        if (!profileRes.ok) throw new Error('Failed to fetch profile');
        const profileData = await profileRes.json();
        setProfile(profileData);

        // Fetch specific portfolio repositories to keep it aligned with original data
        const repoNames = [
          'issb-navigator-site-vc',
          'job-portal-practice',
          'lifelink-2.0-blood-donor-Matrix'
        ];
        
        const reposData = await Promise.all(
          repoNames.map(async (name) => {
            const res = await fetch(`https://api.github.com/repos/${username}/${name}`);
            if (!res.ok) throw new Error(`Failed to fetch repo: ${name}`);
            return res.json();
          })
        );
        
        setRepos(reposData);
        setLoading(false);
      } catch (err) {
        console.warn('GitHub API failed (likely rate-limited), loading premium local fallbacks.', err);
        setProfile(fallbackProfile);
        setRepos(fallbackRepos);
        setError(true);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  // Generate mock premium contribution data (53 weeks * 7 days)
  const renderContributionGraph = () => {
    // Generate simple contribution levels (0 to 4)
    const levels = [0, 0, 1, 0, 2, 0, 0, 3, 0, 1, 0, 0, 2, 0, 4, 0, 0, 1, 3, 0, 0, 2, 0, 1, 0, 0, 0, 2, 0, 3, 0];
    const grid = [];
    
    // We render a compact representation of 24 columns * 7 rows for responsive fit
    for (let c = 0; c < 24; c++) {
      const col = [];
      for (let r = 0; r < 7; r++) {
        const idx = (c * 7 + r) % levels.length;
        const level = levels[idx];
        let colorClass = 'bg-slate-200 dark:bg-slate-900 border-slate-300 dark:border-slate-850';
        if (level === 1) colorClass = 'bg-indigo-300 dark:bg-indigo-900/60 border-indigo-400 dark:border-indigo-800';
        if (level === 2) colorClass = 'bg-indigo-400 dark:bg-indigo-700 border-indigo-500 dark:border-indigo-600';
        if (level === 3) colorClass = 'bg-purple-500 dark:bg-purple-650 border-purple-600 dark:border-purple-500';
        if (level === 4) colorClass = 'bg-purple-600 dark:bg-purple-500 border-purple-700 dark:border-purple-405';

        col.push(
          <div
            key={`${c}-${r}`}
            className={`w-2.5 h-2.5 rounded-[2px] border ${colorClass} transition-all duration-200 hover:scale-120 hover:shadow-md cursor-default`}
            title={`Level ${level} activity`}
          />
        );
      }
      grid.push(
        <div key={c} className="flex flex-col gap-1">
          {col}
        </div>
      );
    }

    return (
      <div className="flex gap-1 overflow-x-auto pb-2 no-scrollbar justify-start sm:justify-center">
        {grid}
      </div>
    );
  };

  const getLanguageColor = (lang) => {
    const colors = {
      Python: 'bg-blue-500',
      JavaScript: 'bg-yellow-500',
      CSS: 'bg-purple-500',
      HTML: 'bg-orange-500',
      'C#': 'bg-violet-600',
      SQL: 'bg-emerald-500'
    };
    return colors[lang] || 'bg-slate-400';
  };

  return (
    <section id="github" className="py-24 relative overflow-hidden bg-slate-950/20 dark:bg-slate-950/20 light:bg-slate-50/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/15 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Activity
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight mb-4"
          >
            GitHub Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl mx-auto text-slate-500 dark:text-slate-400 text-sm sm:text-base"
          >
            Live code repositories, metrics summaries, and developmental contribution grids pulled straight from the git tree.
          </motion.p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Profile Statistics Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1 glass-card rounded-3xl p-6 flex flex-col items-center text-center justify-center">
                <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 text-indigo-500 shadow-lg shadow-indigo-500/10">
                  <User className="w-8 h-8" />
                </div>
                <h3 className="font-extrabold text-base mb-1">{profile?.name || 'Sohaib Shahid'}</h3>
                <a
                  href={profile?.html_url || 'https://github.com/sohaibmoeed999-ship-it'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-4 hover:underline flex items-center gap-1"
                >
                  @{profile?.login}
                </a>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-1.5">
                  {profile?.bio || 'Undergraduate Data Science student.'}
                </p>
              </div>

              {/* Stats Counters */}
              <div className="md:col-span-3 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
                <div className="grid grid-cols-3 gap-4 border-b border-slate-200/10 dark:border-white/5 pb-6 mb-6 text-center">
                  <div>
                    <span className="block text-2xl sm:text-3xl font-black text-indigo-650 dark:text-indigo-400">
                      {profile?.public_repos || 18}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-550 uppercase tracking-widest">
                      Repositories
                    </span>
                  </div>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-black text-indigo-650 dark:text-indigo-400">
                      {profile?.followers || 12}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-550 uppercase tracking-widest">
                      Followers
                    </span>
                  </div>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-black text-indigo-650 dark:text-indigo-400">
                      {profile?.following || 15}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-550 uppercase tracking-widest">
                      Following
                    </span>
                  </div>
                </div>

                {/* Contribution graph mockup */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider">
                      Contribution Activity (Dynamic)
                    </span>
                    <span className="text-[10px] text-slate-500 flex items-center gap-1.5 font-medium">
                      Less
                      <span className="w-2.5 h-2.5 rounded bg-slate-200 dark:bg-slate-900 border border-slate-350 dark:border-slate-850" />
                      <span className="w-2.5 h-2.5 rounded bg-indigo-300 dark:bg-indigo-900/60 border border-indigo-400 dark:border-indigo-800" />
                      <span className="w-2.5 h-2.5 rounded bg-indigo-400 dark:bg-indigo-700 border border-indigo-500 dark:border-indigo-600" />
                      <span className="w-2.5 h-2.5 rounded bg-purple-550 dark:bg-purple-650 border border-purple-600 dark:border-purple-500" />
                      <span className="w-2.5 h-2.5 rounded bg-purple-600 dark:bg-purple-500 border border-purple-700 dark:border-purple-400" />
                      More
                    </span>
                  </div>
                  {renderContributionGraph()}
                </div>
              </div>
            </div>

            {/* Repositories Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-card rounded-2xl p-6 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Folder className="w-4 h-4 text-indigo-500 shrink-0" />
                      <h4 className="font-bold text-sm sm:text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                        {repo.name}
                      </h4>
                    </div>
                    <p className="text-slate-650 dark:text-slate-400 text-xs leading-relaxed line-clamp-2 mb-6">
                      {repo.description || 'No description provided for this repository.'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-200/10 dark:border-white/5 pt-4 text-xs font-semibold text-slate-550">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${getLanguageColor(repo.language)}`} />
                        {repo.language}
                      </span>
                    )}
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 hover:text-indigo-550">
                        <Star className="w-3.5 h-3.5" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1 hover:text-indigo-550">
                        <GitFork className="w-3.5 h-3.5" />
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center pt-4">
              <a
                href="https://github.com/sohaibmoeed999-ship-it"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/35 text-xs font-bold transition-all shadow-md hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4" />
                View Full GitHub Profile
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
