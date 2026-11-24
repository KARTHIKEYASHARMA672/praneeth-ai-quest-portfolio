import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Globe, Code2, Layers } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { AI_PROJECTS, PROJECT_CATEGORIES, type ProjectCategory } from '../data/projects';

export function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = (searchParams.get('cat') as 'All' | ProjectCategory | null) ?? 'All';

  const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectCategory>(
    PROJECT_CATEGORIES.includes(initialCat) ? initialCat : 'All',
  );
  const [hostingFilter, setHostingFilter] = useState<'all' | 'hosted' | 'source'>('all');
  const [query, setQuery] = useState('');

  const handleCategoryChange = (cat: 'All' | ProjectCategory) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat });
    }
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return AI_PROJECTS.filter((project) => {
      if (selectedCategory !== 'All' && project.category !== selectedCategory) return false;
      if (hostingFilter === 'hosted' && !project.liveUrl) return false;
      if (hostingFilter === 'source' && project.liveUrl) return false;
      if (!q) return true;
      const haystack = `${project.title} ${project.tagline} ${project.description} ${project.stack.join(' ')} ${project.category}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [selectedCategory, hostingFilter, query]);

  const hostedCount = AI_PROJECTS.filter((p) => Boolean(p.liveUrl)).length;
  const sourceOnlyCount = AI_PROJECTS.length - hostedCount;

  return (
    <div className="paper-grid-bg min-h-screen pb-16 pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="game-card rounded-2xl bg-white p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <span className="inline-block rounded-lg border border-[#352219] bg-[#F9EBDC] px-2.5 py-1 font-mono text-xs font-bold uppercase text-[#A83D10]">
                100% AI &amp; 3D Software Armory · Zero ECE Hardware Projects
              </span>
              <h1 className="mt-3 font-display text-3xl font-extrabold text-[#352219] sm:text-4xl">
                All GitHub &amp; AI Projects
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6C5B50] sm:text-base">
                Every AI, Agentic OS, Computer Vision, Digital Twin, Automation, and 3D WebGL
                project from my GitHub repositories and portfolio — each complete with architectural
                descriptions, hosted live links where deployed, and source repositories.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="rounded-xl border-2 border-[#352219] bg-[#FFF7EC] px-3 py-2 text-center">
                <div className="font-display text-xl font-extrabold text-[#352219]">
                  {AI_PROJECTS.length}
                </div>
                <div className="font-mono text-[10px] font-bold uppercase text-[#6C5B50]">Total</div>
              </div>
              <div className="rounded-xl border-2 border-[#352219] bg-[#EBF4EE] px-3 py-2 text-center">
                <div className="font-display text-xl font-extrabold text-[#245B45]">
                  {hostedCount}
                </div>
                <div className="font-mono text-[10px] font-bold uppercase text-[#245B45]">Hosted</div>
              </div>
              <div className="rounded-xl border-2 border-[#352219] bg-[#F5EDF6] px-3 py-2 text-center">
                <div className="font-display text-xl font-extrabold text-[#673B70]">
                  {sourceOnlyCount}
                </div>
                <div className="font-mono text-[10px] font-bold uppercase text-[#673B70]">Local/Code</div>
              </div>
            </div>
          </div>

          {/* Search & Deployment Filter */}
          <div className="mt-6 flex flex-col gap-3 border-t border-[#EADBCB] pt-5 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 md:max-w-md">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6C5B50]" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by AI model, stack (YOLO, Three.js, Gemini, n8n)..."
                className="w-full rounded-xl border-2 border-[#352219] bg-[#FFF7EC] py-2 pl-10 pr-4 text-sm font-medium text-[#352219] placeholder:text-[#6C5B50] focus:border-[#C94F16] focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setHostingFilter('all')}
                className={`game-btn rounded-xl px-3 py-1.5 text-xs ${
                  hostingFilter === 'all' ? 'bg-[#352219] text-white' : 'bg-[#FFF7EC] text-[#352219]'
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                All ({AI_PROJECTS.length})
              </button>
              <button
                type="button"
                onClick={() => setHostingFilter('hosted')}
                className={`game-btn rounded-xl px-3 py-1.5 text-xs ${
                  hostingFilter === 'hosted'
                    ? 'bg-[#245B45] text-white'
                    : 'bg-[#EBF4EE] text-[#245B45]'
                }`}
              >
                <Globe className="h-3.5 w-3.5" />
                Live Hosted ({hostedCount})
              </button>
              <button
                type="button"
                onClick={() => setHostingFilter('source')}
                className={`game-btn rounded-xl px-3 py-1.5 text-xs ${
                  hostingFilter === 'source'
                    ? 'bg-[#673B70] text-white'
                    : 'bg-[#F5EDF6] text-[#673B70]'
                }`}
              >
                <Code2 className="h-3.5 w-3.5" />
                GitHub / Local ({sourceOnlyCount})
              </button>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-4 flex flex-wrap gap-2">
            {PROJECT_CATEGORIES.map((cat) => {
              const count =
                cat === 'All'
                  ? AI_PROJECTS.length
                  : AI_PROJECTS.filter((p) => p.category === cat).length;
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryChange(cat)}
                  className={`rounded-xl border-2 px-3 py-1.5 font-mono text-xs font-bold transition-all cursor-pointer ${
                    active
                      ? 'border-[#352219] bg-[#C94F16] text-white shadow-[0_2px_0_#352219]'
                      : 'border-[#EADBCB] bg-[#FFF7EC] text-[#352219] hover:border-[#352219]'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        {filtered.length === 0 ? (
          <div className="game-card mt-8 rounded-2xl p-10 text-center">
            <p className="font-display text-xl font-bold text-[#352219]">
              No matching AI projects found
            </p>
            <p className="mt-1 text-sm text-[#6C5B50]">
              Clear your search filter or switch back to All categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setHostingFilter('all');
                handleCategoryChange('All');
              }}
              className="game-btn mt-4 rounded-xl bg-[#B5430F] px-4 py-2 text-xs text-white"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
