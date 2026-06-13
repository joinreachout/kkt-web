// Content collections.
// Astro 5 content layer API. Each collection here is a folder under
// src/content/ with one MD/MDX file per entry. Files starting with `_`
// (e.g. _TEMPLATE.md) are ignored by the loader — useful for keeping
// schema docs alongside real entries.

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const team = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    photo: z.string().optional(), // path under /public, e.g. "/team/dennis.jpg"
    order: z.number().default(99),
    active: z.boolean().default(true),
    links: z
      .object({
        email: z.string().optional(),
        linkedin: z.string().url().optional(),
      })
      .optional(),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    author: z.string(),
    // YYYY-MM-DD. Accept either a quoted string or a YAML date (some CMS
    // editors write the date unquoted, which the YAML parser turns into a
    // Date) and normalise to a plain YYYY-MM-DD string so templates and the
    // RSS feed keep working unchanged.
    publishedAt: z
      .union([z.string(), z.date()])
      .transform((v) => (typeof v === 'string' ? v : v.toISOString().slice(0, 10))),
    draft: z.boolean().default(false),
  }),
});

export const collections = { team, insights };
