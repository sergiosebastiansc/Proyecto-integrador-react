import Stratum from './stratum.jsx'

function Home() {
  return (
    <section id="home" className="section active">
      <div className="hero-layout">
        <article className="hero-content">
          <span className="data-label" style={{ fontSize: '0.9rem' }}>LA NUEVA INNOVACIÖN DEL TRABAJO</span>
          <h1>
            Espacios
            <br />
            Flexibles
          </h1>
          <p>
            Un entorno de espacio de trabajo refinado arquitectónicamente, diseñado alrededor de los
            principios de transparencia, profundidad y silencio enfocado para tu máximo rendimiento.
          </p>
          <button type="button" className="btn-crystal" onClick={(e) => e.preventDefault()}>
            EXPLORAR MÓDULOS <span>&rarr;</span>
          </button>
        </article>

        <Stratum />
      </div>

      <header className="section-header">
        <span className="data-label">ESPACIOS DISPONIBLES</span>
        <h2>Módulos de Trabajo</h2>
      </header>

      <div className="strata-grid" id="spaces-container"></div>
    </section>
  )
}

export default Home;
