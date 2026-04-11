import React, { useState } from 'react';
import './App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("--- Datos de Ingreso (React) ---");
    console.log("Email:", email); 
    console.log("Password:", pass); 

    alert("¡Ingreso exitoso! Bienvenido");


    window.location.href = "/Registro"; 
  };

  return (
    <main>
      <div className="login-wrapper">
        <form id="registroForm" className="stratum-card" onSubmit={handleSubmit}>

          <div className="card-header">
            <span className="data-label">WorkHub // Acceso</span>
            <div className="status-dot"></div>
          </div>

          <h2 className="card-title">Bienvenido</h2>
          <p className="card-desc">Introduce tus credenciales</p>

          <div className="form-group">
            <label htmlFor="correo" className="form-label">Correo electrónico</label>
            <input 
              type="email" 
              id="correo" 
              className="form-input" 
              placeholder="tu@email.com" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              className="form-input" 
              placeholder="••••••••" 
              required 
              value={pass} 
              onChange={(e) => setPass(e.target.value)} 
            />
          </div>

          <button type="submit" className="btn-primary">Ejecutar Ingreso</button>

          <a href="/" className="back-link">← Volver al inicio</a>
        </form>
      </div>
    </main>
  );
};

export default Login;
