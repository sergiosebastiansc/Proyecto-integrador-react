// ========================================
// COMPONENTE: CarouselHero
// OBJETIVO: Mostrar el carrusel de imágenes del home
// QUÉ TOCAR AQUÍ:
// - Cambiar imágenes
// - Cambiar textos de cada slide
// - Agregar o quitar slides
// ========================================

function CarouselHero() {
  const slides = [
    {
      img: "https://www.batlleiroig.com/wp-content/uploads/2023/11/bir-batlleiroig-1134-oficinas-llacuna-perspectives01.jpg",
      title: "Edificio Principal",
      alt: "Edificio"
    },
    {
      img: "https://img.freepik.com/foto-gratis/moderno-hotel-lujo-recepcion-oficina-salon-sala-reuniones_105762-1772.jpg?semt=ais_hybrid&w=740&q=80",
      title: "Recepción",
      alt: "Recepción"
    },
    {
      img: "https://images.unsplash.com/photo-1606836576983-8b458e75221d?q=80&w=1170&auto=format&fit=crop",
      title: "Cafetería",
      alt: "Cafetería"
    },
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      title: "Zona de Networking",
      alt: "Zona Networking"
    }
  ];

  return (
    <div id="envCarousel" className="carousel slide mt-4" data-bs-ride="carousel">
      <div className="carousel-inner rounded-4 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={slide.img}
              className="d-block w-100"
              alt={slide.alt}
            />
            <div className="carousel-caption d-none d-md-block">
              <h6>{slide.title}</h6>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#envCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#envCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default CarouselHero;