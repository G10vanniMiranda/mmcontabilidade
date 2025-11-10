'use client';

import Link from 'next/link';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bottom-0 inset-x-0 z-40 bg-blue-900 text-white border-t border-white/10 shadow-sm">
            <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 h-14 md:h-16 flex items-center justify-between gap-4">
                <div className="text-center md:text-left">
                    <h3 className="font-semibold text-sm md:text-base leading-none">MM Contabilidade</h3>
                    <p className="text-xs/none opacity-90">© {year} Todos os direitos reservados.</p>
                </div>
                <nav className="hidden md:flex gap-6 text-sm">
                    <Link href="#servicos" className="hover:underline">Serviços</Link>
                    <Link href="#sobre" className="hover:underline">Sobre</Link>
                    <Link href="#contato" className="hover:underline">Contato</Link>
                </nav>
                {/* Mobile quick links */}
                <nav className="md:hidden flex gap-4 text-xs">
                    <Link href="#servicos" className="hover:underline">Serviços</Link>
                    <Link href="#contato" className="hover:underline">Contato</Link>
                </nav>
            </div>
        </footer>
    );
}
