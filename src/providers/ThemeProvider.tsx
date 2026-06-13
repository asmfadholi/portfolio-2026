"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { type ThemeName, DEFAULT_THEME } from "@/lib/themes";

interface ThemeContextValue {
  theme: ThemeName;
  dark: boolean;
  setTheme: (t: ThemeName) => void;
  toggleDark: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: DEFAULT_THEME,
  dark: false,
  setTheme: () => {},
  toggleDark: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(DEFAULT_THEME);
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as ThemeName) || DEFAULT_THEME;
    const prefersDark =
      localStorage.getItem("dark") === "true" ||
      (!localStorage.getItem("dark") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setThemeState(savedTheme);
    setDark(prefersDark);
    applyToDOM(savedTheme, prefersDark);
    setMounted(true);
  }, []);

  function applyToDOM(t: ThemeName, d: boolean) {
    document.documentElement.setAttribute("data-theme", t);
    document.documentElement.setAttribute("data-dark", String(d));
  }

  function setTheme(t: ThemeName) {
    setThemeState(t);
    localStorage.setItem("theme", t);
    applyToDOM(t, dark);
  }

  function toggleDark() {
    const next = !dark;
    setDark(next);
    localStorage.setItem("dark", String(next));
    applyToDOM(theme, next);
  }

  if (!mounted) {
    return (
      <div style={{ visibility: "hidden" }} aria-hidden>
        {children}
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, dark, setTheme, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
