/* ------------> import React from 'react';

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
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

          <div className="benefits-vertical">
            <aside className="register-benefits">
              <h3>BENEFICIOS DE REGISTRO</h3>
              <ul>
                <li>◈ Acceso prioritario a reservas de espacios</li>
                <li>◈ Descuentos exclusivos en membresías</li>
                <li>◈ Gestión de reservas desde tu panel personal</li>
                <li>◈ Acceso a eventos de networking</li>
                <li>◈ Soporte dedicado 24/7</li>
              </ul>
            </aside>
          </div>

          <form id="register-form" onSubmit={handleRegister}>
            <div className="form-group">
              <label className="form-label">Nombre Completo</label>
              <div className="input-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <input type="text" id="reg-firstname" name="firstname" className="form-input" placeholder="Tu nombre" required />
                <input type="text" id="reg-lastname" name="lastname" className="form-input" placeholder="Tu apellido" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="reg-email" className="form-label">Email</label>
              <input type="email" id="reg-email" name="email" className="form-input" placeholder="tu@email.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="reg-phone" className="form-label">Teléfono</label>
              <input type="tel" id="reg-phone" name="phone" className="form-input" placeholder="+34 600 000 000" />
            </div>

            <div className="form-group">
              <label htmlFor="reg-company" className="form-label">Empresa</label>
              <input type="text" id="reg-company" name="company" className="form-input" placeholder="Nombre de tu empresa" />
            </div>

            <div className="form-group">
              <label className="form-label">Seguridad</label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <input type="password" id="reg-password" name="password" className="form-input" placeholder="Contraseña" required />
                <input type="password" id="reg-password-confirm" name="passwordConfirm" className="form-input" placeholder="Confirmar" required />
              </div>
            </div>

            <button type="submit" className="btn-primary">CREAR CUENTA</button>
          </form>

          <a href="#" className="back-link">¿YA TIENES CUENTA? LOGIN</a>
        </div>
      </main>
    </div>
  );
};

export default Register; */ 
