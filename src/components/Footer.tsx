'use client'

import Link from 'next/link'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-blue-900 text-white border-t border-white/10">
            <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Brand */}
                <div className="text-center md:text-left">
                    <h3 className="font-semibold text-sm md:text-base leading-none">
                        MM Contabilidade
                    </h3>
                    <p className="mt-1 text-xs text-white/80">
                        © {year} Todos os direitos reservados.
                    </p>
                </div>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <Link href="#servicos" className="hover:underline">
                        Serviços
                    </Link>
                    <Link href="#sobre" className="hover:underline">
                        Sobre
                    </Link>
                    <Link href="#contato" className="hover:underline font-semibold">
                        Contato
                    </Link>
                </nav>

                {/* Mobile nav */}
                <nav className="md:hidden flex gap-4 text-xs">
                    <Link href="#servicos" className="hover:underline">
                        Serviços
                    </Link>
                    <Link href="#contato" className="hover:underline font-semibold">
                        Contato
                    </Link>
                </nav>
            </div>
        </footer>
    )
}
