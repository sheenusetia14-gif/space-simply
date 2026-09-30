import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  // Every .md file in src/content/blog/ becomes a post.
  // The file name becomes the URL: what-is-a-black-hole.md -> /blog/what-is-a-black-hole
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    pubDate: z.coerce.date(),
    // Optional: set this when you edit a post. Falls back to pubDate.
    updatedDate: z.coerce.date().optional(),
    topic: z.string(),
    heroImage: z.string().startsWith('/images/blog/'),
    heroAlt: z.string(),
    // Each source can be a plain link, or a title + link.
    sources: z
      .array(z.union([z.url(), z.object({ title: z.string(), url: z.url() })]))
      .min(1),
  }),
});

export const collections = { blog };
