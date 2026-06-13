import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale, "projects");
  return { title: t("title") };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  const t = getTranslations(locale, "projects");
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="pt-24 pb-20 max-w-3xl mx-auto px-6">
      <AnimateIn delay={0}>
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            {t("label")}
          </p>
          <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            {t("title")}
          </h1>
          <p className="text-base leading-relaxed max-w-xl" style={{ color: "var(--text-secondary)" }}>
            {t("description")}
          </p>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.05}>
        <h2 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: "var(--text-muted)" }}>
          {t("featured")}
        </h2>
      </AnimateIn>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
        {featured.map((project, i) => (
          <AnimateIn key={project.slug} delay={i * 0.07}>
            <ProjectCard
              project={project}
              title={t(`items.${project.slug}.title`)}
              description={t(`items.${project.slug}.description`)}
            />
          </AnimateIn>
        ))}
      </div>

      {rest.length > 0 && (
        <>
          <AnimateIn delay={0.1}>
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: "var(--text-muted)" }}>
              {t("other")}
            </h2>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((project, i) => (
              <AnimateIn key={project.slug} delay={i * 0.07}>
                <ProjectCard
                  project={project}
                  title={t(`items.${project.slug}.title`)}
                  description={t(`items.${project.slug}.description`)}
                />
              </AnimateIn>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
