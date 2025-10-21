'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const navItems = [
    { href: '#servicos', label: 'Serviços' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#localizacao', label: 'Localização' },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-black/95 backdrop-blur border-b border-white/10">
            <div className="mx-auto w-full max-w-[1400px] px-4">
                <div className="h-12 md:h-16 flex items-center justify-between text-white">
                    {/* Logo */}
                    <Link href="#" className="flex items-center gap-2" aria-label="MM Contabilidade - Início">
                        <Image src="/logo.svg" alt="MM Contabilidade" width={120} height={32} priority />
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <Link
                            href="#contato"
                            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-black"
                        >
                            Entrar em contato
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-label="Abrir menu de navegação"
                    >
                        {open ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            <div
                className={`${open ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-1'
                    } md:hidden transition-all duration-200 ease-out`}
            >
                <div className="bg-black/95 border-t border-white/10">
                    <nav className="px-4 py-3 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/5 hover:text-white"
                                onClick={closeMenu}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="#contato"
                            className="mt-2 block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-blue-700"
                            onClick={closeMenu}
                        >
                            Entrar em contato
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
