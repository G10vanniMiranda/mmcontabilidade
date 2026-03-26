"use client";

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { LuBriefcase, LuFileText, LuUsers, LuCoins } from 'react-icons/lu';
import { AiOutlineBarChart } from 'react-icons/ai';

interface ServiceItem {
  icon: React.ReactElement;
  title: string;
  desc: string;
  href?: string;
}

const services: ServiceItem[] = [
  {
    icon: <LuBriefcase size={40} />,
    title: 'Contabilidade Empresarial',
    desc: 'Gestao completa da contabilidade do seu negocio com seguranca e transparencia.',
  },
  {
    icon: <LuFileText size={40} />,
    title: 'Abertura de Empresa',
    desc: 'Orientacao e execucao de todos os processos legais para abrir sua empresa do zero.',
  },
  {
    icon: <AiOutlineBarChart size={40} />,
    title: 'Consultoria Fiscal',
    desc: 'Analise tributaria estrategica para reduzir custos e aumentar sua eficiencia fiscal.',
  },
  {
    icon: <LuUsers size={40} />,
    title: 'Folha de Pagamento',
    desc: 'Calculos, encargos e obrigacoes trabalhistas organizadas de forma pratica e segura.',
  },
  {
    icon: <LuCoins size={40} />,
    title: 'Imposto de Renda',
    desc: 'Declaracao de IRPF e IRPJ com precisao, evitando erros e garantindo conformidade.',
    href: '/imposto-de-renda',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white px-6 py-28 md:px-12"
    >
      <motion.div
        className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[160px]"
        animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-sky-300/20 blur-[150px]"
        animate={{ x: [0, 25, -20, 0], y: [0, -18, 18, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <motion.h2
          className="mb-4 text-4xl font-extrabold text-blue-900 md:text-5xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nossos Servicos
        </motion.h2>
        <motion.p
          className="mx-auto mb-16 max-w-2xl text-gray-700"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Oferecemos solucoes contabeis completas para empresas que buscam inovacao, eficiencia e seguranca.
        </motion.p>

        <motion.div
          className="grid justify-center gap-10 md:grid-cols-2 lg:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative flex flex-col items-center overflow-hidden rounded-2xl border border-blue-100 bg-white/80 p-8 text-center shadow-lg backdrop-blur-sm md:col-span-1 lg:col-span-2 ${
                index >= 3 ? 'lg:col-start-2' : ''
              } ${
                index === 4 ? 'lg:col-start-4' : ''
              }`}
              whileHover={{ y: -10, rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            >
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18),_transparent_52%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              <motion.div
                className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <motion.div
                className="relative mb-4 rounded-2xl bg-blue-50 p-4 text-blue-600"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.08, rotate: index % 2 === 0 ? -4 : 4 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="relative mb-3 text-xl font-bold text-blue-900">{service.title}</h3>
              <p className="relative mb-6 flex-1 text-gray-700">{service.desc}</p>
              <Link
                href={service.href ?? '/#contato'}
                className="relative z-10 inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-6 py-2 font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-300/40"
              >
                Saiba mais
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
