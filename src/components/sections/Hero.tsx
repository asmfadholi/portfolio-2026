"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { useTranslations, useLocale } from "@/i18n/context";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { Avatar } from "@/components/ui/Avatar";
import { personal } from "@/lib/data";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-20 pb-16 relative">
      <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl mx-auto px-6 w-full">

        {/* Avatar + badge */}
        <motion.div variants={item} className="flex items-center gap-4 mb-8">
          <Avatar size={80} ring border />
          <span
            className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border"
            style={{ borderColor: "var(--border)", color: "var(--text-secondary)", backgroundColor: "var(--bg-secondary)" }}
          >
            {t("badge")}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
          <span style={{ color: "var(--text-primary)" }}>{t("greeting")} </span>
          <span style={{ color: "var(--accent)" }}>{personal.name}</span>
          <span style={{ color: "var(--text-primary)" }}>.</span>
        </motion.h1>

        <motion.p variants={item} className="text-xl sm:text-2xl font-medium mb-4" style={{ color: "var(--text-secondary)" }}>
          {t("role")}
        </motion.p>

        <motion.p variants={item} className="text-base sm:text-lg leading-relaxed max-w-xl mb-10" style={{ color: "var(--text-secondary)" }}>
          {t("bio")}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-12">
          <Link href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ backgroundColor: "var(--accent)", color: "var(--accent-fg)" }}>
            {t("cta_work")} <ArrowRight size={16} />
          </Link>
          <Link href={`/${locale}/about`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border transition-all hover:-translate-y-0.5"
            style={{ borderColor: "var(--border-strong)", color: "var(--text-primary)", backgroundColor: "transparent" }}>
            {t("cta_about")}
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center gap-1">
          {[
            { href: personal.github, icon: <GithubIcon size={18} />, label: "GitHub" },
            { href: personal.twitter, icon: <TwitterIcon size={18} />, label: "Twitter" },
            { href: personal.linkedin, icon: <LinkedinIcon size={18} />, label: "LinkedIn" },
            { href: `mailto:${personal.email}`, icon: <Mail size={18} />, label: "Email" },
          ].filter(({ href }) => href).map(({ href, icon, label }) => (
            <a key={label} href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer" aria-label={label}
              className="p-2.5 rounded-lg transition-all hover:bg-[var(--bg-tertiary)] hover:text-[var(--accent)] hover:-translate-y-0.5"
              style={{ color: "var(--text-muted)" }}>
              {icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: "var(--text-muted)" }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-6 rounded-full" style={{ backgroundColor: "var(--border-strong)" }} />
      </motion.div>
    </section>
  );
}
