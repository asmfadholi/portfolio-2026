"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function FeaturedProjects() {
  const t = useTranslations("projects");
  const tc = useTranslations("common");
  const locale = useLocale();
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <AnimateIn delay={0}>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>
                {t("label")}
              </p>
              <h2 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                {t("title")}
              </h2>
            </div>
            <Link href={`/${locale}/projects`}
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--text-secondary)" }}>
              {tc("all_projects")} <ArrowRight size={14} />
            </Link>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((project, i) => (
            <AnimateIn key={project.slug} delay={i * 0.08}>
              <ProjectCard
                project={project}
                title={t(`items.${project.slug}.title`)}
                description={t(`items.${project.slug}.description`)}
              />
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.2} className="mt-8 sm:hidden">
          <Link href={`/${locale}/projects`}
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--text-secondary)" }}>
            {tc("all_projects")} <ArrowRight size={14} />
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
