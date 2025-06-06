"use client";
import Link from "next/link";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section con imagen de fondo */}
      <section className="hero">
        <div className="hero-content-wrapper">
          <div className="hero-text">
            <h1>
              <strong>Agua de Calidad</strong><br />
              <span className="subheadline">a tu alcance</span>
            </h1>
            <p>
              Contamos con una amplia gama de sistemas de tratamiento y filtrado de agua,
               diseñados para ofrecerte un consumo de agua totalmente purificada y saludable.
            </p>
            <div className="hero-buttons">
              <Link href="/products" className="btn btn-primary">💧 PRODUCTOS</Link>
              <Link href="https://api.whatsapp.com/send?phone=34960627090&text=Hola%2C%20te%20contacto%20desde%20la%20web" 
                className="btn btn-secondary">📞 CONTÁCTANOS</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cards que se superponen parcialmente */}
      <div className="overlapping-cards-container">
        <div className="overlapping-cards">
          {/* Card Hogar */}
          <div className="overlap-card">
            <h3>HOGAR</h3>
            <p>
              Aquacoi ofrece una gran variedad de soluciones destinadas al ahorro,
               el bienestar de los tuyos y el cuidado de tu hogar,
               creando así el entorno perfecto entre calidad, salud y ahorro.
            </p>
            <Link href="/hogar" className="card-link">MÁS INFORMACIÓN</Link>
          </div>

          {/* Card Empresas */}
          <div className="overlap-card">
            <h3>EMPRESAS</h3>
            <p>
             Aquacoi Soluciones para empresas brinda varias posibilidades de ofrecer agua de calidad tanto a empleados como a clientes, 
             de una manera cómoda y sencilla en todos tus ambientes profesionales.
            </p>
            <Link href="/empresas" className="card-link">MÁS INFORMACIÓN</Link>
          </div>

          {/* Card Hostelería */}
          <div className="overlap-card">
            <h3>Hostelería y Restaurantes</h3>
            <p>
              Aquacoi ayuda al comercio hostelero impulsando el ahorro y la reducción de nuestra huella en el medio ambiente, 
              brindando soluciones sostenibles para ofrecer a tus clientes agua filtrada de calidad, 
              sin necesidad de residuos plásticos, almacenaje, transporte, etc.
            </p>
            <Link href="/hosteleria" className="card-link">MÁS INFORMACIÓN</Link>
          </div>
        </div>
      </div>
      {/* Aqui termina todas las cards */}
    </>
  );
}