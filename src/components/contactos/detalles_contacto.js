import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles.css';

const DetallesContacto = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { contact, editMode } = location.state || {};

    const [editableContact, setEditableContact] = useState(contact);
    const [isEditing, setIsEditing] = useState(false);
    const [originalContact, setOriginalContact] = useState(contact);

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditableContact({
            ...editableContact,
            [name]: value,
        });
    };

    const handleEditClick = () => {
        setOriginalContact(editableContact);
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        const updatedContact = {
            ...editableContact,
            phone: editableContact.phone.trim() || 'No disponible',
        };
        console.log('Contacto actualizado:', updatedContact);
        setIsEditing(false);
        navigate('/listadocont'); 
    };

    const handleCancelClick = () => {
        setEditableContact(originalContact);
        setIsEditing(false);
    };

    useEffect(() => {
        if (editMode) {
            setIsEditing(true);
        }
    }, [editMode]);

    if (!editableContact) {
        return <p>No se encontraron detalles del contacto.</p>;
    }

    return (
        <div className="property-table">
            <h2>{isEditing ? 'Editar Contacto' : 'Detalles de Contacto'}</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="name"
                                    value={editableContact.name}
                                    onChange={handleInputChange}
                                    className="full-width-input"
                                />
                            ) : (
                                editableContact.name
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>
                            {isEditing ? (
                                <input
                                    type="email"
                                    name="email"
                                    value={editableContact.email}
                                    onChange={handleInputChange}
                                    className="full-width-input"
                                />
                            ) : (
                                editableContact.email
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>Teléfono</th>
                        <td>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="phone"
                                    value={editableContact.phone}
                                    onChange={handleInputChange}
                                    className="full-width-input"
                                />
                            ) : (
                                editableContact.phone
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>Dirección</th>
                        <td>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="address"
                                    value={editableContact.address}
                                    onChange={handleInputChange}
                                    className="full-width-input"
                                />
                            ) : (
                                editableContact.address
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
                                    value={editableContact.city}
                                    onChange={handleInputChange}
                                    className="full-width-input"
                                />
                            ) : (
                                editableContact.city
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

export default DetallesContacto;
