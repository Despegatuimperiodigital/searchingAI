import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '.././styles.css'; 

const DetallesPropiedad = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { property } = location.state || {};

    const handleBackClick = () => {
        navigate(-1); // Navega a la página anterior
    };

    if (!property) {
        return <p>No se encontraron detalles de la propiedad.</p>;
    }

    return (
        <div className="table-container">
            <h2 className="table-heading">Detalles de Propiedad</h2>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{property.name}</td>
                    </tr>
                    <tr>
                        <th>Ubicación</th>
                        <td>{property.location}</td>
                    </tr>
                    <tr>
                        <th>M2</th>
                        <td>{property.m2}</td>
                    </tr>
                    <tr>
                        <th>Dormitorios</th>
                        <td>{property.bedrooms}</td>
                    </tr>
                    <tr>
                        <th>Baños</th>
                        <td>{property.bathrooms}</td>
                    </tr>
                    <tr>
                        <th>Valor UF</th>
                        <td>{property.price}</td>
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
