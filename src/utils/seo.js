export const generateSitemap = () => {
  const baseUrl = 'https://higherd.de';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = [
    { loc: `${baseUrl}/`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${baseUrl}/companies`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${baseUrl}/agencies`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${baseUrl}/candidates`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${baseUrl}/students`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${baseUrl}/about`, priority: '0.6', changefreq: 'monthly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

export const generateRobotsTxt = () => {
  const baseUrl = 'https://higherd.de';
  
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 1`;
};
