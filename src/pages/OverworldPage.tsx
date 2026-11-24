import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Gamepad2,
  MapPin,
  Eye,
  RotateCcw,
} from 'lucide-react';
import { GitHubIcon } from '../components/BrandIcons';
import { OverworldCanvas } from '../components/OverworldCanvas';
import { ProjectCard } from '../components/ProjectCard';
import { useGameState } from '../context/useGameState';
import { AI_PROJECTS, WORLD_ZONES, type ZoneId } from '../data/projects';
import { PROFILE } from '../data/profile';
import { playSelectClick } from '../utils/sound';

export function OverworldPage() {
  const {
    activeZoneId,
    setActiveZoneId,
    collectedCores,
    collectCore,
    resetCores,
    soundEnabled,
    rankTitle,
  } = useGameState();
  const [cameraMode, setCameraMode] = useState<'orbit' | 'follow' | 'top'>('orbit');

  const activeZone = WORLD_ZONES.find((z) => z.id === activeZoneId) ?? WORLD_ZONES[0];
  const zoneProjects = AI_PROJECTS.filter((p) => p.zoneId === activeZone.id);
  const featuredProjects = AI_PROJECTS.filter((p) => p.featured).slice(0, 6);

  const handleSelectZone = (zoneId: ZoneId) => {
    playSelectClick(soundEnabled);
    setActiveZoneId(zoneId);
  };

  return (
    <div className="paper-grid-bg">
      {/* Hero Game Intro + 3D Overworld */}
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6">
        <div className="mb-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[#DEC9B4] bg-white px-3.5 py-1 shadow-xs">
              <span className="h-2 w-2 rounded-full bg-[#245B45]" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#352219]">
                {PROFILE.academicStatus} · AI Systems &amp; Interactive 3D Engineering
              </span>
            </div>
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#352219] sm:text-5xl">
              AI Systems &amp;{' '}
              <span className="text-[#C94F16]">Interactive 3D Showcase</span>
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6C5B50] sm:text-base">
              Navigate the 3D studio world with <strong>WASD / Arrow Keys</strong> or click any
              zone island to inspect 40 AI &amp; 3D projects from GitHub, discover all 6 domain
              cores, and launch live production deployments.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setCameraMode('orbit')}
              className={`game-btn rounded-xl px-3 py-1.5 text-xs ${
                cameraMode === 'orbit' ? 'bg-[#352219] text-white' : 'bg-white text-[#352219]'
              }`}
            >
              <Eye className="h-3.5 w-3.5" />
              Orbit View
            </button>
            <button
              type="button"
              onClick={() => setCameraMode('follow')}
              className={`game-btn rounded-xl px-3 py-1.5 text-xs ${
                cameraMode === 'follow' ? 'bg-[#352219] text-white' : 'bg-white text-[#352219]'
              }`}
            >
              <Gamepad2 className="h-3.5 w-3.5" />
              Follow Bot
            </button>
            <button
              type="button"
              onClick={() => setCameraMode('top')}
              className={`game-btn rounded-xl px-3 py-1.5 text-xs ${
                cameraMode === 'top' ? 'bg-[#352219] text-white' : 'bg-white text-[#352219]'
              }`}
            >
              <Compass className="h-3.5 w-3.5" />
              Map View
            </button>
            <button
              type="button"
              onClick={resetCores}
              title="Reset collected AI Cores"
              className="game-btn rounded-xl bg-[#F9EBDC] px-2.5 py-1.5 text-xs text-[#352219]"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* 3D Canvas + Live Zone Quest Briefing Side Panel */}
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <OverworldCanvas
              activeZoneId={activeZoneId}
              collectedCores={collectedCores}
              onSelectZone={handleSelectZone}
              onCollectCore={collectCore}
              cameraMode={cameraMode}
            />

            {/* Fast-Travel Island Buttons */}
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
              {WORLD_ZONES.map((zone) => {
                const isSelected = zone.id === activeZoneId;
                const hasCore = collectedCores.includes(zone.id);
                return (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => handleSelectZone(zone.id)}
                    className={`game-btn flex-col items-start rounded-xl px-3 py-2 text-left ${
                      isSelected ? 'bg-[#C94F16] text-white' : 'bg-white text-[#352219]'
                    }`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="font-mono text-[10px] font-bold opacity-80">
                        {zone.number}
                      </span>
                      <span className="text-xs" aria-label={hasCore ? 'Core collected' : 'Core uncollected'}>
                        {hasCore ? '★' : '☆'}
                      </span>
                    </div>
                    <span className="mt-0.5 line-clamp-1 font-display text-xs font-extrabold">
                      {zone.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Selected Zone Briefing & Quick Launch */}
          <aside className="game-card flex flex-col justify-between rounded-2xl p-5 lg:col-span-4">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#352219] px-2.5 py-1 font-mono text-xs font-bold text-white"
                  style={{ backgroundColor: activeZone.color }}
                >
                  <MapPin className="h-3.5 w-3.5" />
                  {activeZone.number}
                </span>
                <button
                  type="button"
                  onClick={() => collectCore(activeZone.id)}
                  className={`rounded-lg border px-2.5 py-1 font-mono text-[11px] font-bold cursor-pointer ${
                    collectedCores.includes(activeZone.id)
                      ? 'border-[#245B45]/40 bg-[#EBF4EE] text-[#245B45]'
                      : 'border-[#352219] bg-[#E6A23C] text-[#352219]'
                  }`}
                >
                  {collectedCores.includes(activeZone.id) ? '★ CORE SYNCED' : '+ CLAIM CORE'}
                </button>
              </div>

              <h2 className="mt-3 font-display text-2xl font-extrabold text-[#352219]">
                {activeZone.name}
              </h2>
              <p className="text-xs font-bold uppercase tracking-wide text-[#A83D10]">
                {activeZone.subtitle}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-[#6C5B50]">{activeZone.summary}</p>

              {/* Zone Contents */}
              <div className="mt-4 border-t border-[#EADBCB] pt-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase text-[#352219]">
                    {activeZone.id === 'citadel'
                      ? 'Architect Identity'
                      : `Zone Deployments (${zoneProjects.length})`}
                  </span>
                  <Link
                    to={activeZone.route}
                    className="font-mono text-xs font-bold text-[#C94F16] hover:underline"
                  >
                    Open Full Page →
                  </Link>
                </div>

                {activeZone.id === 'citadel' ? (
                  <div className="mt-3 space-y-2.5">
                    <div className="rounded-xl border border-[#EADBCB] bg-[#FFF7EC] p-3">
                      <div className="font-display text-sm font-bold text-[#352219]">
                        {PROFILE.name}
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-[#6C5B50]">
                        {PROFILE.bioHeadline}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {PROFILE.stats.map((st) => (
                        <div
                          key={st.label}
                          className="rounded-xl border border-[#EADBCB] bg-[#F9EBDC] p-2.5"
                        >
                          <div className="font-display text-lg font-extrabold text-[#C94F16]">
                            {st.value}
                          </div>
                          <div className="text-[11px] font-semibold text-[#352219]">{st.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="mt-3 max-h-[250px] space-y-2 overflow-y-auto pr-1">
                    {zoneProjects.map((proj) => (
                      <div
                        key={proj.slug}
                        className="rounded-xl border border-[#EADBCB] bg-[#FFF7EC] p-3 transition-colors hover:border-[#C94F16]"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <Link
                            to={`/projects/${proj.slug}`}
                            className="font-display text-sm font-bold text-[#352219] hover:text-[#C94F16]"
                          >
                            {proj.title}
                          </Link>
                          <span className="shrink-0 font-mono text-[10px] font-bold text-[#6C5B50]">
                            {proj.year}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-[#6C5B50]">{proj.tagline}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {proj.liveUrl && (
                            <a
                              href={proj.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-[#245B45] hover:underline"
                            >
                              Live App <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                          {proj.githubUrl && (
                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-[#352219] hover:underline"
                            >
                              GitHub <GitHubIcon className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Quest Status */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-[#EADBCB] pt-4">
              <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#352219]">
                <Sparkles className="h-4 w-4 text-[#E6A23C]" />
                <span>{rankTitle}</span>
              </div>
              <Link
                to="/projects"
                className="game-btn rounded-xl bg-[#B5430F] px-3.5 py-2 text-xs text-white"
              >
                Explore All {AI_PROJECTS.length} Projects
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Featured AI Highlights Strip */}
      <section className="border-t-2 border-[#352219] bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#A83D10]">
                Flagship Builds From GitHub
              </span>
              <h2 className="mt-1 font-display text-3xl font-extrabold text-[#352219]">
                Featured AI Systems &amp; Digital Twins
              </h2>
            </div>
            <Link
              to="/projects"
              className="game-btn rounded-xl bg-[#F9EBDC] px-4 py-2 text-sm text-[#352219]"
            >
              Browse Full AI Armory ({AI_PROJECTS.length})
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Section World Directory */}
      <section className="border-t-2 border-[#352219] bg-[#FFF7EC] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#A83D10]">
              Multi-Page Portfolio Navigation
            </span>
            <h2 className="mt-1 font-display text-3xl font-extrabold text-[#352219]">
              Choose Your Next Destination
            </h2>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'AI Project Armory',
                desc: 'Filter all 34+ GitHub & CV AI projects with live hosted links, descriptions & source.',
                to: '/projects',
                badge: '40 PROJECTS',
              },
              {
                title: 'Campaign & Experience',
                desc: '750+ AI skills ecosystem, multi-agent systems, hackathons & engineering pipelines.',
                to: '/experience',
                badge: 'EXPERIENCE',
              },
              {
                title: 'About & Skill Matrix',
                desc: '4th-Year B.Tech ECE profile, interactive AI competencies, education & credentials.',
                to: '/about',
                badge: '4TH-YR ECE',
              },
              {
                title: 'AI Simulation Lab',
                desc: 'Interactive failover router simulation & tailored role-based project matcher.',
                to: '/lab',
                badge: 'INTERACTIVE LAB',
              },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="game-card game-card-interactive flex flex-col justify-between rounded-2xl p-5 no-underline"
              >
                <div>
                  <span className="inline-block rounded-lg border border-[#352219] bg-[#F9EBDC] px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#352219]">
                    {item.badge}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-extrabold text-[#352219]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6C5B50]">{item.desc}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-bold text-[#C94F16]">
                  Enter Section <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
