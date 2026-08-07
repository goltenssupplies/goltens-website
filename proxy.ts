import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // apple-icon is excluded explicitly: Next.js serves the dynamically
  // generated icon (app/apple-icon.tsx) at the extension-less path
  // /apple-icon, so it doesn't match the "contains a dot" exclusion below
  // and would otherwise get wrongly redirected into a locale prefix.
  matcher: ["/((?!api|trpc|_next|_vercel|apple-icon|.*\\..*).*)"],
};
