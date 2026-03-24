'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

const PHONE_DISPLAY = '(69) 98406-9935'
const PHONE_WA = '5569984069935'
const ADDRESS = 'Rua Tencredo Neves, 4002'
const EMAIL = 'edermirandacontabilidade@gmail.com'

const navLinks = [
    { href: '/#servicos', label: 'Serviços' },
    { href: '/imposto-de-renda', label: 'Imposto de Renda' },
    { href: '/#diferenciais', label: 'Diferenciais' },
    { href: '/#sobre', label: 'Sobre Nós' },
    { href: '/#contato', label: 'Contato' },
]

const contactLinks = [
    {
        href: `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
            'Olá! Gostaria de falar com a MM Contabilidade.'
        )}`,
        label: PHONE_DISPLAY,
        icon: Phone,
    },
    {
        href: `mailto:${EMAIL}`,
        label: EMAIL,
        icon: Mail,
    },
    {
        href: 'https://www.google.com/maps?q=Rua%20Tencredo%20Neves,%204002',
        label: ADDRESS,
        icon: MapPin,
    },
]

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="border-t border-blue-100 bg-slate-950 text-white">
            <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 py-14 md:grid-cols-[1.2fr_0.8fr_1fr] md:px-8">
                <div className="max-w-md">
                    <Link href="/#hero" aria-label="MM Contabilidade - Início" className="inline-flex items-center">
                        <Image
                            src="/logo.svg"
                            alt="MM Contabilidade"
                            width={132}
                            height={32}
                            className="h-8 w-auto"
                        />
                    </Link>

                    <p className="mt-5 text-sm leading-7 text-slate-300">
                        Soluções contábeis com atendimento direto, orientação clara e suporte para empresas e pessoas
                        que buscam mais organização e segurança.
                    </p>

                    <Link
                        href={`https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
                            'Olá! Gostaria de atendimento da MM Contabilidade.'
                        )}`}
                        target="_blank"
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                        <MessageCircle className="h-4 w-4" />
                        Falar no WhatsApp
                    </Link>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Navegação
                    </h3>
                    <nav className="mt-5 grid gap-3 text-sm text-slate-200">
                        {navLinks.map((item) => (
                            <Link key={item.href} href={item.href} className="transition hover:text-white">
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Contato
                    </h3>
                    <div className="mt-5 grid gap-4">
                        {contactLinks.map((item) => {
                            const Icon = item.icon

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 transition hover:border-blue-400/40 hover:bg-white/10"
                                >
                                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                                    <span className="break-words leading-6">{item.label}</span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-3 px-6 py-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-8">
                    <p>© {year} MM Contabilidade. Todos os direitos reservados.</p>
                    <p>Porto Velho - RO</p>
                </div>
            </div>
        </footer>
    )
}
