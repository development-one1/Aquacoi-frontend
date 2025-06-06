import React from 'react';
import styles from './ContactButtons.module.css';

// 1. Actualiza la interfaz para incluir phone y handleWhatsappClick
interface ContactButtonsProps {
  formData: {
    name: string;
    email: string;
    phone: string; // Añadido
    message: string;
  };
  handleSubmit: (e: React.FormEvent) => void;
  handleWhatsappClick: () => void; // Añadido como prop
}

const ContactButtons: React.FC<ContactButtonsProps> = ({
  formData,
  handleSubmit,
  handleWhatsappClick // Recibimos como prop
}) => {
  // Validar que formData existe
  if (!formData) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.contactButtons}>
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={!formData.name || !formData.message || !formData.email}
        >
          ENVIAR POR CORREO
        </button>
        
        <button 
          type="button" 
          className={styles.whatsappButton}
          onClick={handleWhatsappClick} // Usamos la prop
          disabled={!formData.name || (!formData.phone && !formData.email)} // Validación mejorada
        >
          CONTACTAR POR WHATSAPP
        </button>
      </div>
    </form>
  );
};

export default ContactButtons;