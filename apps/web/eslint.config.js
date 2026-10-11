import { viteJsConfig } from "@repo/eslint-config/vite";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...viteJsConfig,
  { ignores: ["**/*.gen.ts"] },
  {
    files: ["src/routes/**/*.{ts,tsx}"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
];
