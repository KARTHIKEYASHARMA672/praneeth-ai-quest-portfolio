import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Globe, Code2 } from 'lucide-react';
import { GitHubIcon } from './BrandIcons';
import type { AIProject } from '../data/projects';

export function ProjectCard({ project }: { project: AIProject }) {
  return (
    <article className="game-card game-card-interactive flex h-full flex-col justify-between rounded-2xl p-5">
      <div>
        {/* Top Metadata Row */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span
            className="inline-flex items-center rounded-lg border border-[#352219] px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wide text-white"
            style={{ backgroundColor: project.accentHex }}
          >
            {project.category}
          </span>

          <div className="flex items-center gap-1.5">
            {project.liveUrl ? (
              <span className="inline-flex items-center gap-1 rounded-lg border border-[#245B45]/30 bg-[#EBF4EE] px-2 py-0.5 font-mono text-[11px] font-bold text-[#245B45]">
                <Globe className="h-3 w-3" />
                HOSTED
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-lg border border-[#673B70]/30 bg-[#F5EDF6] px-2 py-0.5 font-mono text-[11px] font-bold text-[#673B70]">
                <Code2 className="h-3 w-3" />
                SOURCE
              </span>
            )}
            <span className="font-mono text-xs font-bold text-[#6C5B50]">{project.year}</span>
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="mt-3 font-display text-xl font-extrabold leading-snug text-[#352219]">
          <Link to={`/projects/${project.slug}`} className="hover:text-[#C94F16]">
            {project.title}
          </Link>
        </h3>
        <p className="mt-1 text-xs font-bold text-[#A83D10]">{project.tagline}</p>

        {/* Full Description (always shown for both hosted and unhosted projects) */}
        <p className="mt-3 text-sm leading-relaxed text-[#6C5B50]">{project.description}</p>

        {/* Stack Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="game-pill rounded-md px-2 py-0.5 font-mono text-[11px] font-semibold"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className="game-pill rounded-md px-2 py-0.5 font-mono text-[11px] font-semibold">
              +{project.stack.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[#EADBCB] pt-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="game-btn rounded-xl bg-[#B5430F] px-3 py-1.5 text-xs text-white"
          >
            Live Demo
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="game-btn rounded-xl bg-[#F9EBDC] px-3 py-1.5 text-xs text-[#352219]"
          >
            <GitHubIcon className="h-3.5 w-3.5" />
            GitHub
          </a>
        )}
        <Link
          to={`/projects/${project.slug}`}
          className="ml-auto inline-flex items-center gap-1 font-mono text-xs font-bold text-[#352219] hover:text-[#C94F16]"
        >
          Dossier
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
