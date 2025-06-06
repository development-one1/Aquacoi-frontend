import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/nav/navbar";
import  Space from "../components/space/space";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aquacoi",
  description: "Aquacoi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        {/* Barra de navegación */}
        <Navbar />
        
        {/* Contenido principal con espacio adecuado */}
        <main className="flex-1 px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 max-w-7xl mx-auto w-full">
          {children}
        </main>
        
        {/* Espaciado antes del footer */}
        <div className="h-16 md:h-24 bg-transparent" aria-hidden="true"></div>
        
        {/* footer */}
        <Space/>
        <Footer />
        
      </body>
    </html>
  );
}