import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ja", "id"];
const defaultLocale = "en";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!hasLocale) {
    const cookieLocale = request.cookies.get("locale")?.value;
    const locale =
      cookieLocale && locales.includes(cookieLocale)
        ? cookieLocale
        : defaultLocale;
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
};
