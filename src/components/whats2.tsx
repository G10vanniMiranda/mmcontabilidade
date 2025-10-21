'use client';

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Whats2() {
    return (
        <div className="fixed bottom-5 mobile-zap-text right-2 z-50 flex items-center w-[130px] md:w-[120px]">
            <Link
                target="_blank"
                href={`https://wa.me/5569984069935?text=Olá vim me pelo site da Contabilidade e gostaria de mais informações sobre a Declaração de Imposto de Renda.`}
            >
                <FaWhatsapp size={38} className="bg-blue-600 text-white h-14 w-14 rounded-full animate-pulse z-10" />
            </Link>
            <h3 className="absolute md:right-[5px] right-[15px] mobile-zap-text z-0 text-white bg-blue-600 animate-pulse w-16 text-md rounded-r-xl p-1 font-semibold">Contato</h3>
        </div>
    );
}