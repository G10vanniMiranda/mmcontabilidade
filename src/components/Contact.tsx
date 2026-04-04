'use client'

import Link from 'next/link'
import type { FormEvent } from 'react'
import { motion } from 'motion/react'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

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
            className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white px-6 py-28 md:px-12"
        >
            <motion.div
                className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-500/15 blur-[170px]"
                animate={{ x: [0, 35, -35, 0], y: [0, -25, 25, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-blue-300/20 blur-[170px]"
                animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="mb-14 text-center">
                    <motion.h2
                        className="mb-4 text-4xl font-extrabold text-blue-900 md:text-5xl"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Contato
                    </motion.h2>
                    <motion.p
                        className="mx-auto max-w-2xl text-gray-700"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.08 }}
                    >
                        Fale com a MM Contabilidade e receba orientação clara, rápida e segura para o seu
                        negócio.
                    </motion.p>
                </div>

                <div className="grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex h-full min-w-0 flex-col rounded-2xl border border-blue-100 bg-white/80 p-8 shadow-xl backdrop-blur-md md:p-10"
                    >
                        <div className="grid h-full gap-6">
                            <motion.div
                                className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-7 text-white shadow-lg"
                                whileHover={{ y: -6, scale: 1.01 }}
                                transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="mt-1">
                                        <MessageCircle size={30} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold leading-tight">
                                            Atendimento rápido no WhatsApp
                                        </h3>
                                        <p className="mt-2 text-blue-100">
                                            Clique abaixo e fale diretamente com nosso time.
                                        </p>

                                        <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                            <Link
                                                href={`https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
                                                    'Olá! Gostaria de mais informações sobre os serviços da MM Contabilidade.'
                                                )}`}
                                                target="_blank"
                                                className="mt-5 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-blue-700 shadow-md transition hover:bg-blue-50"
                                            >
                                                Chamar no WhatsApp
                                            </Link>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="grid gap-5">
                                <motion.div
                                    className="flex min-w-0 items-start gap-4 rounded-xl border border-blue-100 bg-white p-5"
                                    whileHover={{ x: 6, y: -3 }}
                                    transition={{ type: 'spring', stiffness: 170, damping: 16 }}
                                >
                                    <Phone className="mt-0.5 text-blue-600" />
                                    <div className="min-w-0">
                                        <p className="font-semibold text-blue-900">Telefone</p>
                                        <p className="text-gray-700">{PHONE_DISPLAY}</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex min-w-0 items-start gap-4 rounded-xl border border-blue-100 bg-white p-5"
                                    whileHover={{ x: 6, y: -3 }}
                                    transition={{ type: 'spring', stiffness: 170, damping: 16 }}
                                >
                                    <Mail className="mt-0.5 text-blue-600" />
                                    <div className="min-w-0">
                                        <p className="font-semibold text-blue-900">E-mail</p>
                                        <a
                                            className="break-all text-gray-700 transition hover:text-blue-700"
                                            href={`mailto:${EMAIL}`}
                                        >
                                            {EMAIL}
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex min-w-0 items-start gap-4 rounded-xl border border-blue-100 bg-white p-5"
                                    whileHover={{ x: 6, y: -3 }}
                                    transition={{ type: 'spring', stiffness: 170, damping: 16 }}
                                >
                                    <MapPin className="mt-0.5 text-blue-600" />
                                    <div className="min-w-0">
                                        <p className="font-semibold text-blue-900">Endereço</p>
                                        <p className="text-gray-700">{ADDRESS}</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex h-full min-w-0 flex-col rounded-2xl border border-blue-100 bg-white/80 p-8 shadow-xl backdrop-blur-md md:p-10"
                    >
                        <h3 className="mb-2 text-xl font-bold text-blue-900">Envie uma mensagem</h3>
                        <p className="mb-6 text-gray-700">
                            Preencha os campos e retornaremos o mais rápido possível.
                        </p>

                        <form className="grid h-full gap-4" onSubmit={handleSubmit}>
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
                                className="min-h-[120px] w-full rounded-lg border border-blue-100 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
                                placeholder="Como podemos ajudar?"
                                name="message"
                            />

                            <motion.button
                                type="submit"
                                className="mt-auto rounded-md bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-blue-300/40"
                                whileHover={{ y: -4, scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                            >
                                Enviar mensagem
                            </motion.button>

                            <p className="text-xs text-gray-500">
                                Dica: se preferir atendimento imediato, clique em &quot;Chamar no WhatsApp&quot;.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
