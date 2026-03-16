'use client'

import Link from 'next/link'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="border-t border-white/10 bg-blue-900 text-white">
            <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
                <div className="text-center md:text-left">
                    <h3 className="text-sm font-semibold leading-none md:text-base">
                        MM Contabilidade
                    </h3>
                    <p className="mt-1 text-xs text-white/80">
                        © {year} Todos os direitos reservados.
                    </p>
                </div>

                <nav className="hidden items-center gap-6 text-sm md:flex">
                    <Link href="/#servicos" className="hover:underline">
                        Serviços
                    </Link>
                    <Link href="/#sobre" className="hover:underline">
                        Sobre
                    </Link>
                    <Link href="/#contato" className="font-semibold hover:underline">
                        Contato
                    </Link>
                </nav>

                <nav className="flex gap-4 text-xs md:hidden">
                    <Link href="/#servicos" className="hover:underline">
                        Serviços
                    </Link>
                    <Link href="/#contato" className="font-semibold hover:underline">
                        Contato
                    </Link>
                </nav>
            </div>
        </footer>
    )
}
