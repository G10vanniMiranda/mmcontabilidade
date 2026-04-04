const fallbackSiteUrl = 'https://mmcontabilidadeltda.com.br'

function normalizeSiteUrl(url: string) {
    return url.endsWith('/') ? url.slice(0, -1) : url
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl)

export const siteConfig = {
    name: 'MM Contabilidade',
    shortName: 'MM Contabilidade',
    description:
        'Escritório de contabilidade em Porto Velho com atendimento para contabilidade empresarial, fiscal, imposto de renda e suporte consultivo.',
    locale: 'pt_BR',
    keywords: [
        'contabilidade em Porto Velho',
        'escritório de contabilidade',
        'MM Contabilidade',
        'imposto de renda',
        'contabilidade empresarial',
        'gestão fiscal',
        'abertura de empresa',
    ],
    phone: '+55 69 98406-9935',
    email: 'edermirandacontabilidade@gmail.com',
    address: {
        streetAddress: 'Rua Tencredo Neves, 4002',
        addressLocality: 'Porto Velho',
        addressRegion: 'RO',
        addressCountry: 'BR',
    },
} as const

export const defaultOgImage = `${siteUrl}/logo.png`
export const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID
export const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION
