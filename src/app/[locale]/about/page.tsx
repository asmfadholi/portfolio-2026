import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Avatar } from "@/components/ui/Avatar";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { personal, skills } from "@/lib/data";
import { MapPin, Mail } from "lucide-react";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { Tag } from "@/components/ui/Tag";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about");
  return { title: t("label") };
}

export default async function AboutPage() {
  const t = await getTranslations("about");
  const timeline = t.raw("timeline") as Array<{
    year: string; role: string; company: string; description: string;
  }>;

  return (
    <div className="pt-24 pb-20 max-w-3xl mx-auto px-6">
      <AnimateIn delay={0}>
        <div className="mb-16">
          <div className="mb-6">
            <Avatar size={110} ring border />
          </div>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            {t("label")}
          </p>
          <h1 className="text-4xl font-bold mb-6 leading-tight" style={{ color: "var(--text-primary)" }}>
            {t("title")}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="flex items-center gap-1.5 text-sm" style={{ color: "var(--text-secondary)" }}>
              <MapPin size={14} style={{ color: "var(--accent)" }} />
              {personal.location}
            </span>
            <a href={`mailto:${personal.email}`}
              className="flex items-center gap-1.5 text-sm transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--text-secondary)" }}>
              <Mail size={14} style={{ color: "var(--accent)" }} />
              {personal.email}
            </a>
          </div>
          <div className="space-y-4 mb-8">
            {["bio1", "bio2", "bio3"].map((key) => (
              <p key={key} className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {t(key as "bio1")}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {[
              { href: personal.github, icon: <GithubIcon size={16} />, label: "GitHub" },
              { href: personal.twitter, icon: <TwitterIcon size={16} />, label: "Twitter" },
              { href: personal.linkedin, icon: <LinkedinIcon size={16} />, label: "LinkedIn" },
            ].filter(({ href }) => href).map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm border transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>
                {icon}{label}
              </a>
            ))}
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <div className="mb-16">
          <h2 className="text-lg font-semibold mb-6" style={{ color: "var(--text-primary)" }}>
            {t("skills_title")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => <Tag key={skill} label={skill} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.15}>
        <div>
          <h2 className="text-lg font-semibold mb-6" style={{ color: "var(--text-primary)" }}>
            {t("experience_title")}
          </h2>
          <div className="relative">
            <div className="absolute left-0 top-2 bottom-2 w-px" style={{ backgroundColor: "var(--border)" }} />
            <div className="space-y-8 pl-8">
              {timeline.map((entry, i) => (
                <AnimateIn key={i} delay={i * 0.07}>
                  <div className="relative">
                    <div className="absolute top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[var(--bg)]"
                      style={{ backgroundColor: "var(--accent)", left: "-2rem" }} />
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
                      <h3 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{entry.role}</h3>
                      <span className="text-sm" style={{ color: "var(--accent)" }}>@ {entry.company}</span>
                    </div>
                    <p className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>{entry.year}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{entry.description}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </AnimateIn>
    </div>
  );
}
