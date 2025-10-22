'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const NAV = [
    { href: '#servicos', label: 'Serviços' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#localizacao', label: 'Localização' },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((v) => !v);
    const close = () => setOpen(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-black text-white border-b border-white/10">
            {/* bar */}
            <div className="mx-auto w-full max-w-[1400px] px-3 md:px-6">
                <div className="relative h-11 md:h-16 flex items-center justify-between">
                    {/* logo */}
                    <Link href="#" aria-label="MM Contabilidade - Início" className="shrink-0 flex items-center">
                        <Image
                            src="/logo.svg"
                            alt="MM Contabilidade"
                            width={112}
                            height={28}
                            priority
                            className="h-7 w-auto"
                        />
                    </Link>

                    {/* desktop nav */}
                    <nav className="hidden md:flex items-center gap-6">
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
                            href="#contato"
                            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                        >
                            Entrar em contato
                        </Link>
                    </nav>

                    {/* mobile button */}
                    <button
                        type="button"
                        className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 hover:bg-white/5"
                        aria-expanded={open}
                        aria-label="Abrir menu"
                        onClick={toggle}
                    >
                        {open ? <HiOutlineX className="h-5 w-5" /> : <HiOutlineMenu className="h-5 w-5" />}
                    </button>

                    {/* mobile dropdown (absolute, não altera a altura do header) */}
                    <div
                        className={`md:hidden absolute left-0 right-0 top-full transition-all duration-200 ${open ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-1'
                            }`}
                    >
                        <div className="bg-black border-t border-white/10">
                            <nav className="px-3 py-2 space-y-1">
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
                                    href="#contato"
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
    );
}
