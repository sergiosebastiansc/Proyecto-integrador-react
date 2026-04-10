// Reservas - 
import { useState } from "react";

export default function BookingSection({ spaces = [], onSubmit, onViewBookings }) {
    const [form, setForm] = useState({
        spaceId: "",
        date: "",
        time: "",
        userName: "",
    });

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit?.(form);
    };

    return (
        <section id="booking" className="section">
            <header className="section-header">
                <span className="data-label">MÓDULO DE RESERVA</span>
                <h2>Configurar Estadía</h2>
            </header>

            <div className="contenedor-center">
                <form id="booking-form" onSubmit={handleSubmit}>
                    <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
                        <div className="form-group">
                            <label htmlFor="space-select" className="form-label">
                                Seleccionar Espacio
                            </label>
                            <select
                                className="form-select"
                                id="space-select"
                                name="spaceId"
                                value={form.spaceId}
                                onChange={handleChange}
                                required
                            >
                                <option value="">-- Selecciona un espacio --</option>
                                {spaces.map((space) => (
                                    <option key={space.id} value={space.id}>
                                        {space.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                            <div className="form-group">
                                <label htmlFor="booking-date" className="form-label">
                                    Fecha
                                </label>
                                <input
                                    type="date"
                                    className="form-input"
                                    id="booking-date"
                                    name="date"
                                    value={form.date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="booking-time" className="form-label">
                                    Hora
                                </label>
                                <input
                                    type="time"
                                    className="form-input"
                                    id="booking-time"
                                    name="time"
                                    value={form.time}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="user-name" className="form-label">
                                Nombre del Usuario
                            </label>
                            <input
                                type="text"
                                className="form-input"
                                id="user-name"
                                name="userName"
                                placeholder="Ej. Alex Diseñador"
                                value={form.userName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn-primary">
                            CONFIRMAR RESERVA
                        </button>
                    </fieldset>
                </form>

                <div style={{ marginTop: "1.5rem", textAlign: "center" }}>

                    href="#"
                    onClick={(e) => { e.preventDefault(); onViewBookings?.(); }}
                    className="link-accent"
          >
                    Ver mis reservas &rarr;
                </a>
            </div>
        </div>
    </section >
  );
}
