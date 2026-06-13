export type ThemeName = "ocean" | "forest" | "sunset" | "lavender" | "rose";

export interface Theme {
  name: ThemeName;
  label: string;
  color: string;
  darkColor: string;
}

export const themes: Theme[] = [
  { name: "ocean",    label: "Ocean",    color: "#2563eb", darkColor: "#60a5fa" },
  { name: "forest",   label: "Forest",   color: "#16a34a", darkColor: "#4ade80" },
  { name: "sunset",   label: "Sunset",   color: "#ea580c", darkColor: "#fb923c" },
  { name: "lavender", label: "Lavender", color: "#7c3aed", darkColor: "#c084fc" },
  { name: "rose",     label: "Rose",     color: "#e11d48", darkColor: "#fb7185" },
];

export const DEFAULT_THEME: ThemeName = "ocean";
