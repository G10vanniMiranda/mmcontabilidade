'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

export const About = () => {
    return (
        <section id="sobre" className="relative overflow-hidden bg-white px-6 py-28 md:px-12">
            <motion.div
                className="absolute left-0 top-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[160px]"
                animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.h2
                        className="mb-6 text-4xl font-extrabold text-blue-900 md:text-5xl"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Sobre a MM Contabilidade
                    </motion.h2>

                    <motion.p
                        className="mb-6 text-lg text-gray-700"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.08 }}
                    >
                        A <strong>MM Contabilidade</strong> nasceu com o propósito de ir além do tradicional.
                        Atuamos como parceiros estratégicos das empresas, oferecendo soluções contábeis
                        inteligentes, seguras e alinhadas à realidade do mercado atual.
                    </motion.p>

                    <motion.p
                        className="mb-10 text-lg text-gray-700"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.16 }}
                    >
                        Unimos experiência técnica, tecnologia e atendimento personalizado para ajudar nossos
                        clientes a crescerem com organização, clareza e tranquilidade fiscal.
                    </motion.p>

                    <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link
                            href="#contato"
                            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-blue-300/40"
                        >
                            Fale com nosso time
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 16 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex justify-center"
                    whileHover={{ y: -8 }}
                >
                    <div className="group relative overflow-hidden rounded-2xl border border-blue-100 shadow-2xl">
                        <motion.div
                            className="absolute inset-0 z-10 bg-gradient-to-tr from-blue-600/10 via-transparent to-blue-600/20"
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <motion.div
                            className="absolute -right-10 top-8 z-10 h-28 w-28 rounded-full bg-blue-300/25 blur-2xl"
                            animate={{ x: [0, -12, 0], y: [0, 8, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <Image
                            src="/logo1.jpg"
                            alt="Equipe MM Contabilidade"
                            width={520}
                            height={420}
                            className="object-cover transition duration-700 group-hover:scale-105"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
