import Image from "next/image";

export default function Home() {
  return (
    <main>

      {/* Seção 1 */}
      <section
        className="relative w-full min-h-[80vh] md:min-h-[90vh] overflow-hidden text-white"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/fundo-seçao1.png')",
          }}
        />
        {/* Desktop background override */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/fundo-seçao1.png')",
          }}
        />

        {/* Overlay para contraste do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        {/* Conteúdo */}
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 md:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Imagem da mulher - direita no desktop, acima do texto no mobile */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative z-20">
                <Image
                  src="/mulher-sessao2.png"
                  alt="Profissional de contabilidade"
                  width={640}
                  height={800}
                  priority
                  className="w-[70%] max-w-[360px] md:w-[90%] md:max-w-[520px] h-auto object-contain"
                />
              </div>
            </div>

            {/* Texto - esquerda no desktop, abaixo no mobile */}
            <div className="order-2 md:order-1">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Soluções contábeis completas para sua empresa crescer com segurança
              </h1>
              <p className="mt-4 text-blue-50/90 md:text-lg max-w-xl">
                Confiança, precisão e agilidade para apoiar as decisões do seu negócio.
              </p>
            </div>
          </div>
        </div>

        {/* Gráficos no canto inferior esquerdo, por trás da mulher */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 md:h-56">
          <div className="relative h-full w-full max-w-[1400px] mx-auto">
            <div className="absolute left-0 bottom-0 z-10 opacity-90">
              <Image
                src="/grafico.png"
                alt="Gráfico"
                width={220}
                height={120}
                className="w-40 md:w-56 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}