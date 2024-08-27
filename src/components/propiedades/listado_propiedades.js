import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '.././styles.css';

const ListadoPropiedades = () => {
    const [property] = useState([
        { name: "Edificio Las Torres", location: "Concepción", m2: "99.5 a 120.3 totales", bedrooms: "2", bathrooms: "1", price: "8.000" },
        { name: "Condominio Rosal", location: "Santiago", m2: "131.7 a 189.3 totales", bedrooms: "3", bathrooms: "2", price: "13.000" },
    ]);

    const navigate = useNavigate();

    const handleViewClick = (property) => {
        navigate('/detallesprop', { state: { property } });
    };

    return (
        <div className="table-container">
            <h2 className="table-heading">Listado de Propiedades</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre de Propiedad</th>
                        <th>Ubicación</th>
                        <th>M2</th>
                        <th>Dormitorios</th>
                        <th>Baños</th>
                        <th>Valor UF</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {property.map((property, index) => (
                        <tr key={index}>
                            <td>{property.name}</td>
                            <td>{property.location}</td>
                            <td>{property.m2}</td>
                            <td>{property.bedrooms}</td>
                            <td>{property.bathrooms}</td>
                            <td>{property.price}</td>
                            <td>
                                <button 
                                    className="view-button" 
                                    onClick={() => handleViewClick(property)}
                                >
                                    Ver
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListadoPropiedades;
