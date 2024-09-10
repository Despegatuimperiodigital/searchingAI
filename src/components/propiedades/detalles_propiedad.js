import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles.css';

const DetallesPropiedad = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { property, editMode } = location.state || {};

    const [editableProperty, setEditableProperty] = useState(property);
    const [isEditing, setIsEditing] = useState(false);
    const [originalProperty, setOriginalProperty] = useState(property);

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditableProperty({
            ...editableProperty,
            [name]: value,
        });
    };

    const handleStatusChange = (e) => {
        setEditableProperty({
            ...editableProperty,
            status: e.target.value,
        });
    };

    const handleEditClick = () => {
        setOriginalProperty(editableProperty);
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        // Formatea el valor antes de guardar si es necesario
        const updatedProperty = {
            ...editableProperty,
            price: editableProperty.price.trim() || '0 UF',
            area: editableProperty.area.trim() || '0 m²',
        };
        console.log('Propiedad actualizada:', updatedProperty);
        setIsEditing(false);
        navigate('/listadoprop');
    };

    const handleCancelClick = () => {
        setEditableProperty(originalProperty);
        setIsEditing(false);
    };

    useEffect(() => {
        if (editMode) {
            setIsEditing(true);
        }
    }, [editMode]);

    if (!editableProperty) {
        return <p>No se encontraron detalles de la propiedad.</p>;
    }

    return (
        <div className="property-table">
            <h2>{isEditing ? 'Editar Propiedad' : 'Detalles de Propiedad'}</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Dirección</th>
                        <td>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="address"
                                    value={editableProperty.address}
                                    onChange={handleInputChange}
                                    className="full-width-input"
                                />
                            ) : (
                                editableProperty.address
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>Ciudad</th>
                        <td>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="city"
                                    value={editableProperty.city}
                                    onChange={handleInputChange}
                                    className="full-width-input"
                                />
                            ) : (
                                editableProperty.city
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>Precio</th>
                        <td>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="price"
                                    value={editableProperty.price}
                                    onChange={handleInputChange}
                                    className="full-width-input"
                                />
                            ) : (
                                editableProperty.price
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>Estado</th>
                        <td>
                            {isEditing ? (
                                <select
                                    name="status"
                                    value={editableProperty.status}
                                    onChange={handleStatusChange}
                                    className="full-width-select"
                                >
                                    <option value="En venta">En venta</option>
                                    <option value="Pendiente">Pendiente</option>
                                    <option value="Vendida">Vendida</option>
                                </select>
                            ) : (
                                editableProperty.status
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>Habitaciones</th>
                        <td>
                            {isEditing ? (
                                <input
                                    type="number"
                                    name="rooms"
                                    value={editableProperty.rooms}
                                    onChange={handleInputChange}
                                    className="full-width-input"
                                />
                            ) : (
                                editableProperty.rooms
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>Baños</th>
                        <td>
                            {isEditing ? (
                                <input
                                    type="number"
                                    name="baths"
                                    value={editableProperty.baths}
                                    onChange={handleInputChange}
                                    className="full-width-input"
                                />
                            ) : (
                                editableProperty.baths
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>Superficie</th>
                        <td>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="area"
                                    value={editableProperty.area}
                                    onChange={handleInputChange}
                                    className="full-width-input"
                                />
                            ) : (
                                editableProperty.area
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="button-container">
                {!isEditing && (
                    <button onClick={handleBackClick} className="view-button">Volver Atrás</button>
                )}
                {isEditing ? (
                    <>
                        <button onClick={handleSaveClick} className="save-button">Guardar Cambios</button>
                        <button onClick={handleCancelClick} className="cancel-button">Cancelar</button>
                    </>
                ) : (
                    <button onClick={handleEditClick} className="edit-button">Editar</button>
                )}
            </div>
        </div>
    );
};

export default DetallesPropiedad;
