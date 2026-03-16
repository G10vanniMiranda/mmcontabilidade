"use client";

import Link from 'next/link';
import React from 'react';
import { motion } from 'motion/react';
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
    desc: 'Gestão completa da contabilidade do seu negócio com segurança e transparência.',
  },
  {
    icon: <LuFileText size={40} />,
    title: 'Abertura de Empresa',
    desc: 'Orientação e execução de todos os processos legais para abrir sua empresa do zero.',
  },
  {
    icon: <AiOutlineBarChart size={40} />,
    title: 'Consultoria Fiscal',
    desc: 'Análise tributária estratégica para reduzir custos e aumentar sua eficiência fiscal.',
  },
  {
    icon: <LuUsers size={40} />,
    title: 'Folha de Pagamento',
    desc: 'Cálculos, encargos e obrigações trabalhistas organizadas de forma prática e segura.',
  },
  {
    icon: <LuCoins size={40} />,
    title: 'Imposto de Renda',
    desc: 'Declaração de IRPF e IRPJ com precisão, evitando erros e garantindo conformidade.',
    href: '/imposto-de-renda',
  },
];

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

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <h2 className="mb-4 text-4xl font-extrabold text-blue-900 md:text-5xl">
          Nossos Serviços
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-gray-700">
          Oferecemos soluções contábeis completas para empresas que buscam inovação, eficiência e segurança.
        </p>

        <div className="grid justify-center gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center rounded-2xl border border-blue-100 bg-white/80 p-8 text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-blue-200/50"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 150 }}
            >
              <div className="mb-4 text-blue-600">{service.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-blue-900">{service.title}</h3>
              <p className="mb-6 text-gray-700">{service.desc}</p>
              <Link
                href={service.href ?? '/#contato'}
                className="relative z-10 inline-flex cursor-pointer rounded-md bg-blue-600 px-6 py-2 font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-blue-300/40"
              >
                Saiba mais
              </Link>

              <motion.div
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-400/0 via-blue-400/10 to-blue-400/0 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
