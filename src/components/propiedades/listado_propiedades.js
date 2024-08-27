import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import '../styles.css';

const ListadoPropiedades = () => {
    const [property, setProperty] = useState([
        { name: "Edificio Las Torres", location: "Concepción", m2: "99.5 a 120.3 totales", bedrooms: "2", bathrooms: "1", price: "8.000" },
        { name: "Condominio Rosal", location: "Santiago", m2: "131.7 a 189.3 totales", bedrooms: "3", bathrooms: "2", price: "13.000" },
    ]);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state && location.state.newProperty) {
            const newProperty = location.state.newProperty;
            // Verifica si la propiedad ya está en la lista
            setProperty((prevProperties) => {
                const exists = prevProperties.some(prop => prop.name === newProperty.name && prop.location === newProperty.location);
                if (!exists) {
                    return [...prevProperties, newProperty];
                }
                return prevProperties;
            });
        }
    }, [location.state]);

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
                    {property.map((prop, index) => (
                        <tr key={index}>
                            <td>{prop.name}</td>
                            <td>{prop.location}</td>
                            <td>{prop.m2}</td>
                            <td>{prop.bedrooms}</td>
                            <td>{prop.bathrooms}</td>
                            <td>{prop.price}</td>
                            <td>
                                <button 
                                    className="view-button" 
                                    onClick={() => handleViewClick(prop)}
                                >
                                    Ver
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="button-container">
                <Link to="/formularioprop" className="view-button">Agregar Nueva Propiedad</Link>
            </div>
        </div>
    );
};

export default ListadoPropiedades;
