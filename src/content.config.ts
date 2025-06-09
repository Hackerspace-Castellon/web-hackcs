import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const schema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  categories: z.union([
    z.string(),
    z.array(z.string())
  ]).transform(val => 
    Array.isArray(val) ? val : [val]
  ),
});

const agendaES = defineCollection({
  loader: glob({ base: "./src/content/es/agenda", pattern: "**/*.{md,mdx}" }),
  schema,
});

const agendaEN = defineCollection({
  loader: glob({ base: "./src/content/en/agenda", pattern: "**/*.{md,mdx}" }),
  schema,
});

const agendaVA = defineCollection({
  loader: glob({ base: "./src/content/ca/agenda", pattern: "**/*.{md,mdx}" }),
  schema,
});

const recursosES = defineCollection({
  loader: glob({ base: "./src/content/es/recursos", pattern: "**/*.{md,mdx}" }),
  schema,
});

const recursosEN = defineCollection({
  loader: glob({ base: "./src/content/en/recursos", pattern: "**/*.{md,mdx}" }),
  schema,
});

const recursosVA = defineCollection({
  loader: glob({ base: "./src/content/ca/recursos", pattern: "**/*.{md,mdx}" }),
  schema,
});

export const collections = { agendaES, agendaEN, agendaVA, recursosES, recursosEN, recursosVA };