import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, Cpu } from 'lucide-react';
import { GitHubIcon } from '../components/BrandIcons';
import { AI_PROJECTS, WORLD_ZONES } from '../data/projects';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const index = AI_PROJECTS.findIndex((p) => p.slug === slug);
  const project = index >= 0 ? AI_PROJECTS[index] : null;

  if (!project) {
    return (
      <div className="paper-grid-bg min-h-[70vh] px-4 py-20 text-center">
        <div className="game-card mx-auto max-w-lg rounded-2xl p-8">
          <h1 className="font-display text-2xl font-extrabold text-[#352219]">
            Mission Dossier Not Found
          </h1>
          <p className="mt-2 text-sm text-[#6C5B50]">
            That project slug does not exist in the AI Armory.
          </p>
          <Link
            to="/projects"
            className="game-btn mt-5 rounded-xl bg-[#B5430F] px-4 py-2 text-sm text-white"
          >
            Back to All AI Projects
          </Link>
        </div>
      </div>
    );
  }

  const zone = WORLD_ZONES.find((z) => z.id === project.zoneId);
  const prevProject = index > 0 ? AI_PROJECTS[index - 1] : AI_PROJECTS[AI_PROJECTS.length - 1];
  const nextProject = index < AI_PROJECTS.length - 1 ? AI_PROJECTS[index + 1] : AI_PROJECTS[0];

  return (
    <div className="paper-grid-bg min-h-screen pb-16 pt-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-[#352219] hover:text-[#C94F16]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to AI Project Armory
        </Link>

        <article className="game-card mt-4 rounded-2xl bg-white p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="rounded-lg border border-[#352219] px-3 py-1 font-mono text-xs font-bold uppercase text-white"
              style={{ backgroundColor: project.accentHex }}
            >
              {project.category}
            </span>
            {zone && (
              <span className="rounded-lg border border-[#EADBCB] bg-[#FFF7EC] px-3 py-1 font-mono text-xs font-bold text-[#352219]">
                {zone.number}: {zone.name}
              </span>
            )}
            <span className="ml-auto font-mono text-xs font-bold text-[#6C5B50]">
              {project.hostingLabel} · {project.year}
            </span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-extrabold text-[#352219] sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-2 text-base font-bold text-[#A83D10]">{project.tagline}</p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="game-btn rounded-xl bg-[#B5430F] px-5 py-2.5 text-sm text-white"
              >
                Open Live Hosted App
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-xl border-2 border-[#673B70]/40 bg-[#F5EDF6] px-4 py-2.5 font-mono text-xs font-bold text-[#673B70]">
                Local / Self-Hosted Runtime — Full Architecture Below
              </span>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="game-btn rounded-xl bg-[#F9EBDC] px-5 py-2.5 text-sm text-[#352219]"
              >
                <GitHubIcon className="h-4 w-4" />
                View GitHub Source
              </a>
            )}
          </div>

          {/* Overview & Architecture */}
          <div className="mt-8 grid gap-6 border-t border-[#EADBCB] pt-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-extrabold text-[#352219]">
                Project Overview
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#6C5B50] sm:text-base">
                {project.description}
              </p>
            </div>
            <div className="rounded-2xl border-2 border-[#352219] bg-[#FFF7EC] p-5">
              <div className="flex items-center gap-2 font-display text-lg font-extrabold text-[#352219]">
                <Cpu className="h-5 w-5 text-[#C94F16]" />
                System Architecture
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-[#6C5B50]">
                {project.architectureSummary}
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="mt-8">
            <h2 className="font-display text-xl font-extrabold text-[#352219]">
              Verified Highlights &amp; Impact
            </h2>
            <ul className="mt-4 space-y-2.5">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-[#EADBCB] bg-[#FDF2E4] p-3 text-sm font-medium text-[#352219]"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#245B45]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mt-8">
            <h2 className="font-display text-xl font-extrabold text-[#352219]">
              AI &amp; Engineering Stack
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border-2 border-[#352219] bg-[#FFF7EC] px-3 py-1 font-mono text-xs font-bold text-[#352219]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Prev / Next Navigation */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link
            to={`/projects/${prevProject.slug}`}
            className="game-card game-card-interactive flex items-center gap-3 rounded-2xl p-4 no-underline"
          >
            <ArrowLeft className="h-5 w-5 shrink-0 text-[#C94F16]" />
            <div>
              <div className="font-mono text-[10px] font-bold uppercase text-[#6C5B50]">
                Previous Mission
              </div>
              <div className="font-display text-sm font-extrabold text-[#352219]">
                {prevProject.title}
              </div>
            </div>
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="game-card game-card-interactive flex items-center justify-end gap-3 rounded-2xl p-4 text-right no-underline"
          >
            <div>
              <div className="font-mono text-[10px] font-bold uppercase text-[#6C5B50]">
                Next Mission
              </div>
              <div className="font-display text-sm font-extrabold text-[#352219]">
                {nextProject.title}
              </div>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-[#C94F16]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
