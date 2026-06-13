interface AvatarProps {
  size?: number;
  fill?: string;
  ring?: boolean;
  border?: boolean;
  className?: string;
}

export function Avatar({ size = 72, fill = "var(--accent)", ring = false, border = false, className }: AvatarProps) {
  const imgR = ring ? 450 : 512;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      className={className}
      style={{
        flexShrink: 0,
        ...(border && {
          border: "2px solid var(--accent)",
          borderRadius: "50%",
        }),
      }}
      aria-hidden
    >
      <defs>
        <linearGradient id="theme-ring-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="var(--ring-a)" />
          <stop offset="50%"  stopColor="var(--ring-b)" />
          <stop offset="100%" stopColor="var(--ring-c)" />
        </linearGradient>
      </defs>

      {ring && (
        <>
          <circle
            cx="512" cy="512" r="496"
            fill="none"
            stroke="url(#theme-ring-grad)"
            strokeWidth="56"
          />
          <circle cx="512" cy="512" r="462" fill="var(--bg)" />
        </>
      )}

      <circle cx="512" cy="512" r={imgR} fill={fill} />
      <image
        href="/avatar.png"
        x={512 - imgR}
        y={512 - imgR}
        width={imgR * 2}
        height={imgR * 2}
        style={{ clipPath: `circle(${imgR}px at ${imgR}px ${imgR}px)` }}
      />
    </svg>
  );
}
