
import styles from '../nosotros/styles/Nosotros.module.css';
import Image from 'next/image';


export default function Nosotros() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Logo + Botón */}
        <div className={styles.header}>
          <Image 
              src="/aqua.png" 
              alt="AQUACOI Logo" 
              width={160} 
              height={60}
              className={styles.logo}
              priority
            />
          <a href="/inicio#contacto" className={styles.button}>CONTÁCTANOS VENTAS</a>
        </div>

        {/* Gota flotante */}
        <div className={styles.iconoGota}>
          <div className={styles.iconoWrapper}>
           <img 
              src="/favicon.png" 
              alt="Gota" 
              className={styles.gota}
            />

          </div>
        </div>

        {/* Título */}
        <div className={styles.titulo}>
          <h2>AQUACOI</h2>
          <p>Hidrotecnología para la Salud</p>
        </div>

        <hr className={styles.separator} />

        {/* Texto descriptivo */}
        <div className={styles.texto}>
          <p>
            Somos un equipo profesional especializado en el tratamiento del agua a través de sistemas descalcificadores y equipos de ósmosis inversa los cuales han sido creados con las tecnologías más innovadoras y de última generación para poder así garantizar el bienestar de los clientes.
          </p>
          <p>
           El éxito de este proyecto se basa en la cercanía y personalización de cada instalación, pudiendo ofrecer la mejor calidad y cubrir las necesidades reales de cada uno de nuestros clientes a través de los sistemas necesarios en cada inmueble, ya sean de osmosis inversa de flujo directo, descalcificadores ecológicos, desinfección con ozono y oxigeno activo, además de distintas opciones entre las cuales se encuentra el hidrogeno como una de las principales novedades en el bienestar de la salud de nuestros clientes evitándoles la necesidad de acumulación de botellas en sus inmuebles debido al agua embotellada, ayudando a la disminución de la contaminación que crea el plástico al medio ambiente. Además de ofrecer un alto ahorro anual en la economía de nuestros clientes al poder ofrecer nuestros servicios a un costo asumible por cualquier persona 
          </p>
         
        </div>
      </div>
    </div>
  );
}
