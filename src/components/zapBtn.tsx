import { MdWhatsapp } from "react-icons/md";

export default function ZapBtn() {
  return (
    <button className="flex gap-2 items-center bg-green-400 py-3 px-4 text-lg text-slate-50 font-semibold tracking-wider rounded-md animate-pulse">
      <a
        target="_blank"
        href={`https://wa.me/556799998800?text=Olá vim me pelo site da Contabilidade e gostaria de mais informações sobre.`}
        className="flex items-center justify-center gap-2 transition-colors px-4 py-1 rounded-md duration-700"
      >
        <MdWhatsapp className="w-[2.2rem] h-[1.5rem]" />
        Atendimento Agora
      </a>
    </button>
  )
}