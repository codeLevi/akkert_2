import { NextRequest, NextResponse } from "next/server";
import { supportedLangs } from "./src/i18n";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/ro";
    return NextResponse.redirect(url);
  }

  const segments = pathname.split("/");
  const maybeLang = segments[1];

  if (!supportedLangs.includes(maybeLang as never)) {
    const url = request.nextUrl.clone();
    url.pathname = `/ro${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
