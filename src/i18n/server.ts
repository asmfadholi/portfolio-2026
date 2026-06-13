import en from "../../messages/en.json";
import ja from "../../messages/ja.json";
import id from "../../messages/id.json";

export const locales = ["en", "ja", "id"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const allMessages = { en, ja, id } as const;

type RawMessages = typeof en;

function resolvePath(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce((acc: unknown, key) => {
    if (acc != null && typeof acc === "object") {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function getMessages(locale: string): RawMessages {
  return (allMessages as Record<string, RawMessages>)[locale] ?? allMessages.en;
}

export function getTranslations(locale: string, namespace: keyof RawMessages) {
  const messages = getMessages(locale);
  const ns = messages[namespace] as Record<string, unknown>;

  function t(key: string): string {
    const val = resolvePath(ns, key);
    return typeof val === "string" ? val : String(val ?? key);
  }

  t.raw = (key: string): unknown => ns?.[key];

  return t;
}
