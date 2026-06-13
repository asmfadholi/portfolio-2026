interface TagProps {
  label: string;
  small?: boolean;
}

export function Tag({ label, small }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md font-medium transition-colors ${
        small ? "text-xs px-2 py-0.5" : "text-xs px-2.5 py-1"
      }`}
      style={{
        backgroundColor: "var(--accent-muted)",
        color: "var(--accent)",
      }}
    >
      {label}
    </span>
  );
}
