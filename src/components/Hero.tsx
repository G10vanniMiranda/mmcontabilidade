'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex flex-col md:flex-row items-center justify-between max-screen mx-auto px-6 md:px-12 py-28 md:py-36 overflow-hidden"
        >
            {/* Fundo com luzes e gradiente */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white" />

            {/* Efeitos de luz IA flutuantes */}
            <motion.div
                className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 blur-[160px] rounded-full"
                animate={{
                    x: [0, 40, -40, 0],
                    y: [0, 30, -30, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-300/30 blur-[160px] rounded-full"
                animate={{
                    x: [0, -50, 50, 0],
                    y: [0, -20, 20, 0],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Conteúdo */}
            <div className="z-10 md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight drop-shadow-sm">
                    Soluções Contábeis Inteligentes<br />para sua Empresa Crescer com Segurança
                </h1>
                <p className="text-gray-700 text-lg max-w-md mx-auto md:mx-0">
                    MM Contabilidade une tecnologia e experiência para simplificar sua gestão contábil, fiscal e empresarial.
                </p>
                <Link
                    href="#contato"
                    className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-300/40 inline-flex items-center justify-center"
                >
                    Fale com um Especialista
                </Link>
            </div>

            {/* Imagem à direita */}
            <motion.div
                className="z-10 mt-12 md:mt-0 md:w-1/2 flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <Image
                    src="/fernanda.JPG"
                    alt="Profissional da contabilidade"
                    width={520}
                    height={520}
                    className="drop-shadow-2xl rounded-2xl"
                    priority
                />
            </motion.div>
        </section>
    );
}
