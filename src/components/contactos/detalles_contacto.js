import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '.././styles.css'; 

const DetallesContacto = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { contact } = location.state || {};

    const handleBackClick = () => {
        navigate(-1); // Navega a la página anterior
    };

    if (!contact) {
        return <p>No se encontraron detalles del contacto.</p>;
    }

    return (
        <div className="table-container">
            <h2 className="table-heading">Detalles del Contacto</h2>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{contact.name}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{contact.email}</td>
                    </tr>
                    <tr>
                        <th>Teléfono</th>
                        <td>{contact.phone}</td>
                    </tr>
                </tbody>
            </table>
            <div className="button-container">
                <button onClick={handleBackClick} className="view-button">Volver Atrás</button>
            </div>
        </div>
    );
};

export default DetallesContacto;
