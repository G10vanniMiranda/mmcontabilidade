import { FaWhatsapp } from "react-icons/fa";

export default function Whats() {
    return (
        <div>
            <button className="bg-green-500 w-[244px] md:w-[250px] md:ml-8 flex items-center justify-center gap-1 p-2 text-white rounded-md mt-16">
                <FaWhatsapp className="w-5 h-6" />
                <h1 className="font-medium text-2xl">Entrar em contato</h1>
            </button>
        </div>
    );
}