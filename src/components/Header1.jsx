
/* ------------ > import 'bootstrap/dist/css/bootstrap.min.css';


const Header1= () => {
    return (
<>
{/* Insercion navbar */}
/* ------------->  <header id="mainNavWrapper">
  <nav className="navbar navbar-expand-lg" id="mainNav">
    <div className="container-fluid">

      {/* <!-- Logo --> */}
      /* -------- >  <a className="navbar-brand logo" href="#" onClick="switchTab('home', event)">
        WorkHub<span>.Coworking</span>
      </a>

      {/* <!-- Botón hamburguesa --> */}
      /* ----------->  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* <!-- Links --> */}
     /*------------> <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
        <ul className="navbar-nav">

          <li className="nav-item">
            <a className="nav-link" href="#" onClick="switchTab('register', event)">REGÍSTRATE</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#" onClick="switchTab('booking', event)">RESERVA</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#" onClick="switchTab('my-bookings', event)">MIS RESERVAS</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#" onClick="switchTab('dashboard', event)">CONTACTO</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-secondary" href="#" onClick="switchTab('admin', event)">ADMIN</a>
          </li>

        </ul>
      </div>

    </div>
  </nav>
</header>
</>
    )
} 
 



export default Header1;
