import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles.css';

const DetallesPropiedad = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { property } = location.state || {};

    const handleBackClick = () => {
        navigate(-1); 
    };

    if (!property) {
        return <p>No se encontraron detalles de la propiedad.</p>;
    }

    return (
        <div className="property-table">
            <h2>Detalles de Propiedad</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Dirección</th>
                        <td>{property.address}</td>
                    </tr>
                    <tr>
                        <th>Ciudad</th>
                        <td>{property.city}</td>
                    </tr>
                    <tr>
                        <th>Precio</th>
                        <td>{property.price}</td>
                    </tr>
                    <tr>
                        <th>Estado</th>
                        <td>
                            <span className={`status ${property.status.replace(' ', '').toLowerCase()}`}>
                                {property.status}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th>Habitaciones</th>
                        <td>{property.rooms}</td>
                    </tr>
                    <tr>
                        <th>Baños</th>
                        <td>{property.baths}</td>
                    </tr>
                    <tr>
                        <th>Superficie</th>
                        <td>{property.area}</td>
                    </tr>
                </tbody>
            </table>
            <div className="button-container">
                <button onClick={handleBackClick} className="view-button">Volver Atrás</button>
            </div>
        </div>
    );
};

export default DetallesPropiedad;
