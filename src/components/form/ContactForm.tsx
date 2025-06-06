// components/form/ContactForm.tsx
'use client';

import React, { useState } from 'react';
import styles from './styles/ContactForm.module.css';

interface ContactFormProps {
  onSuccess?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent('Consulta desde el sitio web');
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\n\n` +
      `Email: ${formData.email}\n\n` +
      `Teléfono: ${formData.phone}\n\n` +
      `Mensaje: ${formData.message}`
    );
    
    window.location.href = `mailto:andrescamcho6@gmail.com?subject=${subject}&body=${body}`;
    
    if (onSuccess) onSuccess();
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className={styles.contactSection}>
      <h2 className={styles.contactTitle}>Contáctanos</h2>
      <p className={styles.contactSubtitle}>
        Te acompañamos en todo el proceso de selección, compra e instalación.
      </p>

      <form onSubmit={handleEmailSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nombre y Apellidos</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="Ej: Juan Pérez"
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="ejemplo@correo.com"
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="phone">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="+51 987 654 321"
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="message">Escribe tu mensaje</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className={styles.formTextarea}
            placeholder="¿En qué podemos ayudarte?"
          />
          <button>
            enviar
          </button>
        </div>

      </form>
    </div>
  );
};

export default ContactForm;