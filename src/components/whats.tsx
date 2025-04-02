import { FaWhatsapp } from "react-icons/fa";

export default function Whats() {
    return (
        <div className="fixed bottom-4 right-4">
            <a href="https://wa.me/5584999999999" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={50} color="green" />
            </a>

            <button className="bg-green-500 w-[244px] md:w-[250px] md:ml-8 flex items-center justify-center gap-1 p-2 text-white rounded-md mt-16">
                <FaWhatsapp className="w-5 h-6" />
                <h1 className="font-medium text-2xl">Entrar em contato</h1>
            </button>
        </div>

    );
}