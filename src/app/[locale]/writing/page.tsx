import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Construction } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("writing");
  return { title: t("title") };
}

export default async function WritingPage() {
  const t = await getTranslations("writing");

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

      <AnimateIn delay={0.1}>
        <div
          className="flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed py-24 text-center"
          style={{ borderColor: "var(--border-strong)", backgroundColor: "var(--bg-secondary)" }}
        >
          <Construction size={36} style={{ color: "var(--text-muted)" }} />
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
  );
}
