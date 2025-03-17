"use client";

import Image from "next/image";
import { MdOutlineSupportAgent } from "react-icons/md";
import ZapBtn from "../components/zapBtn";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";

import {
  ChevronLeft,
  ChevronRight,
  Syringe,
  Clock,
  Target,
  OctagonAlert,
  Gauge,
  Lightbulb,
} from "lucide-react";

import useEmblaCarousel from "embla-carousel-react"; // passo 1
import { motion } from "motion/react";

const services = [ // passo 2 -- SESSÃO 2
  {
    title: "Problema",
    description:
      "Declarar o Imposto de Renda pode ser um processo confuso e cheio de detalhes. Um erro pode resultar em multas e até cair na malha fina. Mas não se preocupe, estamos aqui para ajudar!",
    icon: <OctagonAlert />
  },
  {
    title: "Complicações",
    description:
      "Erros na declaração podem gerar pendências com a Receita Federal, resultando em dores de cabeça e possíveis penalidades.",
    icon: <Syringe />, //Falta icone
  },
  {
    title: "Tempo",
    description:
      "A correria do dia a dia pode fazer com que você adie a declaração e corra o risco de pagar multas por atraso.",
    icon: <Clock />
  },
  {
    title: "Precisão",
    description:
      "Nossa equipe cuida de tudo para garantir que sua declaração seja feita corretamente, sem erros ou riscos desnecessários.",
    icon: <Target />
  },
  {
    title: "Agilidade",
    description:
      "Com um processo simples e rápido, você envia seus documentos e nós resolvemos o resto, sem complicação!",
    icon: <Gauge />
  },
  {
    title: "Solução",
    description:
      "Evite problemas e tenha tranquilidade! Entre em contato agora e deixe seu Imposto de Renda nas mãos de especialistas.",
    icon: <Lightbulb />,
    linkText:
      "Olá, vi no site sobre Hotel para pets e gostaria de mais informações.",
  },
];
export default function Home() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ // passo 3
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768)": { slidesToScroll: 3 },
    },
  });

  // passo 3 criando funções
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div>
      {/* sessão 1 vamos melhorar */}
      <section
        className="flex flex-col justify-around items-center px-10 md:px-20 h-screen w-screen"
        style={{
          backgroundImage: `url(./sessao1.png)`,
          width: "100",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 2 }}
        >
          <Image src="/logo-principal.svg" width={100} height={100} alt="" />
        </motion.div>

        {/* Sesão 1 item 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: -100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: 100 }}
          transition={{ duration: 2 }}
        >
          <div
            className="flex items-center md:w-[600px]"
            style={{
              backgroundColor: `rgba(62, 62, 60, 0.5) `,
              borderRadius: 20,
            }}
          >
            <Image
              src="/imposto.png"
              width={200}
              height={100}
              alt=""
              className="rounded-l-2xl w-24 h-24"
            />
            <h2 className="p-5 md:text-2xl text-xl font-semibold text-center">
              Precisa declarar seu imposto de renda?
            </h2>
          </div>
        </motion.div>

        {/* Sesão 1 item 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: -100 }}
          transition={{ duration: 2 }}
        >
          <div
            className="flex items-center md:w-[600px]"
            style={{
              backgroundColor: `rgba(62, 62, 60, 0.5) `,
              borderRadius: 20,
            }}
          >
            <Image
              src="/multa.png"
              width={200}
              height={100}
              alt=""
              className="rounded-l-2xl w-24 h-24"
            />
            <h2 className="p-5 md:text-2xl text-xl font-semibold text-center">
              Evite multas! Deixe especialistas.
            </h2>
          </div>
        </motion.div>

        {/* Sesão 1 item 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: -100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: 100 }}
          transition={{ duration: 2 }}
        >
          <div
            className="flex items-center md:w-[600px]"
            style={{
              backgroundColor: `rgba(62, 62, 60, 0.5) `,
              borderRadius: 20,
            }}
          >
            <Image
              src="/hora.png"
              width={200}
              height={100}
              alt=""
              className="rounded-l-2xl w-24 h-24"
            />
            <h2 className="p-5 md:text-2xl text-xl font-semibold text-center">
              Não deixe para última hora.
            </h2>
          </div>
        </motion.div>

        {/* Sesão 1 item 4 */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: -100 }}
          transition={{ duration: 2 }}
        >
          <div
            className="flex items-center md:w-[600px]"
            style={{
              backgroundColor: `rgba(62, 62, 60, 0.5) `,
              borderRadius: 20,
            }}
          >
            <Image
              src="/equipe.png"
              width={200}
              height={100}
              alt=""
              className="rounded-l-2xl w-24 h-24"
            />
            <h2 className="p-5 md:text-2xl text-xl font-semibold text-center">
              Nossa equipe esta preparada.
            </h2>
          </div>
        </motion.div>

        {/* Btn Whats */}
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: -100 }}
          transition={{ duration: 2 }}
        >
          <ZapBtn />
        </motion.div>

      </section>

      {/* sessão 2 */}
      <section className=" py-16 h-auto bg-blue-300">
        <div className="container mx-auto flex flex-col justify-center items-center px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1.5 }}
            className="top-10 text-center"
          >
            <div className="flex items-center md:w-[600px] mb-10 bg-[#1E293B] text-white rounded-l-3xl rounded-md">
              <Image
                src="/logo-principal.svg"
                width={200}
                height={100}
                alt=""
                className="w-24 h-24"
              />
              <h2 className="p-5 md:text-2xl text-xl font-semibold text-center">
                Nosso compromisso
              </h2>
            </div>
          </motion.div>

          <div className="relative w-full">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3 md:w-36 w-20"
                  >
                    <article className="bg-[#1E293B] text-white rounded-2xl space-y-4 h-full flex flex-col">
                      <div className="flex-1 flex items-start justify-between flex-col">
                        <div className="flex flex-row items-center justify-between gap-3 mb-10 bg-green-500 w-full px-10 p-3 rounded-t-lg">
                          <span className="text-3xl">{item.icon}</span>
                          <div>
                            <h3 className="text-xl md:3xl w-full">
                              {item.title}
                            </h3>
                          </div>
                          <span></span>
                        </div>

                        <div>
                          <p className="text-gray-400 text-md select-none px-8">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-center mb-5">
                        <ZapBtn />
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="bg-[#0f141d] flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 cursor-pointer"
              onClick={scrollPrev}
            >
              <ChevronLeft className="w-[2.2rem] h-[1.5rem] text-slate-400" />
            </button>

            <button
              className="bg-[#0f141d] flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 cursor-pointer"
              onClick={scrollNext}
            >
              <ChevronRight className="w-[2.2rem] h-[1.5rem] text-slate-400" />
            </button>
          </div>

          {/* Leão */}
          <div className="flex flex-col md:flex-row md:w-full items-center mt-10 ">

            <motion.div
              initial={{ y: 300, scale: 0 }}
              whileInView={{ y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 2 }}
              className="flex-1"
            >
              <Image
                src="/home-leao2.jpg"
                width={500}
                height={100}
                alt=""
                className="flex w-full h-full rounded-2xl"
              />
            </motion.div>

            <div className="flex-1 p-10 flex flex-col gap-14">

              <motion.div
                initial={{ opacity: 0, scale: 0, x: 100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0, x: -100 }}
                transition={{ duration: 2 }}
              >
                <div className="flex gap-2 bg-amber-600 h-40 p-2 rounded-l-4xl items-center">

                  <div className="bg-green-600 w-60 md:h-36 h-20 rounded-full"> </div>

                  <div className="p-2  flex items-center">
                    <h2>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus pariatur sunt, odit illum cupiditate voluptate
                    </h2>
                  </div>

                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0, x: -100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0, x: 100 }}
                transition={{ duration: 2 }}
              >
                <div className="flex gap-2 bg-amber-600 h-40 p-2 rounded-r-4xl items-center">
                  <div className="p-2  flex items-center">
                    <h2>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus pariatur sunt, odit illum cupiditate voluptate
                    </h2>
                  </div>
                  <div className="bg-green-600 w-60 md:h-36 h-20 rounded-full"> </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* sessão 3 */}
      <section className="flex flex-col md:h-screen pt-10 items-center px-10 md:px-20 h-auto w-full bg-blue-500">
        <div
          className="flex items-center gap-5 mb-10"
          style={{
            backgroundColor: `rgba(226, 207, 59, 0.2)`,
            borderEndEndRadius: 20,
            borderEndStartRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          <Image src="/logo-principal.svg" width={100} height={100} alt="" />
          <h2 className="text-2xl font-semibold tracking-wider pr-7 text-white">
            Nosso compromisso
          </h2>
        </div>

        <div className="flex items-start">
          <Image
            src="/sessao3.png"
            width={900}
            height={400}
            alt=""
            className="flex flex-1 h-[516px]"
          />

          <div className="flex flex-col md:flex-1 w-full gap-10 justify-center pl-20">
            <Accordion
              type="single"
              collapsible
              className="md:w-[600px] w-full flex gap-10 flex-col justify-center items-center "
            >
              <AccordionItem value="1" className="w-full md:pt-2 pt-16 ">
                <AccordionTrigger
                  className="text-2xl w-full px-10 flex items-center justify-start"
                  style={{ backgroundColor: `rgba(219, 233, 212, 0.3)` }}
                >
                  <div className="p-2 border-r-4 border-dashed border-blue-500">
                    {" "}
                    <MdOutlineSupportAgent
                      size={40}
                      color="blue"
                      className="mr-7"
                    />{" "}
                  </div>
                  Contato
                </AccordionTrigger>
                <AccordionContent
                  className="text-lg pl-2"
                  style={{ backgroundColor: `#ebf0e94c` }}
                >
                  Você entra em contato e nos envia seus documentos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="w-full md:pt-2 pt-16">
                <AccordionTrigger
                  className="text-2xl px-10 flex items-center justify-start"
                  style={{ backgroundColor: `rgba(219, 233, 212, 0.3)` }}
                >
                  <div className="p-2 border-r-4 border-dashed border-blue-500">
                    {" "}
                    <Image
                      src="/card-target.png"
                      width={40}
                      height={40}
                      alt=""
                      className="mr-7"
                    />{" "}
                  </div>
                  Análise
                </AccordionTrigger>
                <AccordionContent
                  className="text-lg pl-2"
                  style={{ backgroundColor: `#ebf0e94c` }}
                >
                  Nossa equipe analisa e prepara sua declaração em tempo
                  recorde.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="w-full md:pt-2 pt-16">
                <AccordionTrigger
                  className="text-2xl px-10  flex items-center justify-start"
                  style={{ backgroundColor: `rgba(219, 233, 212, 0.3)` }}
                >
                  <div className="p-2 border-r-4 border-dashed border-blue-500">
                    {" "}
                    <Image
                      src="/card-edit.png"
                      width={40}
                      height={40}
                      alt=""
                      className="mr-7"
                    />{" "}
                  </div>
                  Conferência
                </AccordionTrigger>
                <AccordionContent
                  className="text-lg pl-2"
                  style={{ backgroundColor: `#ebf0e94c` }}
                >
                  Revisamos todos os detalhes para garantir precisão.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="w-full md:pt-2 pt-16 pb-20"
              >
                <AccordionTrigger
                  className="text-2xl px-10 flex items-center justify-start"
                  style={{ backgroundColor: `rgba(219, 233, 212, 0.3)` }}
                >
                  <div className="p-2 border-r-4 border-dashed border-blue-500">
                    {" "}
                    <Image
                      src="/card-flash.png"
                      width={40}
                      height={40}
                      alt=""
                      className="mr-7"
                    />{" "}
                  </div>
                  Envio
                </AccordionTrigger>
                <AccordionContent
                  className="text-lg pl-2"
                  style={{ backgroundColor: `#ebf0e94c` }}
                >
                  Enviamos para a Receita Federal e você recebe o comprovante.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* sessão 4 MELHOR */}
      <section className="flex flex-col md:pt-10 items-center px-10 md:px-20 md:h-screen h-auto w-screen bg-blue-300">
        <div
          className="flex items-center gap-5 mb-10"
          style={{
            backgroundColor: `rgba(226, 207, 59, 0.2)`,
            borderEndEndRadius: 20,
            borderEndStartRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          <Image src="/logo-principal.svg" width={100} height={100} alt="" />
          <h2 className="text-2xl font-semibold tracking-wider pr-7">
            Soluções Serviços
          </h2>
        </div>

        <div className="flex gap-10 mt-10 mb-10 flex-col md:flex-row">
          <div className="box-item flex flex-col gap-10 ">
            {/* item-01 */}
            <div className="box-item flex justify-start items-center h-16">
              <div className="box-icon bg-blue-700 p-2 w-16 rounded-l-xl h-16 flex items-center">
                <Image
                  src="/item-01.svg"
                  width={50}
                  height={50}
                  alt=""
                  className=""
                />
              </div>
              <div className="box-body bg-blue-400 p-2 w-full rounded-r-xl h-16 flex items-center">
                Declaração 100% correta e sem riscos com profissionais
                experiêntes.
              </div>
            </div>

            {/* item-02 */}
            <div className="box-item flex justify-start items-center h-16">
              <div className="box-icon bg-blue-700 p-2 w-16 rounded-l-xl h-16 flex items-center">
                <Image
                  src="/item-02.svg"
                  width={50}
                  height={50}
                  alt=""
                  className=""
                />
              </div>
              <div className="box-body bg-blue-400 p-2 w-full rounded-r-xl h-16 flex items-center">
                Atendimento rápido e personalizado de acordo com a necessidade
                de cada cliente
              </div>
            </div>

            {/* item-03 */}
            <div className="box-item flex justify-start items-center h-16">
              <div className="box-icon bg-blue-700 p-2 w-16 rounded-l-xl h-16 flex items-center">
                <Image
                  src="/item-03.svg"
                  width={50}
                  height={50}
                  alt=""
                  className=""
                />
              </div>
              <div className="box-body bg-blue-400 p-2 w-full rounded-r-xl h-16 flex items-center">
                Declaração 100% correta e sem riscos com profissionais
                experiêntes.
              </div>
            </div>

            {/* item-04 */}
            <div className="box-item flex justify-start items-center h-16 mb-10">
              <div className="box-icon bg-blue-700 p-2 w-16 rounded-l-xl h-16 flex items-center">
                <Image
                  src="/item-04.svg"
                  width={50}
                  height={50}
                  alt=""
                  className=""
                />
              </div>
              <div className="box-body bg-blue-400 p-2 w-full rounded-r-xl h-16 flex items-center">
                Declaração 100% correta e sem riscos com profissionais
                experiêntes.
              </div>
            </div>
          </div>

          <Image
            src="/sessao4.png"
            width={900}
            height={400}
            alt=""
            className="flex flex-1 md:h-[380px] mb-10 rounded-tl-4xl rounded-br-4xl"
          />
        </div>
      </section>

      {/* sessão 5 MELHOR */}
      <section className="flex flex-col pt-10 items-center px-10 md:px-20 h-auto w-screen bg-blue-500 pb-10">
        <div
          className="flex items-center gap-5 mb-10"
          style={{
            backgroundColor: `rgba(226, 207, 59, 0.2)`,
            borderEndEndRadius: 20,
            borderEndStartRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          <Image src="/logo-principal.svg" width={100} height={100} alt="" />
          <h2 className="text-2xl font-semibold tracking-wider pr-7">
            Benefícios do Serviço
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 mb-5 ">
          <div className="box-item1  flex flex-1">
            <Image src="/image-final.svg" width={400} height={100} alt="" />
          </div>
          <div className="box-item2 flex flex-1 flex-col justify-around items-center md:text-3xl text-2xl text-center bg-white px-2 rounded-l-4xl">
            <h3 className="border-b-4">📲  Não corra Riscos!</h3>
            <h3 className="py-3"> 📲  Entre em contato agora e faça sua declaração com segurança! </h3>
            <div> 📲 Clique no botão abaixo e fale com um especialista!
              <div className="flex animate-bounce md:ml-0 ml-28">👇</div>
            </div>
          </div>
        </div>
        <ZapBtn />
      </section>
    </div>
  );
}
