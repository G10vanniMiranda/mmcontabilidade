import Image from "next/image";


export default function Home() {
  return (
    <div>
      {/* sessão 01 */}
      <section className="h-screen w-screen flex items-center justify-center bg-[url(/infopage-mobile.png)] bg-cover bg-center">

        <div className="flex flex-col gap-4 max-w-72 absolute bottom-36">
          <Image src="/logo.png" alt="Logo MM" width={100} height={24} />

          <h1 className="text-4xl font-semibold">Precisando declarar seu Imposto de Renda?</h1>

          <div className="w-40">
            <h2 className="text-blue-500">Nós Cuidamos de Tudo Para Você! </h2>
          </div>

        </div>

      </section>

      {/* sessão 01 */}
      <section className="h-[1080px] w-screen flex items-center justify-center bg-[url(/sessao2.png)] bg-cover bg-center">
      </section>
    </div>
  );
}
