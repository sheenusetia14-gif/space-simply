import type { APIRoute } from 'astro';

// Allow every crawler: Google, Bing and AI search/answer bots alike.
const aiAndSearchBots = [
  'Googlebot',
  'Bingbot',
  'Google-Extended',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot',
  'Applebot-Extended',
  'CCBot',
  'DuckDuckBot',
  'meta-externalagent',
];

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('/sitemap-index.xml', site);
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    ...aiAndSearchBots.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
    `Sitemap: ${sitemapURL.href}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
