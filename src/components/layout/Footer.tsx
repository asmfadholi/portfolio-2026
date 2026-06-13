"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/lib/data";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t py-12"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <Link href={`/${locale}`}
              className="font-bold text-sm tracking-tight hover:text-[var(--accent)] transition-colors"
              style={{ color: "var(--text-primary)" }}>
              {personal.name.split(" ")[0].toLowerCase()}
              <span style={{ color: "var(--accent)" }}>.</span>
            </Link>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
              {t("role")} · {personal.location}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {[
              { href: personal.github, icon: <GithubIcon size={16} />, label: "GitHub" },
              { href: personal.twitter, icon: <TwitterIcon size={16} />, label: "Twitter" },
              { href: personal.linkedin, icon: <LinkedinIcon size={16} />, label: "LinkedIn" },
              { href: `mailto:${personal.email}`, icon: <Mail size={16} />, label: "Email" },
            ].filter(({ href }) => href).map(({ href, icon, label }) => (
              <a key={label} href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer" aria-label={label}
                className="p-2 rounded-md transition-colors hover:bg-[var(--bg-tertiary)] hover:text-[var(--accent)]"
                style={{ color: "var(--text-muted)" }}>
                {icon}
              </a>
            ))}
          </div>
        </div>
        <p className="text-xs mt-8" style={{ color: "var(--text-muted)" }}>
          © {year} {personal.name}. {t("built_with")}
        </p>
      </div>
    </footer>
  );
}
