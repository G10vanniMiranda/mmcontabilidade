'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Hero() {
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
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <div className="space-y-6 text-center md:w-1/2 md:text-left">
                        <h1 className="text-4xl font-extrabold leading-tight text-blue-900 drop-shadow-sm md:text-5xl">
                            Soluções Contábeis Inteligentes
                            <br />
                            para sua Empresa Crescer com Segurança
                        </h1>
                        <p className="mx-auto max-w-md text-lg text-gray-700 md:mx-0">
                            MM Contabilidade une tecnologia e experiência para simplificar sua gestão contábil, fiscal e empresarial.
                        </p>
                        <div className="flex flex-col items-center gap-3 sm:flex-row md:items-start">
                            <Link
                                href="/imposto-de-renda"
                                className="inline-flex items-center justify-center rounded-md border border-blue-200 bg-white px-8 py-3 text-lg font-semibold text-blue-900 shadow-sm transition-all hover:border-blue-300 hover:bg-blue-50"
                            >
                                Imposto de Renda
                            </Link>
                            <Link
                                href="#contato"
                                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-blue-300/40"
                            >
                                Fale com um Especialista
                            </Link>
                        </div>
                    </div>

                    <motion.div
                        className="mt-12 flex justify-center md:mt-0 md:w-1/2"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            src="/fernanda.JPG"
                            alt="Profissional da contabilidade"
                            width={430}
                            height={430}
                            className="rounded-2xl drop-shadow-2xl"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
