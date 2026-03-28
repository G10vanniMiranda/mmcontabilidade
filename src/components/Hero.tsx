'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
    const buttonBaseClassName =
        'inline-flex min-h-14 w-full items-center justify-center rounded-md px-6 py-3 text-center text-base font-semibold shadow-md transition-all sm:min-h-[64px] sm:w-[240px]'

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white" />

            <motion.div
                className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[160px]"
                animate={{
                    x: [0, 40, -40, 0],
                    y: [0, 30, -30, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-300/30 blur-[160px]"
                animate={{
                    x: [0, -50, 50, 0],
                    y: [0, -20, 20, 0],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-36">
                <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
                    <motion.div
                        className="space-y-6 text-center md:w-1/2 md:text-left"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <motion.h1
                            className="text-4xl font-extrabold leading-tight text-blue-900 drop-shadow-sm md:text-5xl"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.08 }}
                        >
                            Soluções Contábeis Inteligentes
                            <br />
                            para sua Empresa Crescer com Segurança
                        </motion.h1>
                        <motion.p
                            className="mx-auto max-w-md text-lg text-gray-700 md:mx-0"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.16 }}
                        >
                            MM Contabilidade une tecnologia e experiência para simplificar sua gestão contábil, fiscal e empresarial.
                        </motion.p>
                        <motion.div
                            className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row md:items-start"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.24 }}
                        >
                            <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    href="/imposto-de-renda"
                                    className={`${buttonBaseClassName} border border-blue-200 bg-white text-blue-900 hover:border-blue-300 hover:bg-blue-50`}
                                >
                                    Imposto de Renda
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    href="#contato"
                                    className={`${buttonBaseClassName} bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-300/40`}
                                >
                                    Fale com um Especialista
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="mt-12 flex justify-center md:mt-0 md:w-1/2"
                        initial={{ opacity: 0, scale: 0.92, y: 18 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        whileHover={{ y: -10, rotate: -1.5 }}
                    >
                        <div className="relative">
                            <motion.div
                                className="absolute inset-0 rounded-2xl bg-blue-400/20 blur-3xl"
                                animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.5, 0.35] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <Image
                                src="/fernanda.JPG"
                                alt="Profissional da contabilidade"
                                width={430}
                                height={430}
                                className="relative rounded-2xl border border-blue-100 drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
