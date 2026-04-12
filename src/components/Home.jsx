/* -----------> import React from 'react';

const Home = () => {
  return (
    <section id="home" className="section active">
      <div className="hero-layout">
        <article className="hero-content">
          {/* CORRECCIÓN 1: Estilo como objeto y camelCase */}
          /* -----------> <span className="data-label" style={{ fontSize: '0.9rem' }}> 
            LA NUEVA INNOVACIÓN DEL TRABAJO
          </span>

          <h1>Espacios<br /> Flexibles</h1>
          
          <p>
            Un entorno de espacio de trabajo refinado arquitectónicamente, 
            diseñado alrededor de los principios de transparencia, profundidad 
            y silencio enfocado para tu máximo rendimiento.
          </p>
          
          {/* CORRECCIÓN 2: onClick con función flecha */}
          /* -------------> <button 
            className="btn-crystal" 
            onClick={(event) => switchTab('booking', event)}
          >
            EXPLORAR MÓDULOS 
            <span>&rarr;</span>
          </button>
        </article>
      </div>
    </section>
  );
};

export default Home;
