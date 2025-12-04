import { NextRequest, NextResponse } from "next/server";
const PUBLIC_FILE = /\.(.*)$/;
const supportedLocales = ["id", "en"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const locale = req.cookies.get("locale")?.value;

  if (!locale || !supportedLocales.includes(locale)) {
    const browserLang = req.headers
      .get("accept-language")
      ?.split(",")[0]
      .split("-")[0];
    const newLocale: string = supportedLocales.includes(browserLang ?? "")
      ? browserLang!
      : "en";

    const res = NextResponse.next();
    res.cookies.set("locale", newLocale, {
      path: "/",
    });

    return res;
  }
  return NextResponse.next();
}
