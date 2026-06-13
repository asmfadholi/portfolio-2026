import Link from "next/link";
import { Tag } from "./Tag";
import type { Post } from "@/lib/data";

interface PostCardProps {
  post: Post;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/writing/${post.slug}`}
      className="group block rounded-xl p-6 border transition-all duration-300 hover:-translate-y-0.5"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="flex items-center justify-between gap-4 mb-3">
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
          {formatDate(post.date)}
        </span>
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
          {post.readTime} min read
        </span>
      </div>

      <h3
        className="font-semibold text-base leading-snug mb-2 group-hover:text-[var(--accent)] transition-colors"
        style={{ color: "var(--text-primary)" }}
      >
        {post.title}
      </h3>

      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
        {post.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} small />
        ))}
      </div>
    </Link>
  );
}
