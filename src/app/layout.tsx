import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { defaultOgImage, googleAnalyticsId, googleSiteVerification, siteConfig, siteUrl } from '@/lib/site'
import './globals.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    applicationName: siteConfig.name,
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [...siteConfig.keywords],
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: siteConfig.locale,
        url: siteUrl,
        siteName: siteConfig.name,
        title: siteConfig.name,
        description: siteConfig.description,
        images: [
            {
                url: defaultOgImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        images: [defaultOgImage],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
    category: 'business',
    verification: {
        google: googleSiteVerification,
    },
    manifest: '/manifest.webmanifest',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const localBusinessJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AccountingService',
        name: siteConfig.name,
        image: defaultOgImage,
        url: siteUrl,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
            '@type': 'PostalAddress',
            ...siteConfig.address,
        },
        areaServed: 'Porto Velho, RO',
    }

    return (
        <html lang="pt-BR">
            <body
                className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden overflow-y-auto bg-white text-blue-900 antialiased`}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
                />
                {googleAnalyticsId ? (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
                            strategy="afterInteractive"
                        />
                        <Script id="google-analytics" strategy="afterInteractive">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${googleAnalyticsId}');
                            `}
                        </Script>
                    </>
                ) : null}
                <Header />
                <div className="flex min-h-screen w-full flex-col justify-center pt-11 md:pt-16">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}
