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
    <div className="min-h-screen bg-[#FFF7EC] pb-16 pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="studio-card rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <span className="inline-block rounded-md border border-[#C94F16]/20 bg-[#FDEEE6] px-2.5 py-1 font-mono text-xs font-semibold uppercase text-[#C94F16]">
                Complete AI &amp; 3D Software Portfolio · Zero ECE Hardware Projects
              </span>
              <h1 className="mt-3 font-display text-3xl font-extrabold text-[#352219] sm:text-4xl">
                All GitHub &amp; AI Projects
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6C5B50] sm:text-base">
                A complete catalog of my AI, Agentic OS, Computer Vision, Digital Twin, Automation,
                and 3D WebGL repositories — each documented with architecture summaries, live hosted
                links where available, and GitHub source access.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              <div className="rounded-xl border border-[#EADBCB] bg-[#FFF7EC] px-4 py-2.5 text-center">
                <div className="font-display text-xl font-extrabold text-[#352219]">
                  {AI_PROJECTS.length}
                </div>
                <div className="font-mono text-[10px] font-semibold uppercase text-[#6C5B50]">Total</div>
              </div>
              <div className="rounded-xl border border-[#245B45]/25 bg-[#EBF4EE] px-4 py-2.5 text-center">
                <div className="font-display text-xl font-extrabold text-[#245B45]">
                  {hostedCount}
                </div>
                <div className="font-mono text-[10px] font-semibold uppercase text-[#245B45]">Live</div>
              </div>
              <div className="rounded-xl border border-[#C94F16]/20 bg-[#FDEEE6] px-4 py-2.5 text-center">
                <div className="font-display text-xl font-extrabold text-[#C94F16]">
                  {sourceOnlyCount}
                </div>
                <div className="font-mono text-[10px] font-semibold uppercase text-[#C94F16]">Source</div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-[#EADBCB] pt-5 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 md:max-w-md">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6C5B50]" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by AI model, framework (YOLO, Three.js, Gemini, n8n)..."
                className="w-full rounded-xl border border-[#DEC9B4] bg-[#FFF7EC] py-2 pl-10 pr-4 text-sm text-[#352219] placeholder:text-[#6C5B50] focus:border-[#C94F16] focus:bg-white focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setHostingFilter('all')}
                className={`studio-btn rounded-lg border px-3 py-1.5 text-xs ${
                  hostingFilter === 'all'
                    ? 'border-[#352219] bg-[#352219] text-white'
                    : 'border-[#EADBCB] bg-white text-[#352219]'
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                All ({AI_PROJECTS.length})
              </button>
              <button
                type="button"
                onClick={() => setHostingFilter('hosted')}
                className={`studio-btn rounded-lg border px-3 py-1.5 text-xs ${
                  hostingFilter === 'hosted'
                    ? 'border-[#245B45] bg-[#245B45] text-white'
                    : 'border-[#245B45]/25 bg-[#EBF4EE] text-[#245B45]'
                }`}
              >
                <Globe className="h-3.5 w-3.5" />
                Live Hosted ({hostedCount})
              </button>
              <button
                type="button"
                onClick={() => setHostingFilter('source')}
                className={`studio-btn rounded-lg border px-3 py-1.5 text-xs ${
                  hostingFilter === 'source'
                    ? 'border-[#C94F16] bg-[#C94F16] text-white'
                    : 'border-[#C94F16]/20 bg-[#FDEEE6] text-[#C94F16]'
                }`}
              >
                <Code2 className="h-3.5 w-3.5" />
                Local / Source ({sourceOnlyCount})
              </button>
            </div>
          </div>

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
                  className={`rounded-lg border px-3 py-1.5 font-mono text-xs font-semibold transition-colors cursor-pointer ${
                    active
                      ? 'border-[#C94F16] bg-[#C94F16] text-white'
                      : 'border-[#EADBCB] bg-[#FFF7EC] text-[#352219] hover:border-[#C94F16]'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="studio-card mt-8 rounded-2xl p-10 text-center">
            <p className="font-display text-xl font-bold text-[#352219]">
              No matching AI projects found
            </p>
            <p className="mt-1 text-sm text-[#6C5B50]">
              Clear your search query or reset the category filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setHostingFilter('all');
                handleCategoryChange('All');
              }}
              className="studio-btn mt-4 rounded-xl bg-[#C94F16] px-4 py-2 text-xs text-white"
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
