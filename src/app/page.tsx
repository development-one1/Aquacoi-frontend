'use client';
import { useState } from 'react';
import AboutUs from "@/components/About/AboutUs";
import ContactButtons from "@/components/ButonsActions/ContactButtons";
import Differentiators from "@/components/Differentiators/Differentiators";
import HeroSection from "@/components/HeroSection/HeroSection";
import  Space  from "../components/space/space";

// Define el tipo para las props si no lo tienes ya
interface ContactButtonsProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  handleSubmit: (e: React.FormEvent) => void;
  handleWhatsappClick: () => void;
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí iría la lógica para enviar el email
  };

  const handleWhatsappClick = () => {
    const message = encodeURIComponent(
      `Hola, mi nombre es ${formData.name}\n\n` +
      `Mi consulta: ${formData.message}\n\n` +
      `Contacto: ${formData.phone || formData.email}`
    );
    window.open(`https://api.whatsapp.com/send?phone=34960627090&text=Hola%2C%20te%20contacto%20desde%20la%20web=${message}`, '_blank');
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HeroSection />
        <Differentiators />
        <AboutUs />
        
        <ContactButtons 
          formData={formData}
          handleSubmit={handleSubmit}
          handleWhatsappClick={handleWhatsappClick}
        />
      </main>
    </div>
  );
}