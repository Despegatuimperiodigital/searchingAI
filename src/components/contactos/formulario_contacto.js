// src/pages/FormularioContacto.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const FormularioContacto = () => {
    const [newContact, setNewContact] = useState({ name: "", email: "", phone: "" });
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewContact({ ...newContact, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newContact.name && newContact.email && newContact.phone) {
            navigate('/listadocont', { state: { newContact } });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2 className="form-heading">Nuevo Contacto</h2>
            <div className="field-container">
                <label htmlFor="name" className="field-label">Ingresar nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ingresar nombre"
                    value={newContact.name}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="field-container">
                <label htmlFor="email" className="field-label">Ingresar email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ingresar email"
                    value={newContact.email}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="field-container">
                <label htmlFor="phone" className="field-label">Ingresar teléfono:</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Ingresar teléfono"
                    value={newContact.phone}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <button type="submit" className="submit-button">Agregar</button>
        </form>
    );
};

export default FormularioContacto;
