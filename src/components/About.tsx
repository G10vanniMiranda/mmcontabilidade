'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const About = () => {
    return (
        <section
            id="sobre"
            className="relative py-28 px-6 md:px-12 bg-white overflow-hidden"
        >
            {/* Luz IA de fundo */}
            <motion.div
                className="absolute -top-40 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full"
                animate={{ x: [0, 40, -40, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Texto institucional */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
                        Sobre a MM Contabilidade
                    </h2>

                    <p className="text-gray-700 text-lg mb-6">
                        A <strong>MM Contabilidade</strong> nasceu com o propósito de ir além do
                        tradicional. Atuamos como parceiros estratégicos das empresas,
                        oferecendo soluções contábeis inteligentes, seguras e alinhadas à
                        realidade do mercado atual.
                    </p>

                    <p className="text-gray-700 text-lg mb-10">
                        Unimos experiência técnica, tecnologia e atendimento personalizado
                        para ajudar nossos clientes a crescerem com organização, clareza e
                        tranquilidade fiscal.
                    </p>

                    <Link
                        href="#contato"
                        className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-blue-300/40"
                    >
                        Fale com nosso time
                    </Link>
                </motion.div>

                {/* Imagem institucional */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex justify-center"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-100">
                        <Image
                            src="/logo1.jpg"
                            alt="Equipe MM Contabilidade"
                            width={520}
                            height={420}
                            className="object-cover"
                        />

                        {/* Overlay futurista */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-blue-600/20" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
