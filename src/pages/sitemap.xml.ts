import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { services } from '../data/site';

const routes: Array<{ path: string; changefreq: string; priority: number }> = [
  { path: '/', changefreq: 'monthly', priority: 1.0 },
  { path: '/services', changefreq: 'monthly', priority: 0.9 },
  ...services.map((s) => ({
    path: `/services/${s.slug}`,
    changefreq: 'monthly',
    priority: s.slug === 'sliptest' ? 0.9 : 0.8,
  })),
  { path: '/sectors', changefreq: 'monthly', priority: 0.7 },
  { path: '/gallery', changefreq: 'monthly', priority: 0.7 },
  { path: '/about', changefreq: 'yearly', priority: 0.5 },
  { path: '/contact', changefreq: 'yearly', priority: 0.6 },
  // /privacy and /cookies intentionally excluded — noindex DRAFT pages
];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map(
      (r) => `  <url>
    <loc>${site.url}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
