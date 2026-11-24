import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Globe, Code2 } from 'lucide-react';
import { GitHubIcon } from './BrandIcons';
import type { AIProject } from '../data/projects';

export function ProjectCard({ project }: { project: AIProject }) {
  return (
    <article className="studio-card studio-card-hover flex h-full flex-col justify-between rounded-2xl p-6">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center rounded-md border border-[#1746A2]/20 bg-[#EEF3FC] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#1746A2]">
            {project.category}
          </span>

          <div className="flex items-center gap-2">
            {project.liveUrl ? (
              <span className="inline-flex items-center gap-1 rounded-md border border-[#0D6E4E]/25 bg-[#E8F5EF] px-2 py-0.5 font-mono text-[11px] font-semibold text-[#0D6E4E]">
                <Globe className="h-3 w-3" />
                Live
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-md border border-[#D2CBB9] bg-[#F2EFE8] px-2 py-0.5 font-mono text-[11px] font-semibold text-[#525D70]">
                <Code2 className="h-3 w-3" />
                Source
              </span>
            )}
            <span className="font-mono text-xs text-[#525D70]">{project.year}</span>
          </div>
        </div>

        <h3 className="mt-3.5 font-display text-lg font-bold leading-snug text-[#102A56]">
          <Link to={`/projects/${project.slug}`} className="hover:text-[#1746A2]">
            {project.title}
          </Link>
        </h3>
        <p className="mt-1 text-xs font-semibold text-[#8A6522]">{project.tagline}</p>

        <p className="mt-3 text-sm leading-relaxed text-[#525D70]">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[#E5E0D5] bg-[#FAF8F4] px-2 py-0.5 font-mono text-[11px] font-medium text-[#102A56]"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className="rounded-md border border-[#E5E0D5] bg-[#FAF8F4] px-2 py-0.5 font-mono text-[11px] font-medium text-[#525D70]">
              +{project.stack.length - 5}
            </span>
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[#E5E0D5] pt-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="studio-btn rounded-lg bg-[#1746A2] px-3 py-1.5 text-xs text-white hover:bg-[#103580]"
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
            className="studio-btn rounded-lg border border-[#D2CBB9] bg-white px-3 py-1.5 text-xs text-[#102A56] hover:border-[#1746A2]"
          >
            <GitHubIcon className="h-3.5 w-3.5" />
            GitHub
          </a>
        )}
        <Link
          to={`/projects/${project.slug}`}
          className="ml-auto inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#1746A2] hover:underline"
        >
          Case Study
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
