import React, { useState } from 'react';
import '../styles.css';

const FormularioPropiedad = () => {
    const [formData, setFormData] = useState({
        propertyName: '',
        propertyAddress: '', 
        customFields: [{ name: 'Baños', type: 'text' }, { name: 'Superficie', type: 'text' }],
        newFieldName: '',
        newFieldType: 'text',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCustomFieldChange = (index, e) => {
        const updatedFields = [...formData.customFields];
        updatedFields[index][e.target.name] = e.target.value;
        setFormData({ ...formData, customFields: updatedFields });
    };

    const handleAddCustomField = () => {
        if (formData.newFieldName) {
            setFormData({
                ...formData,
                customFields: [...formData.customFields, { name: formData.newFieldName, type: formData.newFieldType }],
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
        console.log('Datos propiedad:', formData);
    };

    return (
        <div className="create-table">
            <form className="property-form" onSubmit={handleSubmit}>
                <h2 style={{ textAlign: 'left' }}>Agregar Nueva Propiedad</h2>
                <p style={{ color: '#666', textAlign: 'left' }}>Ingrese los detalles de la propiedad y agregue campos personalizados según sea necesario.</p>

                <div className="form-group">
                    <label style={{ color: 'black', fontWeight: 'bold'  }}>Nombre Propiedad</label>
                    <input
                        type="text"
                        name="propertyName"
                        value={formData.propertyName}
                        onChange={handleChange}
                        placeholder="Ingrese el nombre de la propiedad"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label style={{ color: 'black', fontWeight: 'bold'  }}>Dirección Propiedad</label>
                    <input
                        type="text"
                        name="propertyAddress"
                        value={formData.propertyAddress}
                        onChange={handleChange}
                        placeholder="Ingrese la dirección de la propiedad"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label style={{ color: 'black', fontWeight: 'bold'}}>Campos Personalizados</label>
                    {formData.customFields.map((field, index) => (
                        <div key={index} className="custom-field-row">
                            <input
                                style={{ color: 'black' }}
                                type="text"
                                value={field.name}
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
                    <label style={{ color: 'black', fontWeight: 'bold'  }}>Agregar Nuevo Campo</label>
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
                            className="form-control"
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

                <button className="save-button" type="submit">
                    Guardar Propiedad
                </button>
            </form>
        </div>
    );
};

export default FormularioPropiedad;
