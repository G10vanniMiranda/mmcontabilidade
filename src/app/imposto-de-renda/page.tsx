import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock3, MessageCircle, ShieldCheck } from 'lucide-react'

const PHONE_WA = '5569984069935'
const message = encodeURIComponent(
    'Olá! Quero atendimento para declaração de Imposto de Renda.'
)

export const metadata: Metadata = {
    title: 'Imposto de Renda | MM Contabilidade',
    description: 'Página de atendimento para declaração de Imposto de Renda com contato rápido pelo WhatsApp.',
}

const benefits = [
    'Atendimento direto e sem complicação',
    'Análise para evitar erros e pendências',
    'Suporte para declaração simples ou mais completa',
]

const steps = [
    'Você envia uma mensagem no WhatsApp.',
    'Recebe a orientação sobre documentos e próximos passos.',
    'Seguimos com o atendimento da sua declaração.',
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
                        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-blue-950 md:text-6xl">
                            Declare seu Imposto de Renda com orientação clara e sem excesso de informação.
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
                            Uma página objetiva para quem só quer resolver isso rápido: fale com a MM Contabilidade e receba o atendimento pelo WhatsApp.
                        </p>

                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href={`https://wa.me/${PHONE_WA}?text=${message}`}
                                target="_blank"
                                className="inline-flex min-w-[260px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-blue-300/40"
                            >
                                <MessageCircle className="h-5 w-5" />
                                Mandar mensagem agora
                            </Link>
                            <Link
                                href="/#contato"
                                className="inline-flex min-w-[220px] items-center justify-center rounded-xl border border-blue-200 bg-white px-8 py-4 text-lg font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
                            >
                                Ver contato
                            </Link>
                        </div>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-3">
                        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                            <ShieldCheck className="h-8 w-8 text-blue-600" />
                            <h2 className="mt-4 text-lg font-bold text-blue-950">Atendimento seguro</h2>
                            <p className="mt-2 text-slate-600">
                                Suporte profissional para reduzir riscos de erro e retrabalho na declaração.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                            <Clock3 className="h-8 w-8 text-blue-600" />
                            <h2 className="mt-4 text-lg font-bold text-blue-950">Sem enrolação</h2>
                            <p className="mt-2 text-slate-600">
                                A página foi feita para conversão: entender rápido, clicar e iniciar o atendimento.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                            <CheckCircle2 className="h-8 w-8 text-blue-600" />
                            <h2 className="mt-4 text-lg font-bold text-blue-950">Orientação clara</h2>
                            <p className="mt-2 text-slate-600">
                                Você recebe o direcionamento sobre documentos, prazo e próximos passos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 py-16 md:px-12">
                <div className="mx-auto grid max-w-5xl gap-8 rounded-3xl border border-blue-100 bg-white p-8 shadow-sm md:grid-cols-2 md:p-10">
                    <div>
                        <h2 className="text-3xl font-bold text-blue-950">
                            O que você encontra aqui
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

            <section className="px-6 pb-20 md:px-12">
                <div className="mx-auto max-w-4xl rounded-3xl bg-blue-950 px-8 py-12 text-center text-white shadow-xl md:px-12">
                    <h2 className="text-3xl font-bold md:text-4xl">
                        Precisa declarar seu Imposto de Renda?
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 md:text-lg">
                        Entre na conversa agora e receba o direcionamento para começar seu atendimento.
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
