'use client'
import { motion } from 'framer-motion'
import { ShieldCheck, Cpu, Headset } from 'lucide-react'

export const Differentials = () => {
    const items = [
        {
            icon: <ShieldCheck size={42} />,
            title: 'Segurança e Conformidade',
            desc: 'Atuamos com total conformidade legal e rigor técnico para garantir tranquilidade e proteção ao seu negócio.',
        },
        {
            icon: <Cpu size={42} />,
            title: 'Tecnologia e Inovação',
            desc: 'Utilizamos processos modernos, automação e inteligência contábil para gerar eficiência e clareza.',
        },
        {
            icon: <Headset size={42} />,
            title: 'Atendimento Personalizado',
            desc: 'Cada cliente é único. Nosso suporte é humano, próximo e focado nas necessidades reais da sua empresa.',
        },
    ]

    return (
        <section
            id="diferenciais"
            className="relative py-28 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"
        >
            {/* Luz IA de fundo */}
            <motion.div
                className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/10 blur-[180px] rounded-full"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Por que escolher a MM Contabilidade?
                </h2>
                <p className="max-w-2xl mx-auto text-blue-100 mb-16">
                    Unimos conhecimento técnico, tecnologia e atendimento estratégico para entregar muito mais do que contabilidade.
                </p>

                <div className="grid gap-12 md:grid-cols-3">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-10 shadow-xl"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                        >
                            <div className="flex justify-center text-white mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-blue-100">{item.desc}</p>

                            {/* Glow IA no hover */}
                            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition">
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 rounded-2xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
