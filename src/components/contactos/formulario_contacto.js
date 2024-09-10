import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const FormularioContacto = () => {
    const [formData, setFormData] = useState({
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        contactAddress: '',
        contactCity: '',
        newFieldName: '',
        newFieldType: 'text',
        customFields: [],
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCustomFieldChange = (index, e) => {
        const updatedFields = [...formData.customFields];
        updatedFields[index].value = e.target.value;
        setFormData({ ...formData, customFields: updatedFields });
    };

    const handleAddCustomField = () => {
        if (formData.newFieldName) {
            setFormData({
                ...formData,
                customFields: [
                    ...formData.customFields,
                    { name: formData.newFieldName, type: formData.newFieldType, value: '' }
                ],
                newFieldName: '',
                newFieldType: 'text',
            });
        }
    };

    const handleRemoveCustomField = (index) => {
        const updatedFields = formData.customFields.filter((_, i) => i !== index);
        setFormData({ ...formData, customFields: updatedFields });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos contacto:', formData);
    };

    const handleBackClick = () => {
        navigate('/listadocont');
    };

    return (
        <div className="create-table">
            <form className="property-form" onSubmit={handleSubmit}>
                <h2 style={{ textAlign: 'left' }}>Agregar Nuevo Contacto</h2>
                <p style={{ color: '#666', textAlign: 'left' }}>
                    Ingrese los detalles del contacto y agregue campos personalizados según sea necesario.
                </p>

                <div className="form-group">
                    <label style={{ color: 'black', fontWeight: 'bold' }}>Nombre</label>
                    <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        placeholder="Ingrese el nombre del contacto"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label style={{ color: 'black', fontWeight: 'bold' }}>Email</label>
                    <input
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleChange}
                        placeholder="Ingrese el email del contacto"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label style={{ color: 'black', fontWeight: 'bold' }}>Teléfono</label>
                    <input
                        type="text"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleChange}
                        placeholder="Ingrese el teléfono del contacto"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label style={{ color: 'black', fontWeight: 'bold' }}>Dirección</label>
                    <input
                        type="text"
                        name="contactAddress"
                        value={formData.contactAddress}
                        onChange={handleChange}
                        placeholder="Ingrese la dirección del contacto"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label style={{ color: 'black', fontWeight: 'bold' }}>Ciudad</label>
                    <input
                        type="text"
                        name="contactCity"
                        value={formData.contactCity}
                        onChange={handleChange}
                        placeholder="Ingrese la ciudad del contacto"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label style={{ color: 'black', fontWeight: 'bold' }}>Campos Personalizados</label>
                    {formData.customFields.map((field, index) => (
                        <div key={index} className="custom-field-row">
                            <input
                                style={{ color: 'black' }}
                                type={field.type}
                                value={field.value}
                                placeholder={field.name}
                                onChange={(e) => handleCustomFieldChange(index, e)}
                                className="form-control"
                            />
                            <button
                                type="button"
                                className="remove-btn"
                                onClick={() => handleRemoveCustomField(index)}
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>

                <div className="form-group new-field">
                    <label style={{ color: 'black', fontWeight: 'bold' }}>Agregar Nuevo Campo</label>
                    <div className="new-field-row">
                        <input
                            type="text"
                            name="newFieldName"
                            value={formData.newFieldName}
                            onChange={handleChange}
                            placeholder="Nombre del nuevo campo"
                            className="form-control"
                        />
                        <select
                            name="newFieldType"
                            value={formData.newFieldType}
                            onChange={handleChange}
                            className="form-control max-width"
                        >
                            <option value="text">Texto</option>
                            <option value="number">Número</option>
                        </select>
                        <button
                            type="button"
                            className="add-btn form-control"
                            onClick={handleAddCustomField}
                        >
                            + Añadir
                        </button>
                    </div>
                </div>

                <button onClick={handleBackClick} className="save-button">
                    Volver Atrás
                </button>
                <button className="save-button" type="submit">
                    Guardar Contacto
                </button>
            </form>
        </div>
    );
};

export default FormularioContacto;
