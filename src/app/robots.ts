import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/forgot-password',
          '/profil',
          '/notes/create-note',
        ],
      },
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    sitemap: 'https://recapeps.fr/sitemap.xml',
  }
}