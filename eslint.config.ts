import { core, nodejs } from "@phanect/lint";
import { astro } from "@phanect/lint-astro";
import type { Linter } from "eslint";

const configs: Linter.Config[] = [
  {
    ignores: [
      "**/*.d.ts", // generated TypeScript declaration files
    ],
  },

  ...core,
  ...nodejs,
  ...astro,

  {
    // Do not add `files: [ "*" ],` here.

    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];

export default configs;
