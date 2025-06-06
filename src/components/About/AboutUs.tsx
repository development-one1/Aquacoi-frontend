'use client';
import React from 'react';
import styles from './styles/AboutUs.module.css';
import ContactForm from '../form/ContactForm';


const AboutUs: React.FC = () => {

  

  const handleWhatsappClick = () => {
    window.open('https://api.whatsapp.com/send?phone=34960627090&text=Hola%2C%20te%20contacto%20desde%20la%20web', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'andrescamcho6@gmail.com'; 
    // mailto:info@aquacoi.com
  };

  return (
    <section className={styles.aboutUs}>
      <div className={styles.container}>
        <h1 className={styles.title}>Acerca de Nosotros</h1>
        
        <p className={styles.intro}>
          Somos un equipo profesional especializado en el tratamiento del agua a través de descalcificadores 
          y equipos de ósmosis inversa los cuales han sido creados usando tecnologías innovadoras y de ultima 
          generación. Nuestro proyecto se soporta en 3 pilares.
        </p>

        <div className={styles.pillars}>
          <div className={styles.pillar}>
            <div className={styles.pillarContent}>
              <h2 className={styles.pillarTitle}>Diseño</h2>
              <div className={styles.pillarDivider}></div>
              <p className={styles.pillarText}>
                Nuestros equipos son de alta calidad y desempeño impecable, contamos con profesionales en el área que asisten su diseño y mejoras.
              </p>
            </div>
          </div>

          <div className={styles.pillar}>
            <div className={styles.pillarContent}>
              <h2 className={styles.pillarTitle}>Técnico</h2>
              <div className={styles.pillarDivider}></div>
              <p className={styles.pillarText}>
                Los equipos se instalan por parte de nuestro personal, lo que garantizan su correcta funcionalidad 
                y ofrece aprovechar al 100% cada uno de ellos.
              </p>
            </div>
          </div>

          <div className={styles.pillar}>
            <div className={styles.pillarContent}>
              <h2 className={styles.pillarTitle}>Científico</h2>
              <div className={styles.pillarDivider}></div>
              <p className={styles.pillarText}>
                Mantenemos investigación permanente y actualización de nuestros productos para encontrarnos siempre a la vanguardia en tecnología.
              </p>
            </div>
          </div>
        </div>
        {/* Aqui iria este formulario el de la imagen compartida */}
        <ContactForm />
      </div>
    </section>
  );
};

export default AboutUs;