'use client';

import { motion } from "motion/react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Whats() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1.9 }}
        >

            <Link
                href={`https://wa.me/5569984069935?text=Olá, vim me pelo site da MM Contabilidade e gostaria de mais informações sobre a Declaração de Imposto de Renda.`}
                className="bg-blue-600 hover:bg-blue-700 md:w-[250px] md:ml-8 flex items-center w-fit justify-center gap-1 p-1 px-3 text-white rounded-md"
            >
                <FaWhatsapp />
                Entrar em contato
            </Link>

        </motion.div>
    );
}