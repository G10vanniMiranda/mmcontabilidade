
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function test() {
    return (
        <section className="h-screen md:h-screen w-full flex items-center justify-center bg-white text-blue-900">
            {/* sessão 06 */}

            <div className="bg-blue-50 z-10 relative w-full md:flex-1 h-screen border">
                <div className="absolute -left-20 z-50 border-2">
                    <Image src="/calculadora.png" alt="Check" width={180} height={100} />
                </div>
            </div>

            <div className="bg-white flex md:flex-1 h-screen pt-[370px] flex-col">

                <div className="w-full flex flex-col items-center justify-center gap-2 border">

                    <div className="w-80">
                        <h1 className="font-bold text-4xl text-blue-900">Declare seu Imposto de Renda</h1>
                    </div>

                    <div className="w-80">
                        <h2 className="font-bold text-[22.05px] text-blue-600">Com segurança e sem riscos.</h2>
                    </div>

                    <div className="w-80 mt-6">
                        <h1 className="font-medium text-[15px]">Entre em contato agora e deixe seu Imposto de Renda nas mãos de especialistas.</h1>
                    </div>

                    <div className="w-full flex items-center justify-center">
                        <FaWhatsapp />
                    </div>

                </div>

            </div>

            <div className="bg-blue-100 md:flex-1 h-screen items-start">
                <Image src="/grafico.png" alt="Grafico" width={600} height={100} className="w-full" />
            </div>

        </section>
        /* fim sessão 06 */
    )
}