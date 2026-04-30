import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const collections = {
  projects: defineCollection({
    loader: glob({
      pattern: "**/*.mdx",
      base: "./src/content/projects",
    }),
    schema: z.object({
      title: z.string(),
      author: z.string(),
      description: z.string(),
    }),
  }),
};
