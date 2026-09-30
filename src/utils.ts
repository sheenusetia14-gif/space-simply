import type { CollectionEntry } from 'astro:content';

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export function sortPosts(posts: CollectionEntry<'blog'>[]) {
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Rough reading time at ~200 words per minute (never less than 1). */
export function readingTime(text = '') {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** Social networks don't show SVGs, so fall back to the default PNG share image. */
export function shareImage(heroImage: string) {
  return /\.(png|jpe?g|webp)$/i.test(heroImage) ? heroImage : '/images/og-default.png';
}
