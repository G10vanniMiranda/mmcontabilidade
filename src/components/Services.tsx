"use client";

import React from 'react';
import { motion } from 'motion/react';
import { LuBriefcase, LuFileText, LuUsers, LuCoins } from 'react-icons/lu';
import { AiOutlineBarChart } from 'react-icons/ai';

interface ServiceItem {
  icon: React.ReactElement;
  title: string;
  desc: string;
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
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative py-28 px-6 md:px-12 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
    >
      {/* Fundo com luz IA sutil */}
      <motion.div
        className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[160px] rounded-full"
        animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Nossos Serviços
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-16">
          Oferecemos soluções contábeis completas para empresas que buscam inovação, eficiência e segurança.
        </p>

        {/* Grid de cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white/80 backdrop-blur-md rounded-2xl border border-blue-100 shadow-lg hover:shadow-blue-200/50 p-8 flex flex-col items-center text-center transition-all hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 150 }}
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.desc}</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 shadow-md hover:shadow-blue-300/40 transition-all">
                Saiba mais
              </button>

              {/* Efeito de brilho IA no hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-blue-400/0 via-blue-400/10 to-blue-400/0 opacity-0 rounded-2xl"
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
