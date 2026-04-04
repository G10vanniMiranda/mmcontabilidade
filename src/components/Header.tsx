'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

const NAV = [
    { href: '/#servicos', label: 'Serviços' },
    { href: '/imposto-de-renda', label: 'Imposto de Renda' },
    { href: '/#diferenciais', label: 'Diferenciais' },
    { href: '/#sobre', label: 'Sobre Nós' },
    { href: '/#contato', label: 'Contato' },
    { href: '/#localizacao', label: 'Localização' },
]

export default function Header() {
    const [open, setOpen] = useState(false)

    const toggle = () => setOpen((value) => !value)
    const close = () => setOpen(false)

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black text-white">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
                <div className="relative flex h-11 items-center justify-between md:h-16">
                    <Link
                        href="/#hero"
                        aria-label="MM Contabilidade - Início"
                        className="flex shrink-0 items-center"
                        onClick={close}
                    >
                        <Image
                            src="/logo.svg"
                            alt="MM Contabilidade"
                            width={112}
                            height={28}
                            priority
                            className="h-7 w-auto"
                        />
                    </Link>

                    <nav className="hidden items-center gap-6 lg:flex">
                        {NAV.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-white/90 hover:text-white"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <Link
                            href="/#contato"
                            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                        >
                            Entrar em contato
                        </Link>
                    </nav>

                    <button
                        type="button"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 hover:bg-white/5 lg:hidden"
                        aria-expanded={open}
                        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
                        onClick={toggle}
                    >
                        {open ? <HiOutlineX className="h-5 w-5" /> : <HiOutlineMenu className="h-5 w-5" />}
                    </button>

                    <div
                        className={`absolute left-0 right-0 top-full transition-all duration-200 lg:hidden ${
                            open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'
                        }`}
                    >
                        <div className="border-t border-white/10 bg-black">
                            <nav className="space-y-1 px-3 py-2">
                                {NAV.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/5 hover:text-white"
                                        onClick={close}
                                    >
                                        {item.label}
                                    </Link>
                                ))}

                                <Link
                                    href="/#contato"
                                    className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-blue-700"
                                    onClick={close}
                                >
                                    Entrar em contato
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
