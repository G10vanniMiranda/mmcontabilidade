'use client'

import { motion } from "motion/react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      {/* sessão 01 */}
      <section className="h-screen w-screen flex items-center justify-center 
      bg-[url(/infopage.png)] md:bg-[url(/infopage-mobile.png)]  bg-cover bg-center">

        <div className="flex flex-col gap-4 max-w-72 absolute bottom-36">

          <Image src="/logo.png" alt="Logo MM" width={100} height={24} />

          <h1 className="text-4xl font-semibold">Precisando declarar seu Imposto de Renda?</h1>

          <div className="w-40">
            <h2 className="text-blue-500">Nós Cuidamos de Tudo Para Você!</h2>
          </div>

        </div>

      </section>

      {/* sessão 02 */}
      <section className="h-screen w-screen flex items-center justify-center relative
      bg-[url(/sessao2.png)] md:bg-[url(/sessao2-desk.png)] bg-cover bg-center">

        <div className=" w-screen h-auto flex flex-col 
          md:flex-row items-center 
          justify-center md:justify-start gap-6 
          p-8 mb-36 ">

          <Image className="w-full md:ml-10 md:w-96 h-[50vh]" src="/mulher-sessao2.png" alt="Mulher com a mão na cabeça" width={700} height={100} />

          <div className="flex flex-col gap-6 md:w-[400px]">

            <h1 className="text-6xl font-semibold text-white">Evite dores de cabeça!</h1>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.9 }}
            >

              <h2 className="text-white text-xl">Conte com especialistas para garantir uma declaração segura, rápida e sem complicações.</h2>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1.1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 1.9 }}
            >

              <button className="bg-green-500 md:w-[250px] md:ml-8 flex items-center justify-center gap-1 p-2 text-white rounded-md">
                <FaWhatsapp />
                Entrar em contato
              </button>

            </motion.div>

          </div>

        </div>

      </section>

      {/* sessão 03 */}
      <section className="h-auto w-screen flex flex-col items-center justify-center">

        <div className="w-full h-96 flex justify-between">

          <Image src="/calculadora.png" alt="Calculadora" width={140} height={100} />

          <Image src="/grafico.png" alt="Grafico" width={140} height={100} />

        </div>

        <div className="w-96 h-auto flex flex-col">
          <div className="flex items-center justify-center gap-4 p-4">
            <div>
              <Image src="/atencao.png" alt="Atenção" width={100} height={100} />
            </div>

            <div>
              <h1 className="font-semibold text-2xl">Problema</h1>
              <h2>Declarar o Imposto de Renda pode ser um processo confuso e cheio de detalhes, um erro pode resultar em multas e até cair na malha fina. </h2>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 p-4">
            <div>
              <Image src="/nota.png" alt="Bloco de nota" width={100} height={100} />
            </div>

            <div>
              <h1 className="font-semibold text-2xl">Complicações</h1>
              <h2>Erros na declaração podem gerar pendências com a Receita Federal, resultando em dores de cabeça e possíveis penalidades. </h2>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 p-4">
            <div>
              <Image src="/tempo.png" alt="Tempo" width={100} height={100} />
            </div>

            <div>
              <h1 className="font-semibold text-2xl">Tempo</h1>
              <h2>A correria do dia a dia pode fazer com que você adie a declaração e corra o risco de pagar multas por atraso. </h2>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 p-4">
            <div>
              <Image src="/alvo.png" alt="Alvo" width={100} height={100} />
            </div>

            <div>
              <h1 className="font-semibold text-2xl">Solução</h1>
              <h2>Evite problemas e tenha tranquilidade!
                Entre em contato agora e deixe seu Imposto de Renda nas mãos de especialistas. </h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1.9 }}
            className="w-full flex items-center justify-center"
          >

            <button className="bg-green-500 md:w-[250px] md:ml-8 flex items-center justify-center gap-1 p-1 w-48 text-white rounded-md">
              <FaWhatsapp />
              Entrar em contato
            </button>

          </motion.div>
        </div>

        <div className="mt-4">
          <Image src="/calculadora1.png" alt="Calculadora com grafico" width={200} height={100} />
        </div>

      </section>
    </div>
  );
}
