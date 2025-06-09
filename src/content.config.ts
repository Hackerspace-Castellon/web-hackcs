import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const schema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  categories: z.array(z.string()),
});

const agendaES = defineCollection({
  loader: glob({ base: "./src/content/es", pattern: "**/*.{md,mdx}" }),
  schema,
});

const agendaEN = defineCollection({
  loader: glob({ base: "./src/content/en", pattern: "**/*.{md,mdx}" }),
  schema,
});

const agendaVA = defineCollection({
  loader: glob({ base: "./src/content/ca", pattern: "**/*.{md,mdx}" }),
  schema,
});

const recursosES = defineCollection({
  loader: glob({ base: "./src/content/es", pattern: "**/*.{md,mdx}" }),
  schema,
});

const recursosEN = defineCollection({
  loader: glob({ base: "./src/content/en", pattern: "**/*.{md,mdx}" }),
  schema,
});

const recursosVA = defineCollection({
  loader: glob({ base: "./src/content/ca", pattern: "**/*.{md,mdx}" }),
  schema,
});

export const collections = { agendaES, agendaEN, agendaVA, recursosES, recursosEN, recursosVA };
