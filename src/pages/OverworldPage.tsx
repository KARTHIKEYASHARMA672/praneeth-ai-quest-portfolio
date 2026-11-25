import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ExternalLink,
  FileText,
  Briefcase,
  Cpu,
  Layers,
  Eye,
  Workflow,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/BrandIcons';
import { NeuralStudio3D } from '../components/NeuralStudio3D';
import { ProjectCard } from '../components/ProjectCard';
import { AI_PROJECTS, WORLD_ZONES, type ZoneId } from '../data/projects';
import { PROFILE } from '../data/profile';

const DOMAIN_LABELS: Record<ZoneId, string> = {
  citadel: 'Core Profile',
  foundry: 'Agentic AI & OS',
  spatial: '3D Digital Twins',
  vision: 'Vision & ML',
  guild: 'LLMs & Workflows',
  arcade: '3D WebGL',
};

export function OverworldPage() {
  const [activeZoneId, setActiveZoneId] = useState<ZoneId>('foundry');

  const activeZone = WORLD_ZONES.find((z) => z.id === activeZoneId) ?? WORLD_ZONES[1];
  const zoneProjects = AI_PROJECTS.filter((p) => p.zoneId === activeZone.id);
  const featuredProjects = AI_PROJECTS.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="bg-[#FFF7EC]">
      {/* Executive Split Hero + Interactive 3D Neural Studio */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:pt-14">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          {/* Left: Recruiter-First Value Prop */}
          <div className="lg:col-span-6">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[#245B45]/25 bg-[#EBF4EE] px-3.5 py-1 text-xs font-semibold text-[#245B45]">
              <span className="h-2 w-2 rounded-full bg-[#245B45]" />
              <span>{PROFILE.jobStatus}</span>
            </div>

            <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-[#352219] sm:text-5xl">
              AI Systems Engineer building{' '}
              <span className="text-[#C94F16]">autonomous agents</span> &amp;{' '}
              <span className="text-[#C94F16]">3D intelligence</span>.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-[#6C5B50] sm:text-lg">
              I am <strong>{PROFILE.name}</strong>, a{' '}
              <strong>4th-Year B.Tech ECE student (Class of 2027)</strong> actively applying for{' '}
              <strong>AI Engineering, Agentic AI, Applied ML, and Full-Stack LLM roles</strong>.
              Explore <strong>40 verified AI &amp; 3D software projects</strong> across my GitHub
              ecosystem — 32 deployed live in production.
            </p>

            {/* Primary CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="studio-btn rounded-xl bg-[#C94F16] px-5 py-3 text-sm text-white shadow-sm hover:bg-[#A83D10]"
              >
                Explore 40 AI Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/resume"
                className="studio-btn rounded-xl border border-[#DEC9B4] bg-white px-5 py-3 text-sm text-[#352219] hover:border-[#C94F16]"
              >
                <FileText className="h-4 w-4 text-[#C94F16]" />
                View AI Resume
              </Link>
              <Link
                to="/contact"
                className="studio-btn rounded-xl border border-[#DEC9B4] bg-[#F9EBDC] px-5 py-3 text-sm text-[#352219] hover:border-[#C94F16]"
              >
                Hire / Contact
              </Link>
            </div>

            {/* Recruiter KPI Strip */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {PROFILE.stats.map((st) => (
                <div
                  key={st.label}
                  className="studio-card rounded-xl px-4 py-3 text-left"
                >
                  <div className="font-display text-2xl font-extrabold text-[#C94F16]">
                    {st.value}
                  </div>
                  <div className="mt-0.5 text-xs font-medium text-[#6C5B50]">{st.label}</div>
                </div>
              ))}
            </div>

            {/* Direct Links */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#6C5B50]">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#C94F16]"
              >
                <GitHubIcon className="h-4 w-4" />
                github.com/KARTHIKEYASHARMA672
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#C94F16]"
              >
                <LinkedInIcon className="h-4 w-4" />
                linkedin.com/in/karthikeya-sharma672
              </a>
            </div>
          </div>

          {/* Right: Interactive 3D Studio Centerpiece + Domain Inspector */}
          <div className="lg:col-span-6">
            <NeuralStudio3D activeZoneId={activeZoneId} onSelectZone={setActiveZoneId} />

            {/* Domain Selector Tabs */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {WORLD_ZONES.map((zone) => {
                const active = zone.id === activeZoneId;
                return (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => setActiveZoneId(zone.id)}
                    className={`rounded-lg border px-3 py-1.5 font-mono text-xs font-semibold transition-colors cursor-pointer ${
                      active
                        ? 'border-[#C94F16] bg-[#C94F16] text-white'
                        : 'border-[#EADBCB] bg-white text-[#352219] hover:border-[#C94F16]'
                    }`}
                  >
                    {DOMAIN_LABELS[zone.id]}
                  </button>
                );
              })}
            </div>

            {/* Active 3D Domain Preview Card */}
            <div className="studio-card mt-3 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#A83D10]">
                    {activeZone.subtitle}
                  </span>
                  <h2 className="font-display text-lg font-bold text-[#352219]">
                    {activeZone.name}
                  </h2>
                </div>
                <Link
                  to={activeZone.route}
                  className="font-mono text-xs font-semibold text-[#C94F16] hover:underline"
                >
                  View Section →
                </Link>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-[#6C5B50] sm:text-sm">
                {activeZone.summary}
              </p>

              {activeZone.id !== 'citadel' && (
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {zoneProjects.slice(0, 2).map((proj) => (
                    <div
                      key={proj.slug}
                      className="flex flex-col justify-between rounded-xl border border-[#EADBCB] bg-[#FFF7EC] p-3"
                    >
                      <div>
                        <Link
                          to={`/projects/${proj.slug}`}
                          className="font-display text-xs font-bold text-[#352219] hover:text-[#C94F16]"
                        >
                          {proj.title}
                        </Link>
                        <p className="mt-0.5 line-clamp-1 text-[11px] text-[#6C5B50]">
                          {proj.tagline}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center gap-3 font-mono text-[11px] font-semibold">
                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[#245B45] hover:underline"
                          >
                            Live <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[#352219] hover:underline"
                          >
                            Code <GitHubIcon className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Pillars */}
      <section className="border-y border-[#EADBCB] bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C94F16]">
              Engineering Focus
            </span>
            <h2 className="mt-1 font-display text-2xl font-extrabold text-[#352219] sm:text-3xl">
              Production AI Capabilities
            </h2>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Cpu,
                title: 'Agentic AI & Routing',
                desc: 'Zero-cost multi-model failover chains, MCP servers, and safety-gated desktop & web tool execution (KODA, Nexus Factory).',
              },
              {
                icon: Layers,
                title: '3D Spatial AI & Twins',
                desc: 'Three.js WebGL2 digital twins integrating numerical solvers, urban/factory optimization, and interactive simulation (CityOS, MirrorWorld).',
              },
              {
                icon: Eye,
                title: 'Computer Vision & ML',
                desc: 'Ultralytics YOLO road hazard detection, TensorFlow/Keras traffic models, TFLite benchmarks, and Gemini Pro Vision pipelines.',
              },
              {
                icon: Workflow,
                title: 'LLM & Process Automation',
                desc: 'Client-side codebase reverse engineering (BLACKBOX), evidence-grounded QA (ARTISAN AI), n8n workflows, and resume/PDF engines.',
              },
            ].map((item) => (
              <div key={item.title} className="studio-card rounded-2xl p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDEEE6] text-[#C94F16]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-[#352219]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6C5B50]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship AI Projects Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C94F16]">
                Selected Case Studies
              </span>
              <h2 className="mt-1 font-display text-2xl font-extrabold text-[#352219] sm:text-3xl">
                Featured AI Systems &amp; Deployments
              </h2>
            </div>
            <Link
              to="/projects"
              className="studio-btn rounded-xl border border-[#DEC9B4] bg-white px-4 py-2 text-sm text-[#352219] hover:border-[#C94F16]"
            >
              Browse All {AI_PROJECTS.length} Projects
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

      {/* Hiring & Job Application Callout */}
      <section className="border-t border-[#EADBCB] bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-[#C94F16]/20 bg-[#352219] p-8 text-white md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono text-xs font-semibold text-[#E6A23C]">
                <Briefcase className="h-3.5 w-3.5" />
                ACTIVELY APPLYING · 2026–2027 AI ROLES
              </div>
              <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
                Hiring for AI Engineer, Agentic AI, or Applied ML?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#F5E6D8] sm:text-base">
                {PROFILE.availabilityNote}
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                to="/resume"
                className="studio-btn rounded-xl bg-white px-5 py-3 text-sm text-[#352219] hover:bg-[#FFF7EC]"
              >
                View Resume &amp; Role Fit
              </Link>
              <Link
                to="/contact"
                className="studio-btn rounded-xl bg-[#E6A23C] px-5 py-3 text-sm text-[#352219] hover:bg-[#D9932B]"
              >
                Schedule Interview
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
