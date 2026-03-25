import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock3, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react'

const PHONE_WA = '5569984069935'
const PHONE_DISPLAY = '(69) 98406-9935'
const ADDRESS = 'Rua Tencredo Neves, 4002'
const EMAIL = 'edermirandacontabilidade@gmail.com'
const message = encodeURIComponent(
    'Olá! Quero atendimento para declaração de Imposto de Renda.'
)

export const metadata: Metadata = {
    title: 'Imposto de Renda | MM Contabilidade',
    description:
        'Atendimento para declaração de Imposto de Renda com orientação clara, contato rápido no WhatsApp e suporte da MM Contabilidade.',
    openGraph: {
        title: 'Imposto de Renda | MM Contabilidade',
        description:
            'Fale com a MM Contabilidade e receba orientação para declarar seu Imposto de Renda com mais segurança e agilidade.',
        type: 'website',
    },
}

const benefits = [
    'Atendimento direto para pessoa física e casos mais completos',
    'Orientação sobre documentos, pendências e próximos passos',
    'Suporte para reduzir erros e evitar retrabalho na declaração',
]

const steps = [
    'Você chama no WhatsApp e informa seu caso.',
    'Recebe a orientação inicial sobre documentos e atendimento.',
    'Seguimos com o processo da sua declaração com mais segurança.',
]

const reasons = [
    {
        icon: ShieldCheck,
        title: 'Mais segurança',
        description: 'Análise cuidadosa para reduzir erros, inconsistências e pendências na declaração.',
    },
    {
        icon: Clock3,
        title: 'Atendimento ágil',
        description: 'Você entende rapidamente o que precisa enviar e como iniciar seu atendimento.',
    },
    {
        icon: CheckCircle2,
        title: 'Orientação clara',
        description: 'Explicamos o processo de forma simples, objetiva e sem excesso de informação.',
    },
]

const contactItems = [
    {
        icon: Phone,
        label: 'WhatsApp',
        value: PHONE_DISPLAY,
        href: `https://wa.me/${PHONE_WA}?text=${message}`,
        valueClassName: '',
    },
    {
        icon: Mail,
        label: 'E-mail',
        value: EMAIL,
        href: `mailto:${EMAIL}`,
        valueClassName: 'overflow-x-auto whitespace-nowrap text-[15px] sm:text-lg',
    },
    {
        icon: MapPin,
        label: 'Endereço',
        value: ADDRESS,
        href: 'https://www.google.com/maps?q=Rua%20Tencredo%20Neves,%204002',
        valueClassName: '',
    },
]

export default function ImpostoDeRendaPage() {
    return (
        <main className="bg-white">
            <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white px-6 py-20 md:px-12 md:py-28">
                <div className="absolute left-0 top-0 h-[360px] w-[360px] rounded-full bg-blue-200/40 blur-[140px]" />
                <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-blue-300/30 blur-[140px]" />

                <div className="relative mx-auto max-w-5xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700">
                            Atendimento para Imposto de Renda
                        </span>
                        <h1 className="mx-auto mt-6 w-full max-w-[320px] text-3xl font-extrabold leading-[1.12] tracking-[-0.02em] text-blue-950 sm:max-w-[14ch] sm:text-5xl md:max-w-none md:text-6xl">
                            Declare seu Imposto de Renda com orientação clara e atendimento rápido.
                        </h1>
                        <p className="mx-auto mt-6 w-full max-w-[320px] text-base leading-8 text-slate-600 sm:max-w-2xl sm:text-lg">
                            Fale com a MM Contabilidade para entender o que precisa, organizar seus documentos e iniciar seu atendimento sem complicação.
                        </p>

                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href={`https://wa.me/${PHONE_WA}?text=${message}`}
                                target="_blank"
                                className="inline-flex w-full max-w-[320px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-blue-300/40 sm:w-auto sm:min-w-[260px] sm:max-w-none"
                            >
                                <MessageCircle className="h-5 w-5" />
                                Mandar mensagem agora
                            </Link>
                            <Link
                                href={`tel:${PHONE_DISPLAY.replace(/\D/g, '')}`}
                                className="inline-flex w-full max-w-[320px] items-center justify-center rounded-xl border border-blue-200 bg-white px-8 py-4 text-lg font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50 sm:w-auto sm:min-w-[260px] sm:max-w-none"
                            >
                                Ligar agora
                            </Link>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
                            <span>WhatsApp: {PHONE_DISPLAY}</span>
                            <span>Porto Velho - RO</span>
                            <span>Atendimento claro e direto</span>
                        </div>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-3">
                        {reasons.map((item) => {
                            const Icon = item.icon

                            return (
                                <div key={item.title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                                    <Icon className="h-8 w-8 text-blue-600" />
                                    <h2 className="mt-4 text-lg font-bold text-blue-950">{item.title}</h2>
                                    <p className="mt-2 text-slate-600">{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="px-6 py-16 md:px-12">
                <div className="mx-auto grid max-w-5xl gap-8 rounded-3xl border border-blue-100 bg-white p-8 shadow-sm md:grid-cols-2 md:p-10">
                    <div>
                        <h2 className="text-3xl font-bold text-blue-950">
                            Como podemos ajudar
                        </h2>
                        <div className="mt-6 space-y-4">
                            {benefits.map((benefit) => (
                                <div key={benefit} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                                    <p className="text-slate-700">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-blue-950">
                            Como funciona
                        </h2>
                        <div className="mt-6 space-y-4">
                            {steps.map((step, index) => (
                                <div key={step} className="flex items-start gap-4">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                                        {index + 1}
                                    </div>
                                    <p className="pt-1 text-slate-700">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 pb-16 md:px-12">
                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
                    {contactItems.map((item) => {
                        const Icon = item.icon

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                className="min-w-0 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                            >
                                <Icon className="h-7 w-7 text-blue-600" />
                                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
                                    {item.label}
                                </p>
                                <p
                                    className={`mt-2 text-lg font-semibold text-blue-950 ${item.valueClassName ?? ''}`}
                                >
                                    {item.value}
                                </p>
                            </Link>
                        )
                    })}
                </div>
            </section>

            <section className="px-6 pb-20 md:px-12">
                <div className="mx-auto max-w-4xl rounded-3xl bg-blue-950 px-8 py-12 text-center text-white shadow-xl md:px-12">
                    <h2 className="text-3xl font-bold md:text-4xl">
                        Precisa declarar seu Imposto de Renda?
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 md:text-lg">
                        Entre em contato agora e receba o direcionamento inicial para começar seu atendimento.
                    </p>
                    <Link
                        href={`https://wa.me/${PHONE_WA}?text=${message}`}
                        target="_blank"
                        className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-700 transition hover:bg-blue-50"
                    >
                        <MessageCircle className="h-5 w-5" />
                        Falar no WhatsApp
                    </Link>
                </div>
            </section>
        </main>
    )
}
