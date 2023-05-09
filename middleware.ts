import createIntlMiddleware from "next-intl/middleware";

export default createIntlMiddleware({
    // A list of all locales that are supported
    locales: ["en"],
    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale: "en",
});

export const config = {
    // Skip all paths that should not be internationalized
    matcher: ["/((?!api|assets|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
