import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  MapPin,
  ExternalLink,
  ArrowRight,
  Briefcase,
  CheckCircle2,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/BrandIcons';
import { EDUCATION, PROFILE, SKILL_BRANCHES } from '../data/profile';
import { AI_PROJECTS } from '../data/projects';

export function AboutPage() {
  const [selectedBranchId, setSelectedBranchId] = useState<string>(SKILL_BRANCHES[0].id);
  const activeBranch =
    SKILL_BRANCHES.find((b) => b.id === selectedBranchId) ?? SKILL_BRANCHES[0];

  const proofProjects = AI_PROJECTS.filter((p) => activeBranch.linkedSlugs.includes(p.slug));

  return (
    <div className="min-h-screen bg-[#FFF7EC] pb-16 pt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Executive Identity Card */}
        <section className="studio-card rounded-2xl p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-md border border-[#C94F16]/20 bg-[#FDEEE6] px-3 py-1 font-mono text-xs font-semibold uppercase text-[#C94F16]">
                <span>ABOUT ME</span>
                <span>·</span>
                <span>{PROFILE.academicStatus}</span>
              </div>
              <h1 className="mt-4 font-display text-3xl font-extrabold text-[#352219] sm:text-5xl">
                {PROFILE.name}
              </h1>
              <p className="mt-2 font-mono text-sm font-semibold text-[#C94F16]">
                {PROFILE.title} · GitHub @{PROFILE.handle}
              </p>

              <div className="mt-5 space-y-3 text-sm leading-relaxed text-[#6C5B50] sm:text-base">
                {PROFILE.bioStory.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="studio-btn rounded-xl bg-[#352219] px-4 py-2 text-xs text-white hover:bg-[#C94F16]"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub Profile
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="studio-btn rounded-xl bg-[#C94F16] px-4 py-2 text-xs text-white hover:bg-[#A83D10]"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn Profile
                </a>
                {PROFILE.previousPortfolios.map((prev) => (
                  <a
                    key={prev.url}
                    href={prev.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="studio-btn rounded-xl border border-[#DEC9B4] bg-white px-4 py-2 text-xs text-[#352219] hover:border-[#C94F16]"
                  >
                    {prev.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Availability & Key Metrics Box */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#EADBCB] bg-[#FFF7EC] p-5 lg:col-span-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase text-[#245B45]">
                  <Briefcase className="h-4 w-4" />
                  Hiring Availability
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#6C5B50]">
                  {PROFILE.availabilityNote}
                </p>

                <ul className="mt-3 space-y-1.5">
                  {PROFILE.targetRoles.map((role) => (
                    <li
                      key={role}
                      className="flex items-center gap-2 text-xs font-semibold text-[#352219]"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#C94F16]" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  {PROFILE.stats.map((st) => (
                    <div
                      key={st.label}
                      className="rounded-xl border border-[#EADBCB] bg-white p-3 text-center"
                    >
                      <div className="font-display text-xl font-extrabold text-[#C94F16]">
                        {st.value}
                      </div>
                      <div className="mt-0.5 text-[11px] font-medium text-[#6C5B50]">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 space-y-2 border-t border-[#EADBCB] pt-4 text-xs text-[#6C5B50]">
                <div className="flex items-center gap-2 font-semibold text-[#352219]">
                  <GraduationCap className="h-4 w-4 text-[#C94F16]" />
                  <span>Lovely Professional University (B.Tech ECE, 4th Year)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#C94F16]" />
                  <span>{PROFILE.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core AI Competencies Matrix */}
        <section className="mt-10">
          <h2 className="font-display text-2xl font-extrabold text-[#352219]">
            Core AI Competencies &amp; Proof of Work
          </h2>
          <p className="mt-1 text-sm text-[#6C5B50]">
            Select any technical domain to inspect tools and live GitHub repositories.
          </p>

          <div className="mt-5 grid gap-6 lg:grid-cols-12">
            <div className="space-y-2.5 lg:col-span-5">
              {SKILL_BRANCHES.map((branch) => {
                const isSelected = branch.id === activeBranch.id;
                return (
                  <button
                    key={branch.id}
                    type="button"
                    onClick={() => setSelectedBranchId(branch.id)}
                    className={`studio-card w-full rounded-xl p-4 text-left transition-all cursor-pointer ${
                      isSelected ? 'border-[#C94F16] bg-[#C94F16] text-white' : 'bg-white text-[#352219]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-display text-sm font-bold sm:text-base">{branch.title}</span>
                      <span
                        className={`rounded-md px-2 py-0.5 font-mono text-[11px] font-semibold ${
                          isSelected ? 'bg-white/15 text-white' : 'bg-[#FDEEE6] text-[#C94F16]'
                        }`}
                      >
                        {branch.xp}%
                      </span>
                    </div>
                    <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-black/10">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${branch.xp}%`,
                          backgroundColor: isSelected ? '#E6A23C' : '#C94F16',
                        }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="studio-card rounded-2xl p-6 lg:col-span-7">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-xl font-extrabold text-[#352219] sm:text-2xl">
                  {activeBranch.title}
                </h3>
                <span className="rounded-md border border-[#C94F16]/20 bg-[#FDEEE6] px-2.5 py-0.5 font-mono text-xs font-semibold text-[#C94F16]">
                  {activeBranch.linkedSlugs.length} Flagship Repos
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#6C5B50]">{activeBranch.summary}</p>

              <div className="mt-5">
                <div className="font-mono text-xs font-semibold uppercase text-[#C94F16]">
                  Core AI Tools &amp; Frameworks
                </div>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {activeBranch.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-lg border border-[#EADBCB] bg-[#FFF7EC] px-3 py-1 font-mono text-xs font-medium text-[#352219]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-[#EADBCB] pt-5">
                <div className="font-mono text-xs font-semibold uppercase text-[#C94F16]">
                  Verified Projects Proving This Skill
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {proofProjects.map((proj) => (
                    <Link
                      key={proj.slug}
                      to={`/projects/${proj.slug}`}
                      className="rounded-xl border border-[#EADBCB] bg-[#FFF7EC] p-3.5 no-underline transition-colors hover:border-[#C94F16]"
                    >
                      <div className="font-display text-sm font-bold text-[#352219]">
                        {proj.title}
                      </div>
                      <p className="mt-1 line-clamp-2 text-xs text-[#6C5B50]">{proj.tagline}</p>
                      <span className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-[#C94F16]">
                        Case Study <ArrowRight className="h-3 w-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-extrabold text-[#352219]">
            Academic Foundation
          </h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {EDUCATION.map((edu) => (
              <div key={edu.degree} className="studio-card rounded-2xl p-5">
                <span className="inline-block rounded-md border border-[#EADBCB] bg-[#FFF7EC] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#C94F16]">
                  {edu.period}
                </span>
                <h3 className="mt-3 font-display text-base font-bold text-[#352219]">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#A83D10]">{edu.institution}</p>
                <p className="text-xs text-[#6C5B50]">{edu.location}</p>
                <div className="mt-3 rounded-lg bg-[#F9EBDC] px-3 py-1.5 font-mono text-xs font-semibold text-[#352219]">
                  {edu.grade}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#6C5B50]">{edu.focus}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
