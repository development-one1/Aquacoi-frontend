import React from "react";
import "./Differentiators.css";

const Differentiators = () => {
  return (
    <div className="differentiation-container">
  <div className="content-wrapper">
    {/* <!-- Sección izquierda (Diferenciadores) --> */}
    <div className="differentiation-content">
      <h2 className="title">¿En qué nos diferenciamos?</h2>
      <p className="description">
        Nuestros productos ofrecen mucho más que tratamiento de aguas para consumo, 
        son una experiencia diferente para nuestros clientes, 
        vamos a darte 3 razones por que elegir nuestros equipos.
      </p>
      <ul className="benefits-list">
        <li className="benefit-item">
             Diseñados bajos los más estrictos estándares de calidad..</li>
        <li className="benefit-item">

            Con la más novedosa tecnología en tratamiento de agua.</li>
        <li className="benefit-item">
             Asesoramiento durante todo el proceso y servicio post venta.</li>
      </ul>
    </div>

    {/* <!-- Sección derecha (Marca y números) --> */}
    <div className="brand-content">
      <div className="brand-numbers">
        <p className="number">400.</p>
        <p className="number">1888</p>
        <p className="number">56°</p>
      </div>
      <h3 className="brand-name">AQUACO!</h3>
    </div>
  </div>
</div>
  );
};

export default Differentiators;