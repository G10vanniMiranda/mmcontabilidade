'use client'

import Whats from "@/components/whats";
import Whats2 from "@/components/whats2";
import { motion } from "motion/react";
import Image from "next/image";

export default function Imposto() {
    // position: static, absolute, relative, fixed, sticky 
    // flex: gap-0, flex-row, flex-col, items-center, justify-center
    return (
        <div className="w-screen max-w-[1400px] mx-auto bg-white text-blue-900">

            <div className="mobile-container overflow-hidden" id="mobile-container">

                {/* sessão 01 */}
                <section className="mobile-session-1 h-[50vh] md:h-[70vh] w-full flex items-center mb-52">

                    <div className="mobile-content-session-1 flex flex-col gap-2 w-72 h-fit z-50 ml-44">

                        <Image src="/logo.svg" alt="Logo MM" width={500} height={500} quality={100} className="w-52 " />

                        <h1 className="session-1-description-1 text-5xl md:text-4xl font-bold">Precisando declarar seu Imposto de Renda?</h1>

                        <div className="w-44">
                            <h2 className="session-1-description-2 text-blue-500 text-[26px] md:text-[18px] font-medium">Nós Cuidamos de Tudo Para Você!</h2>
                        </div>

                    </div>

                </section>

                {/* sessão 02 */}
                <section className="mobile-session-2 h-[50vh] md:h-[45vh] md:mt-0 w-full flex items-center justify-center">

                    <div className="w-screen h-auto flex flex-col md:flex-row items-center
              justify-center md:justify-start gap-6 p-8 mb-36 ">

                        <Image className="md:mt-0 mobile-image-session-2 mt-80 md:ml-10 w-full md:w-72 h-[50vh] " src="/mulher-sessao2.png" alt="Mulher com a mão na cabeça" width={700} height={100} />

                        <div className="flex flex-col gap-6 md:w-[400px]">

                            <h1 className="text-6xl font-semibold text-blue-900">Evite dores de cabeça!</h1>

                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1.9 }}
                            >

                                <h2 className="text-blue-900 text-xl">Conte com especialistas para garantir uma declaração segura, rápida e sem complicações.</h2>
                            </motion.div>
                            <Whats />
                        </div>
                    </div>

                </section>
                {/* <Image src="/logo.svg" alt="Logo MM" width={500} height={500} quality={100} className="w-52 absolute left-10 md:-bottom-20" /> */}
            </div>

            {/* sessão 03 */}
            <section className="h-auto overflow-hidden w-screen flex flex-col items-center justify-center md:justify-between bg-white text-blue-900">

                <div className="w-full h-96 flex justify-between">

                    <Image src="/calculadora.png" alt="Calculadora" width={140} height={100} />

                    <Image src="/grafico.png" alt="Grafico" width={140} height={100} />

                </div>

                <div className="w-96 h-auto flex flex-col md:w-[600px]">
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

                    <Whats />

                </div>

                <div className="mt-4">
                    <Image src="/calculadora1.png" alt="Calculadora com grafico" width={200} height={100} />
                </div>

            </section>

            {/* sessão 04 */}
            <section className="h-screen overflow-hidden w-full flex flex-col items-center justify-center gap-4 pt-96
  bg-[url(/busines.png)] md:bg-[url(/busines-desck.png)] bg-cover bg-center text-blue-900">

                <div className="flex flex-col items-center justify-center">

                    <div className="flex items-center justify-center gap-4">

                        <div className="w-11">
                            <Image src="/dev.png" alt="Desenvolvedor" width={50} height={100} />
                        </div>

                        <div>
                            <h1 className="font-bold text-3xl">Como funciona?</h1>
                        </div>

                    </div>

                    <div className="w-56 flex items-center justify-center gap-4">

                        <div className="w-11">
                            <Image src="/cadeado.png" alt="Cadeado" width={50} height={100} />
                        </div>

                        <div>
                            <h1 className=""> Segurança e sigilo total das suas informações </h1>
                        </div>

                    </div>

                </div>

                <div className="w-72 h-auto flex flex-col items-center justify-center gap-2">

                    <div className="flex items-center justify-center gap-4">
                        <div className="w-11">
                            <Image src="/confirm.png" alt="Confirmação" width={50} height={100} />
                        </div>

                        <div className="w-64">
                            <h1 className="font-semibold text-2xl">Contato e envio</h1>

                            <h2>Você entra em contato e nos envia seus documentos.</h2>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <div className="w-11">
                            <Image src="/confirm.png" alt="Confirmação" width={50} height={100} />
                        </div>

                        <div className="w-64">
                            <h1 className="font-semibold text-2xl">Conferência</h1>

                            <h2>Revisamos todos os detalhes para garantir precisão.</h2>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <div className="w-11">
                            <Image src="/confirm.png" alt="Confirmação" width={50} height={100} />
                        </div>

                        <div className="w-64">
                            <h1 className="font-semibold text-2xl">Análise e Preparação</h1>

                            <h2>Nossa equipe analisa e prepara sua declaração.</h2>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <div className="w-11">
                            <Image src="/confirm.png" alt="Confirmação" width={50} height={100} />
                        </div>

                        <div className="w-64">
                            <h1 className="font-semibold text-2xl">Envio e Comprovante</h1>

                            <h2>Enviamos para a Receita Federal e você recebe o comprovante.</h2>
                        </div>
                    </div>

                </div>

            </section>

            {/* sessão 05 */}
            <section className="h-screen overflow-hidden w-screen flex flex-col items-center justify-center gap-8 pt-80
  bg-[url(/mulher-sessao5.png)] md:bg-[url(/mulher-sessao5-desk.png)] bg-cover bg-center text-blue-900">

                <div className="w-80 flex items-center justify-center gap-4">

                    <Image src="/comprimento.png" alt="Comfirmação" width={50} height={100} />

                    <h1 className="font-bold text-3xl">Por que <br /> nos escolher?</h1>

                </div>

                <div className="w-72 h-auto flex flex-col gap-4">

                    <div className="w-auto flex items-center gap-4">

                        <div className="w-11">
                            <Image src="/confirm.png" alt="Check" width={50} height={100} />
                        </div>

                        <h1 className="font-semibold spaced-text w-64">Declaração 100% <br /> correta e sem riscos </h1>

                    </div>

                    <div className="flex items-center gap-4">

                        <div className="w-11">
                            <Image src="/confirm.png" alt="Check" width={50} height={100} />
                        </div>

                        <h1 className="font-semibold spaced-text w-64">Atendimento rápido e personalizado </h1>

                    </div>

                    <div className="flex items-center gap-4">

                        <div className="w-11">
                            <Image src="/confirm.png" alt="Check" width={50} height={100} />
                        </div>

                        <h1 className="font-semibold spaced-text w-64">Análise detalhada para garantir restituição máxima </h1>

                    </div>

                    <div className="flex items-center gap-4">

                        <div className="w-11">
                            <Image src="/confirm.png" alt="Check" width={50} height={100} />
                        </div>

                        <h1 className="font-semibold spaced-text w-64">Suporte completo em caso de dúvidas </h1>

                    </div>

                    <div className="flex items-center gap-4">

                        <div className="w-11">
                            <Image src="/confirm.png" alt="Check" width={50} height={100} />
                        </div>

                        <h1 className="font-semibold spaced-text w-64">Segurança e sigilo total das suas informações </h1>

                    </div>

                </div>

            </section>

            {/* sessão 06 */}
            <section className="h-screen md:h-[60vh] w-full flex items-center justify-center bg-white text-blue-900">

                <div className="relative z-10 w-full md:flex-1 h-screen bg-blue-50">
                    <div className="absolute z-50 bottom-44 -left-20">
                        <Image src="/calculadora.png" alt="Check" width={180} height={100} />
                    </div>
                </div>

                <div className="flex md:flex-1 h-screen pt-[370px] flex-col bg-white">

                    <div className="w-full flex flex-col items-center justify-center gap-2">

                        <div className="w-80">
                            <h1 className="font-bold text-4xl">Declare seu Imposto de Renda</h1>
                        </div>

                        <div className="w-80">
                            <h2 className="font-bold text-[22.05px] text-blue-600">Com segurança e sem riscos.</h2>
                        </div>

                        <div className="w-80 mt-6">
                            <h1 className="font-medium text-[15px]">Entre em contato agora e deixe seu Imposto de Renda nas mãos de especialistas.</h1>
                        </div>

                        <div className="w-full flex items-center justify-center">
                            <Whats />
                        </div>

                    </div>

                </div>

                <div className="md:flex-1 h-screen items-start relative bg-blue-100">
                    <div className="absolute z-50 top-0 -right-20">
                        <Image src="/grafico.png" alt="Grafico" width={600} height={100} className="w-full" />
                    </div>
                </div>

            </section> {/* fim sessão 06 */}

            <Whats2 />
        </div >
    );
}
