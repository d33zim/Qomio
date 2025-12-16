import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Qomio - Digitale Lösungen',
        short_name: 'Qomio',
        description: 'Webseiten, Apps & Automation aus Dürmentingen',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#00f2ea',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
