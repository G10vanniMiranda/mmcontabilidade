'use client'
import Link from 'next/link'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'

const PHONE_DISPLAY = '(69) 98406-9935'
const PHONE_WA = '5569984069935'
const ADDRESS = 'Rua Tencredo Neves, 4002'
const EMAIL = 'edermirandacontabilidade@gmail.com'

export const Contact = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const name = String(formData.get('name') ?? '').trim()
        const phone = String(formData.get('phone') ?? '').trim()
        const email = String(formData.get('email') ?? '').trim()
        const message = String(formData.get('message') ?? '').trim()

        const text = [
            'Olá! Gostaria de entrar em contato com a MM Contabilidade.',
            name && `Nome: ${name}`,
            phone && `WhatsApp: ${phone}`,
            email && `E-mail: ${email}`,
            message && `Mensagem: ${message}`,
        ]
            .filter(Boolean)
            .join('\n')

        window.open(
            `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(text)}`,
            '_blank',
            'noopener,noreferrer'
        )
    }

    return (
        <section
            id="contato"
            className="relative py-28 px-6 md:px-12 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white"
        >
            {/* Luz IA de fundo */}
            <motion.div
                className="absolute -bottom-40 -left-40 w-[520px] h-[520px] bg-blue-500/15 blur-[170px] rounded-full"
                animate={{ x: [0, 35, -35, 0], y: [0, -25, 25, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute -top-40 right-0 w-[520px] h-[520px] bg-blue-300/20 blur-[170px] rounded-full"
                animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Título */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
                        Contato e Localização
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Fale com a MM Contabilidade e receba orientação clara, rápida e segura para o seu negócio.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-10 lg:grid-cols-2 items-stretch">
                    {/* Coluna: Cards + CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-white/80 backdrop-blur-md rounded-2xl border border-blue-100 shadow-xl p-8 md:p-10"
                    >
                        <div className="grid gap-6">
                            {/* WhatsApp CTA principal */}
                            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white p-7 shadow-lg">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1">
                                        <MessageCircle size={30} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold leading-tight">
                                            Atendimento rápido no WhatsApp
                                        </h3>
                                        <p className="text-blue-100 mt-2">
                                            Clique abaixo e fale diretamente com nosso time.
                                        </p>

                                        <Link
                                            href={`https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
                                                'Olá! Gostaria de mais informações sobre os serviços da MM Contabilidade.'
                                            )}`}
                                            target="_blank"
                                            className="mt-5 inline-flex items-center justify-center bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition shadow-md"
                                        >
                                            Chamar no WhatsApp
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Cards de informação */}
                            <div className="grid gap-5">
                                <div className="flex items-start gap-4 rounded-xl border border-blue-100 bg-white p-5">
                                    <Phone className="text-blue-600 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-blue-900">Telefone</p>
                                        <p className="text-gray-700">{PHONE_DISPLAY}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-xl border border-blue-100 bg-white p-5">
                                    <Mail className="text-blue-600 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-blue-900">E-mail</p>
                                        <a
                                            className="text-gray-700 hover:text-blue-700 transition"
                                            href={`mailto:${EMAIL}`}
                                        >
                                            {EMAIL}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-xl border border-blue-100 bg-white p-5">
                                    <MapPin className="text-blue-600 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-blue-900">Endereço</p>
                                        <p className="text-gray-700">{ADDRESS}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Coluna: Mapa + formulário */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="grid gap-8"
                    >
                        {/* Mapa (placeholder pronto) */}
                        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-blue-100 shadow-xl overflow-hidden">
                            <div className="p-6 border-b border-blue-100">
                                <h3 className="text-xl font-bold text-blue-900">Como chegar</h3>
                                <p className="text-gray-700">
                                    {ADDRESS}
                                </p>
                            </div>

                            {/* Substitua o src com um embed do Google Maps quando desejar */}
                            <div className="h-[360px]">
                                <iframe
                                    title="Mapa - MM Contabilidade"
                                    className="w-full h-full"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps?q=Rua%20Tencredo%20Neves,%204002&output=embed"
                                />
                            </div>
                        </div>

                        {/* Formulário (estático, pronto para integrar) */}
                        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-blue-100 shadow-xl p-8">
                            <h3 className="text-xl font-bold text-blue-900 mb-2">
                                Envie uma mensagem
                            </h3>
                            <p className="text-gray-700 mb-6">
                                Preencha os campos e retornaremos o mais rápido possível.
                            </p>

                            <form className="grid gap-4" onSubmit={handleSubmit}>
                                <input
                                    className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
                                    placeholder="Seu nome"
                                    name="name"
                                />
                                <input
                                    className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
                                    placeholder="Seu WhatsApp"
                                    name="phone"
                                />
                                <input
                                    className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
                                    placeholder="Seu e-mail"
                                    name="email"
                                    type="email"
                                />
                                <textarea
                                    className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200 min-h-[120px]"
                                    placeholder="Como podemos ajudar?"
                                    name="message"
                                />

                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-300/40"
                                >
                                    Enviar mensagem
                                </button>

                                <p className="text-xs text-gray-500">
                                    Dica: se preferir atendimento imediato, clique em “Chamar no WhatsApp”.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
