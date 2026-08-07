import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintConfigPrettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // eslint-config-next already registers the jsx-a11y plugin instance (with
  // a handful of rules enabled) — re-declaring the plugin here would throw
  // "Cannot redefine plugin". Layer in the fuller recommended rule set
  // against that same registration instead of re-registering the plugin.
  { rules: jsxA11y.flatConfigs.recommended.rules },
  // Must be last — disables stylistic rules that would conflict with Prettier.
  eslintConfigPrettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
