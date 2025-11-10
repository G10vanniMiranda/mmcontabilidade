import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MM Contabilidade",
  description: "Escritório de contabilidade em Porto Velho - RO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-blue-900 overflow-x-auto overflow-y-auto`}>
        <Header />
        <div className="pt-11 md:pt-16 flex flex-col justify-center min-h-screen w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
