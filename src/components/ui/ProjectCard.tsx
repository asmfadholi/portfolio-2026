"use client";

import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { Tag } from "./Tag";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  title: string;
  description: string;
}

export function ProjectCard({ project, title, description }: ProjectCardProps) {
  return (
    <article
      className="group relative flex flex-col gap-4 rounded-xl p-6 border transition-all duration-300 hover:-translate-y-0.5"
      style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border)" }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-base leading-snug group-hover:text-[var(--accent)] transition-colors"
            style={{ color: "var(--text-primary)" }}>
            {title}
          </h3>
          <span className="text-xs mt-0.5 block" style={{ color: "var(--text-muted)" }}>
            {project.year}
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="p-1.5 rounded-md transition-colors hover:bg-[var(--bg-tertiary)]"
              style={{ color: "var(--text-muted)" }}>
              <GithubIcon size={15} />
            </a>
          )}
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label="Live site"
              className="p-1.5 rounded-md transition-colors hover:bg-[var(--bg-tertiary)]"
              style={{ color: "var(--text-muted)" }}>
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((tag) => <Tag key={tag} label={tag} small />)}
      </div>
    </article>
  );
}
