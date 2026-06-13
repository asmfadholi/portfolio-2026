"use client";

import { useTranslations } from "next-intl";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Construction } from "lucide-react";

export function RecentPosts() {
  const t = useTranslations("writing");

  return (
    <section className="py-20 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-3xl mx-auto px-6">
        <AnimateIn delay={0}>
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>
              {t("label")}
            </p>
            <h2 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
              {t("title")}
            </h2>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div
            className="flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed py-16 text-center"
            style={{ borderColor: "var(--border-strong)", backgroundColor: "var(--bg-secondary)" }}
          >
            <Construction size={32} style={{ color: "var(--text-muted)" }} />
            <div>
              <p className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>
                {t("under_construction")}
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                {t("coming_soon")}
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
