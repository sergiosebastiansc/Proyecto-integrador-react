import 'bootstrap/dist/css/bootstrap.min.css';

const AdminHeader= () => {
    return (
        // <!-- ADMIN -->
        <section id="admin" className="section">
            <header className="section-header">
                <span className="data-label"> GESTIÓN DE DISPONIBILIDAD</span>
                <h2>Control de Espacios</h2>
            </header>
            <div className="strata-grid" id="admin-spaces-container"></div>
        </section>
    
    )
}

export default AdminHeader;