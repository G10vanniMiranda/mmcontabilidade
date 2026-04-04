'use client'

import { motion } from 'motion/react'
import { Cpu, Headset, ShieldCheck } from 'lucide-react'

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

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.14,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
}

export const Differentials = () => {
    return (
        <section
            id="diferenciais"
            className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 px-6 py-28 md:px-12"
        >
            <motion.div
                className="absolute left-1/2 top-32 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/10 blur-[180px]"
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative z-10 mx-auto max-w-7xl text-center text-white">
                <motion.h2
                    className="mb-4 text-4xl font-extrabold md:text-5xl"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Por que escolher a MM Contabilidade?
                </motion.h2>
                <motion.p
                    className="mx-auto mb-16 max-w-2xl text-blue-100"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.08 }}
                >
                    Unimos conhecimento técnico, tecnologia e atendimento estratégico para entregar muito mais do
                    que contabilidade.
                </motion.p>

                <motion.div
                    className="grid gap-12 md:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={item.title}
                            variants={cardVariants}
                            className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-10 shadow-xl backdrop-blur-md"
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                aria-hidden="true"
                            />
                            <motion.div
                                className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-white/10 blur-2xl"
                                animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
                                transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <motion.div
                                className="mb-6 flex justify-center text-white"
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
                                whileHover={{ rotate: index % 2 === 0 ? -4 : 4, scale: 1.06 }}
                            >
                                {item.icon}
                            </motion.div>
                            <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
                            <p className="text-blue-100">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
