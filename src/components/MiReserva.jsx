
/* -----------> import { useState } from "react";

export default function MyBookingsSection({ bookings = [], onNewBooking }) {
    return (
        <section id="my-bookings" className="section">
            <header className="section-header">
                <span className="data-label">GESTIÓN PERSONAL</span>
                <h2>Mis Reservas</h2>
            </header>

            <div className="contenedor-center">
                <div id="my-bookings-container">
                    {bookings.length === 0 ? (
                        <p style={{ color: "var(--color-text-secondary)", fontFamily: "monospace", fontSize: "0.85rem" }}>
                            No tienes reservas aún.
                        </p>
                    ) : (
                        bookings.map((booking) => (
                            <div key={booking.id} className="booking-card">
                                <span className="data-label">{booking.space}</span>
                                <p>{booking.userName}</p>
                                <p>{booking.date} — {booking.time}</p>
                            </div>
                        ))
                    )}
                </div>

                <div style={{ marginTop: "2rem" }}>
                    <button
                        className="btn-crystal"
                        onClick={(e) => { e.preventDefault(); onNewBooking?.(); }}
                        style={{ fontSize: "0.75rem", padding: "0.8rem 1.5rem" }}
                    >
                        + NUEVA RESERVA <span>&rarr;</span>
                    </button>
                </div>
            </div>
        </section>
    );
} */
