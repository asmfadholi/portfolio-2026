import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getTranslations } from "@/i18n/server";
import { posts } from "@/lib/data";
import { Tag } from "@/components/ui/Tag";
import { AnimateIn } from "@/components/ui/AnimateIn";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const locales = ["en", "ja"];
  return locales.flatMap((locale) =>
    posts.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title };
}

function formatDate(dateStr: string, locale: string) {
  return new Date(dateStr).toLocaleDateString(locale === "ja" ? "ja-JP" : "en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

export default async function PostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const t = getTranslations(locale, "writing");

  return (
    <div className="pt-24 pb-20 max-w-2xl mx-auto px-6">
      <AnimateIn delay={0}>
        <Link href={`/${locale}/writing`}
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors hover:text-[var(--accent)]"
          style={{ color: "var(--text-muted)" }}>
          <ArrowLeft size={14} />{t("back")}
        </Link>
      </AnimateIn>
      <AnimateIn delay={0.05}>
        <article>
          <header className="mb-12">
            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.map((tag) => <Tag key={tag} label={tag} />)}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
              {post.title}
            </h1>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {post.description}
            </p>
            <div className="flex items-center gap-4 pb-6 border-b" style={{ borderColor: "var(--border)" }}>
              <span className="flex items-center gap-1.5 text-sm" style={{ color: "var(--text-muted)" }}>
                <Calendar size={13} />{formatDate(post.date, locale)}
              </span>
              <span className="flex items-center gap-1.5 text-sm" style={{ color: "var(--text-muted)" }}>
                <Clock size={13} />{post.readTime} {t("min_read")}
              </span>
            </div>
          </header>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <p>This is where the full article content would go. In a real implementation, you&apos;d fetch the content from a CMS or read from MDX files.</p>
            <p>The article covers <strong style={{ color: "var(--text-primary)" }}>{post.title}</strong> in depth, walking through real-world examples and practical patterns you can apply to your own projects.</p>
          </div>
        </article>
      </AnimateIn>
    </div>
  );
}
