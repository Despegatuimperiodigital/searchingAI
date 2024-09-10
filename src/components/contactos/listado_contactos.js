import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import { FaEdit, FaEye, FaSortUp, FaSortDown, FaTrash } from 'react-icons/fa';

const ListadoContactos = () => {
    const navigate = useNavigate();
    
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });
    const [contacts, setContacts] = useState([
        { id: 1, name: 'Juan Pérez', email: 'juan@example.com', phone: '123456789', address: 'Av. Libertador 1234', city: 'Santiago' },
        { id: 2, name: 'María López', email: 'maria@example.com', phone: '987654321', address: 'Av. Sunset 789', city: 'Los Angeles' },
        { id: 3, name: 'Pedro Martínez', email: 'pedro@example.com', phone: '456123789', address: 'Calle Colón 789', city: 'Concepción' },
        { id: 4, name: 'Ana Gómez', email: 'ana@example.com', phone: '321654987', address: 'Av. Perú 345', city: 'Viña del Mar' }
    ]);

    const handleViewClick = (contact) => {
        navigate('/detallescont', { state: { contact } });
    };

    const handleEditClick = (contact) => {
        navigate('/detallescont', { state: { contact, editMode: true } });
    };

    const handleDeleteClick = (contactId) => {
        const updatedContacts = contacts.filter(contact => contact.id !== contactId);
        setContacts(updatedContacts);
    };

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedContacts = [...contacts].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    return (
        <div className="property-table">
            <div style={{ textAlign: 'left' }}>
                <h2>Contactos</h2>
                <button className="view-button" onClick={() => navigate('/formulariocont')}>Crear Contacto</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('name')}>
                            Nombre 
                            {sortConfig.key === 'name' ? (sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />) : <FaSortUp />}
                        </th>
                        <th onClick={() => handleSort('email')}>
                            Email 
                            {sortConfig.key === 'email' ? (sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />) : <FaSortUp />}
                        </th>
                        <th onClick={() => handleSort('phone')}>
                            Teléfono 
                            {sortConfig.key === 'phone' ? (sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />) : <FaSortUp />}
                        </th>
                        <th onClick={() => handleSort('address')}>
                            Dirección 
                            {sortConfig.key === 'address' ? (sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />) : <FaSortUp />}
                        </th>
                        <th onClick={() => handleSort('city')}>
                            Ciudad 
                            {sortConfig.key === 'city' ? (sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />) : <FaSortUp />}
                        </th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedContacts.map((contact) => (
                        <tr key={contact.id}>
                            <td><strong>{contact.name}</strong></td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.address}</td>
                            <td>{contact.city}</td>
                            <td>
                                <FaEye className="icon-button" onClick={() => handleViewClick(contact)} />
                                <FaEdit className="icon-button" onClick={() => handleEditClick(contact)} />
                                <FaTrash className="icon-button" onClick={() => handleDeleteClick(contact.id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListadoContactos;
