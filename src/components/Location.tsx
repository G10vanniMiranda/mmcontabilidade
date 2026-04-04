'use client'

import { motion } from 'motion/react'

const ADDRESS = 'Rua Tencredo Neves, 4002'

export const Location = () => {
    return (
        <section
            id="localizacao"
            className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50 px-6 py-24 md:px-12"
        >
            <motion.div
                className="absolute left-0 top-10 h-[420px] w-[420px] rounded-full bg-blue-300/15 blur-[150px]"
                animate={{ x: [0, 20, -20, 0], y: [0, 15, -15, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <motion.h2
                        className="mb-4 text-4xl font-extrabold text-blue-900 md:text-5xl"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Localização
                    </motion.h2>
                    <motion.p
                        className="mx-auto max-w-2xl text-gray-700"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.08 }}
                    >
                        Veja onde estamos e encontre o melhor caminho para chegar até a MM Contabilidade.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="overflow-hidden rounded-2xl border border-blue-100 bg-white/90 shadow-xl backdrop-blur-md"
                    whileHover={{ y: -6 }}
                >
                    <div className="border-b border-blue-100 p-6 md:p-8">
                        <h3 className="text-2xl font-bold text-blue-900">Como chegar</h3>
                        <p className="mt-2 text-gray-700">{ADDRESS}</p>
                    </div>

                    <motion.div
                        className="h-[360px] md:h-[460px]"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.35 }}
                    >
                        <iframe
                            title="Mapa - MM Contabilidade"
                            className="h-full w-full"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps?q=Rua%20Tencredo%20Neves,%204002&output=embed"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
