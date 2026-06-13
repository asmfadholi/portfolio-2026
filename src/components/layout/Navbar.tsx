"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations, useLocale } from "@/i18n/context";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { Avatar } from "@/components/ui/Avatar";
import { personal } from "@/lib/data";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/projects`, label: t("projects") },
    { href: `/${locale}/writing`, label: t("writing") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  function switchLocale(next: string) {
    document.cookie = `locale=${next};path=/;max-age=31536000`;
    const path = pathname.slice(`/${locale}`.length) || "/";
    router.push(`/${next}${path === "/" ? "" : path}`);
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "var(--bg)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
            <Avatar size={28} border />
            <span className="font-bold text-sm tracking-tight" style={{ color: "var(--text-primary)" }}>
              {personal.name.split(" ")[0].toLowerCase()}
              <span style={{ color: "var(--accent)" }}>.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== `/${locale}` && pathname.startsWith(link.href));
              return (
                <Link key={link.href} href={link.href}
                  className="text-sm font-medium transition-colors hover:text-[var(--accent)]"
                  style={{ color: active ? "var(--accent)" : "var(--text-secondary)" }}>
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <select
              value={locale}
              onChange={(e) => switchLocale(e.target.value)}
              className="text-xs font-semibold px-2 py-1 rounded-md border cursor-pointer appearance-none bg-transparent transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
              style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
              aria-label="Switch language"
            >
              <option value="en">EN</option>
              <option value="ja">JA</option>
              <option value="id">ID</option>
            </select>

            <ThemeSwitcher />

            {/* Mobile menu button */}
            <button className="md:hidden p-1.5 rounded-md transition-colors hover:bg-[var(--bg-tertiary)]"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ backgroundColor: "var(--bg)", paddingTop: "56px" }}
          >
            <div className="flex flex-col gap-1 p-6">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href}
                    className="text-lg font-medium py-3 border-b transition-colors hover:text-[var(--accent)]"
                    style={{ color: active ? "var(--accent)" : "var(--text-primary)", borderColor: "var(--border)" }}>
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
