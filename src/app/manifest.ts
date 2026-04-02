import type { MetadataRoute } from 'next'

import { siteConfig, siteUrl } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteConfig.name,
        short_name: siteConfig.shortName,
        description: siteConfig.description,
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        lang: 'pt-BR',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/logo.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
            {
                src: '/logo.png',
                sizes: '161x51',
                type: 'image/png',
            },
        ],
        categories: ['business', 'finance'],
        id: siteUrl,
    }
}
