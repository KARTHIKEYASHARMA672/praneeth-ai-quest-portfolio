import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Printer, ExternalLink, ArrowRight, Briefcase, CheckCircle2, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/BrandIcons';
import { AI_PROJECTS } from '../data/projects';
import { CREDENTIALS, EDUCATION, EXPERIENCE_QUESTS, PROFILE, SKILL_BRANCHES } from '../data/profile';

const ROLE_FILTERS = [
  {
    id: 'agentic',
    label: 'Agentic AI & LLM Engineer',
    summary:
      'Focuses on autonomous multi-agent orchestration, zero-cost model failover, MCP servers, and citation-grounded retrieval.',
    slugs: ['koda', 'nexus-factory', 'ai-os', 'newschakra', 'artisan-ai-picasso', 'open-code-find-skills'],
  },
  {
    id: 'vision',
    label: 'Computer Vision & Applied ML',
    summary:
      'Focuses on Ultralytics YOLO detection, TensorFlow/Keras .h5 predictive models, TFLite edge benchmarks, and Gemini Vision.',
    slugs: [
      'pothole-ai-detector',
      'ai-smart-indian-traffic-system',
      'smart-grid-platform',
      'image-recognizer',
      'auto-edge-sim',
    ],
  },
  {
    id: 'fullstack',
    label: 'Full-Stack AI Product & 3D WebGL',
    summary:
      'Focuses on client-side code analysis, Three.js WebGL2 digital twins, n8n workflows, and end-to-end Vercel production shipping.',
    slugs: [
      'blackbox',
      'cityos',
      'mirrorworld',
      'archon',
      'reality-engine',
      'certifyai',
      'ai-career-opportunity-report-generator',
    ],
  },
];

export function ResumePage() {
  const [selectedRoleId, setSelectedRoleId] = useState(ROLE_FILTERS[0].id);
  const activeRole = ROLE_FILTERS.find((r) => r.id === selectedRoleId) ?? ROLE_FILTERS[0];
  const matchedProjects = AI_PROJECTS.filter((p) => activeRole.slugs.includes(p.slug));

  return (
    <div className="min-h-screen bg-[#FFF7EC] pb-16 pt-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Recruiter Action Bar */}
        <div className="studio-card no-print mb-6 flex flex-col justify-between gap-4 rounded-2xl p-6 sm:flex-row sm:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#245B45]/25 bg-[#EBF4EE] px-3 py-1 text-xs font-semibold text-[#245B45]">
              <span className="h-2 w-2 rounded-full bg-[#245B45]" />
              Actively Applying for AI Roles · Class of 2027
            </div>
            <h1 className="mt-2 font-display text-2xl font-extrabold text-[#352219] sm:text-3xl">
              Executive AI Resume &amp; Role Fit
            </h1>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => window.print()}
              className="studio-btn rounded-xl bg-[#C94F16] px-4 py-2.5 text-xs text-white hover:bg-[#A83D10]"
            >
              <Printer className="h-4 w-4" />
              Print / Save PDF
            </button>
            <Link
              to="/contact"
              className="studio-btn rounded-xl border border-[#DEC9B4] bg-white px-4 py-2.5 text-xs text-[#352219] hover:border-[#C94F16]"
            >
              <Mail className="h-4 w-4 text-[#C94F16]" />
              Contact for Interview
            </Link>
          </div>
        </div>

        {/* Role-Fit Filter (Interactive for Hiring Managers) */}
        <section className="studio-card no-print mb-8 rounded-2xl p-6">
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-[#C94F16]" />
            <h2 className="font-display text-lg font-bold text-[#352219]">
              Filter Relevant AI Work by Target Role
            </h2>
          </div>
          <p className="mt-1 text-sm text-[#6C5B50]">
            Select the role your team is hiring for to surface the strongest matching projects.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {ROLE_FILTERS.map((role) => (
              <button
                key={role.id}
                type="button"
                onClick={() => setSelectedRoleId(role.id)}
                className={`studio-btn rounded-lg border px-3.5 py-2 text-xs ${
                  selectedRoleId === role.id
                    ? 'border-[#C94F16] bg-[#C94F16] text-white'
                    : 'border-[#EADBCB] bg-[#FFF7EC] text-[#352219]'
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-[#EADBCB] bg-[#FFF7EC] p-4">
            <p className="text-xs font-medium text-[#6C5B50]">{activeRole.summary}</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {matchedProjects.map((proj) => (
                <div key={proj.slug} className="rounded-xl border border-[#EADBCB] bg-white p-3.5">
                  <div className="font-display text-sm font-bold text-[#352219]">{proj.title}</div>
                  <p className="mt-1 text-xs text-[#6C5B50]">{proj.tagline}</p>
                  <div className="mt-2.5 flex flex-wrap gap-3 font-mono text-[11px] font-semibold">
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
                    <Link
                      to={`/projects/${proj.slug}`}
                      className="inline-flex items-center gap-1 text-[#C94F16] hover:underline"
                    >
                      Case Study <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Printable Executive Resume Sheet */}
        <article className="studio-card rounded-2xl p-8 sm:p-10">
          <header className="border-b border-[#EADBCB] pb-6">
            <h2 className="font-display text-2xl font-extrabold text-[#352219] sm:text-3xl">
              {PROFILE.name}
            </h2>
            <p className="mt-1 font-mono text-xs font-semibold text-[#C94F16]">
              {PROFILE.title} · {PROFILE.academicStatus} · {PROFILE.jobStatus}
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-[#6C5B50]">
              <span>{PROFILE.location}</span>
              <span>{PROFILE.email}</span>
              <span>{PROFILE.phone}</span>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#C94F16] hover:underline">
                <GitHubIcon className="h-3.5 w-3.5" /> github.com/KARTHIKEYASHARMA672
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#C94F16] hover:underline">
                <LinkedInIcon className="h-3.5 w-3.5" /> linkedin.com/in/karthikeya-sharma672
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="mt-6">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#C94F16]">
              Professional Summary
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6C5B50]">
              {PROFILE.bioStory[0]} {PROFILE.bioStory[1]}
            </p>
          </section>

          {/* Target Roles */}
          <section className="mt-6">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#C94F16]">
              Target Roles
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {PROFILE.targetRoles.map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center gap-1.5 rounded-md border border-[#EADBCB] bg-[#FFF7EC] px-2.5 py-1 text-xs font-semibold text-[#352219]"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#245B45]" />
                  {role}
                </span>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mt-6">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#C94F16]">
              Technical AI &amp; Engineering Skills
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {SKILL_BRANCHES.map((branch) => (
                <div key={branch.id} className="rounded-xl border border-[#EADBCB] bg-[#FFF7EC] p-3.5">
                  <div className="font-display text-sm font-bold text-[#352219]">{branch.title}</div>
                  <p className="mt-1 text-xs text-[#6C5B50]">{branch.tools.join(' · ')}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Experience */}
          <section className="mt-6">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#C94F16]">
              AI Engineering Experience &amp; Projects
            </h3>
            <div className="mt-3 space-y-4">
              {EXPERIENCE_QUESTS.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-display text-base font-bold text-[#352219]">{exp.role}</h4>
                    <span className="font-mono text-xs text-[#6C5B50]">{exp.period}</span>
                  </div>
                  <p className="text-xs font-semibold text-[#A83D10]">{exp.context}</p>
                  <ul className="mt-1.5 list-disc space-y-1 pl-5 text-xs leading-relaxed text-[#6C5B50]">
                    {exp.achievements.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mt-6 border-t border-[#EADBCB] pt-6">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#C94F16]">
              Education &amp; Credentials
            </h3>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div>
                {EDUCATION.map((edu) => (
                  <div key={edu.degree} className="mb-3">
                    <div className="font-display text-sm font-bold text-[#352219]">{edu.degree}</div>
                    <div className="text-xs text-[#6C5B50]">
                      {edu.institution} · {edu.period} · <strong>{edu.grade}</strong>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <ul className="space-y-1.5 text-xs text-[#6C5B50]">
                  {CREDENTIALS.map((cred) => (
                    <li key={cred.title}>
                      <strong className="text-[#352219]">{cred.title}</strong> — {cred.issuer} ({cred.date})
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
