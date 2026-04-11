import React from 'react';

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register-page">
      <main className="main-content">
        <div className="stratum-card">
          
          <header className="card-header">
            <span className="data-label">CREAR CUENTA // WORKHUB</span>
            <span className="status-dot"></span>
          </header>

          <h2 className="card-title">Únete a WorkHub</h2>
          <p className="card-desc">Completa tus datos para acceder a la plataforma.</p>

          {/* Sección de beneficios ahora aparece arriba del formulario, vertical */}
          <div className="benefits-vertical">
            <ul>
                <li>◈ Acceso prioritario a salas</li>
                <li>◈ Descuentos exclusivos</li>
                <li>◈ Soporte técnico 24/7</li>
            </ul>
          </div>

          <form id="register-form" onSubmit={handleRegister}>
            <div className="form-group">
              <label className="form-label">Nombre Completo</label>
              <div className="input-row">
                <input type="text" name="firstname" className="form-input" placeholder="Nombre" required />
                <input type="text" name="lastname" className="form-input" placeholder="Apellido" required />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-input" placeholder="tu@email.com" required />
            </div>

            <div className="form-group">
              <label className="form-label">Seguridad</label>
              <input type="password" name="password" className="form-input" placeholder="Contraseña" required style={{marginBottom: '1rem'}} />
              <input type="password" name="passwordConfirm" className="form-input" placeholder="Confirmar Contraseña" required />
            </div>

            <button type="submit" className="btn-primary">CREAR CUENTA</button>
          </form>

          <a href="#" className="back-link">¿YA TIENES CUENTA? LOG IN</a>
        </div>
      </main>
    </div>
  );
};

export default Register;