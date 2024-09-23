import React from 'react';
import '../Style/FormPrincipal.css';

function FormPrincipal() {

  return (
    <div>
      <section className="banner">
        <div className="banner-content">
          <h1>PÁGINA WEB PARA TRANSPORTE</h1>
          <p>Soluciones personalizadas para cada necesidad</p>
        </div>
      </section>

      <section className="about-section">
        <h2>Sobre Nuestra Empresa</h2>
        <p>
          En <strong>Transportes R&G</strong>, nos especializamos en ofrecer soluciones de transporte para
          materiales, basura orgánica, mudanzas y mucho más. Nuestro objetivo es facilitar el transporte
          eficiente y seguro, con un equipo altamente calificado y comprometido. Fundada por <strong>Roy Gerardo Avila</strong>, 
          nuestra empresa se enorgullece de su larga trayectoria y el servicio personalizado que ofrecemos a nuestros clientes.
        </p>
        <div className="services">
          <div className="service-card">
            <h3>Transporte de Materiales</h3>
            <p>Transportamos todo tipo de materiales con seguridad y rapidez.</p>
          </div>
          <div className="service-card">
            <h3>Basura Orgánica</h3>
            <p>Soluciones responsables y ecológicas para el transporte de desechos.</p>
          </div>
          <div className="service-card">
            <h3>Mudanzas</h3>
            <p>Servicios de mudanza eficientes, cuidando cada detalle de su traslado.</p>
          </div>
        </div>
      </section>

  
    </div>
  );
}

export default FormPrincipal;