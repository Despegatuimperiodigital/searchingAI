import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const FormularioPropiedad = () => {
    const [newProperty, setNewProperty] = useState({
        name: "",
        location: "",
        m2: "",
        bedrooms: "",
        bathrooms: "",
        price: ""
    });
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewProperty({ ...newProperty, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newProperty.name && newProperty.location && newProperty.m2 && newProperty.bedrooms && newProperty.bathrooms && newProperty.price) {
            navigate('/listadoprop', { state: { newProperty } });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2 className="form-heading">Nueva Propiedad</h2>
            <div className="field-container">
                <label htmlFor="name" className="field-label">Nombre de Propiedad</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre de la propiedad"
                    value={newProperty.name}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="field-container">
                <label htmlFor="location" className="field-label">Ubicación</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Ubicación"
                    value={newProperty.location}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="field-container">
                <label htmlFor="m2" className="field-label">M2</label>
                <input
                    type="text"
                    id="m2"
                    name="m2"
                    placeholder="M2 totales"
                    value={newProperty.m2}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="field-container">
                <label htmlFor="bedrooms" className="field-label">Dormitorios</label>
                <input
                    type="number"
                    id="bedrooms"
                    name="bedrooms"
                    placeholder="Número de dormitorios"
                    value={newProperty.bedrooms}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="field-container">
                <label htmlFor="bathrooms" className="field-label">Baños</label>
                <input
                    type="number"
                    id="bathrooms"
                    name="bathrooms"
                    placeholder="Número de baños"
                    value={newProperty.bathrooms}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="field-container">
                <label htmlFor="price" className="field-label">Valor UF</label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    placeholder="Valor en UF"
                    value={newProperty.price}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <button type="submit" className="submit-button">Agregar</button>
        </form>
    );
};

export default FormularioPropiedad;
