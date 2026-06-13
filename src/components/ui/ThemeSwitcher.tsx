"use client";

import { useTheme } from "@/providers/ThemeProvider";
import { themes } from "@/lib/themes";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, dark, setTheme, toggleDark } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {/* Color swatches */}
      <div className="flex items-center gap-1.5">
        {themes.map((t) => (
          <button
            key={t.name}
            onClick={() => setTheme(t.name)}
            title={t.label}
            className="w-4 h-4 rounded-full transition-transform hover:scale-125 focus-visible:ring-2 ring-offset-1"
            style={{
              backgroundColor: dark ? t.darkColor : t.color,
              outline: theme === t.name ? `2px solid ${dark ? t.darkColor : t.color}` : "none",
              outlineOffset: "2px",
            }}
            aria-label={`Switch to ${t.label} theme`}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="w-px h-4" style={{ backgroundColor: "var(--border-strong)" }} />

      {/* Dark mode toggle */}
      <button
        onClick={toggleDark}
        aria-label="Toggle dark mode"
        className="p-1.5 rounded-md transition-colors hover:bg-[var(--bg-tertiary)]"
        style={{ color: "var(--text-secondary)" }}
      >
        {dark ? <Sun size={15} /> : <Moon size={15} />}
      </button>
    </div>
  );
}
