import type { Metadata } from 'next'

import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Differentials } from '@/components/Differentials'
import Hero from '@/components/Hero'
import { Location } from '@/components/Location'
import Services from '@/components/Services'
import { defaultOgImage } from '@/lib/site'

export const metadata: Metadata = {
    title: 'Contabilidade em Porto Velho',
    description:
        'MM Contabilidade oferece suporte para contabilidade empresarial, fiscal, consultoria e imposto de renda em Porto Velho.',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'MM Contabilidade | Contabilidade em Porto Velho',
        description:
            'Atendimento contábil para empresas e pessoas físicas com foco em clareza, agilidade e segurança.',
        url: '/',
        images: [defaultOgImage],
    },
    twitter: {
        title: 'MM Contabilidade | Contabilidade em Porto Velho',
        description:
            'Atendimento contábil para empresas e pessoas físicas com foco em clareza, agilidade e segurança.',
        images: [defaultOgImage],
    },
}

export default function Home() {
    return (
        <main className="w-full">
            <Hero />
            <Services />
            <Differentials />
            <About />
            <Contact />
            <Location />
        </main>
    )
}
