import React from 'react';
import './App.css';

const Contacto = ({ activa }) => {
  const handleContact = (event) => {
    event.preventDefault();
    alert("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.");
  };

  return (
    <section id="dashboard" className={`section ${activa ? 'active' : ''}`}>
      <header className="section-header">
        <span className="data-label">CONTACTO</span>
        <h2>Ponte en Contacto</h2>
      </header>

      <div className="contenedor-center">
        <aside className="stratum-card" style={{ marginBottom: '2rem' }}>
          <div className="card-header">
            <div className="card-icon" aria-hidden="true">✉</div>
            <span className="data-label">INFORMACIÓN DE CONTACTO</span>
          </div>
          <h3 className="card-title">WorkHub Coworking</h3>
          <p className="card-desc">
            Estamos aquí para ayudarte con cualquier pregunta sobre nuestros espacios y servicios.
          </p>
          <address className="card-meta" style={{ fontStyle: 'normal', flexDirection: 'column', gap: '0.5rem', display: 'flex' }}>
            <span>📍 Calle Principal 123, Ciudad</span>
            <span>📞 +34 900 000 000</span>
            <span>✉ <a href="mailto:hola@workhub.com" style={{ color: 'inherit', textDecoration: 'none' }}>hola@workhub.com</a></span>
          </address>
        </aside>

        <form id="contact-form" onSubmit={handleContact}>
          <div className="form-group">
            <label htmlFor="contact-name" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-input" 
              id="contact-name"
              placeholder="Tu nombre"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="contact-email" className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              id="contact-email"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message" className="form-label">Mensaje</label>
            <textarea
              className="form-input"
              id="contact-message"
              placeholder="¿En qué podemos ayudarte?"
              rows="5"
              required
              style={{ resize: 'vertical' }}
            ></textarea>
          </div>

          <button type="submit" className="btn-primary">ENVIAR MENSAJE</button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
