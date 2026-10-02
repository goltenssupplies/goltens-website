import fs from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";

/**
 * A tiny, dependency-free Node ESM loader hook that resolves this
 * project's `@/*` -> `./*` tsconfig path alias (`tsconfig.json`'s
 * `compilerOptions.paths`), so a standalone script run with plain
 * `node --experimental-strip-types` can `import()` real project `.ts`
 * modules (e.g. `data/products/index.ts`, which itself imports ~46
 * sibling files via `@/data/products/...`) without adding `tsx`/`ts-node`
 * as a dependency. Node's built-in TypeScript support strips types only —
 * it does nothing with tsconfig `paths`, which is what this hook covers.
 *
 * Used only by `scripts/verify-product-matcher.mjs` (see that file for
 * how it's registered). Not part of the application build or runtime —
 * Next.js resolves `@/*` itself for every other file in this repo.
 */
export async function resolve(specifier, context, next) {
  if (!specifier.startsWith("@/")) {
    return next(specifier, context);
  }

  const projectRoot = pathToFileURL(`${process.cwd()}/`).href;
  const withoutExtension = new URL(specifier.slice(2), projectRoot).href;

  for (const candidate of [
    withoutExtension,
    `${withoutExtension}.ts`,
    `${withoutExtension}.tsx`,
    `${withoutExtension}/index.ts`,
  ]) {
    const candidatePath = fileURLToPath(candidate);
    if (fs.existsSync(candidatePath) && fs.statSync(candidatePath).isFile()) {
      return next(candidate, context);
    }
  }

  // No match on disk — hand the original (unresolved) alias to the next
  // hook so the real error surfaces normally, instead of masking it.
  return next(withoutExtension, context);
}
