import Whats from "@/components/whats";
import Image from "next/image";

export default function test() {
    return (
        <section className="h-screen md:h-screen w-full flex items-center justify-center bg-slate-800">
            {/* sessão 06 */}

            <div className="bg-amber-700 z-10 relative w-full md:flex-1 h-screen border">
                <div className="absolute -left-20 z-50 border-2">
                    <Image src="/calculadora.png" alt="Check" width={180} height={100} />
                </div>
            </div>

            <div className="bg-red-500 flex md:flex-1 h-screen pt-[370px] flex-col">

                <div className="w-full flex flex-col items-center justify-center gap-2 border">

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

            <div className="bg-green-600 md:flex-1 h-screen items-start">
                <Image src="/grafico.png" alt="Grafico" width={600} height={100} className="w-full" />
            </div>

        </section>
        /* fim sessão 06 */
    )
}