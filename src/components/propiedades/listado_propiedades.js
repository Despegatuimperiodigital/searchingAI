import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles.css';
import { FaEdit, FaEye, FaSortUp, FaSortDown, FaTrash } from 'react-icons/fa';

const ListadoPropiedades = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const [sortConfig, setSortConfig] = useState({ key: 'address', direction: 'ascending' });
    const [properties, setProperties] = useState([
        { id: 1, address: 'Av. Libertador 1234', city: 'Santiago', price: '2.000 UF', status: 'En venta', rooms: 2, baths: 3, area: '1500 m²' },
        { id: 2, address: 'Av. Sunset 789', city: 'Los Angeles', price: '1.500 UF', status: 'Pendiente', rooms: 4, baths: 3, area: '2000 m²' },
        { id: 3, address: 'Calle Colón 789', city: 'Concepción', price: '900 UF', status: 'Vendida', rooms: 2, baths: 1, area: '1200 m²' },
        { id: 4, address: 'Av. Perú 345', city: 'Viña del Mar', price: '1.150 UF', status: 'En venta', rooms: 3, baths: 2, area: '1800 m²' },
        { id: 5, address: 'Av. San Miguel 456', city: 'Talca', price: '2.900 UF', status: 'En venta', rooms: 3, baths: 2, area: '1600 m²' }
    ]);

    const isEditMode = location.state?.editMode ?? false;

    const handleViewClick = (property) => {
        navigate('/detallesprop', { state: { property } });
    };

    const handleEditClick = (property) => {
        navigate('/detallesprop', { state: { property, editMode: true } });
    };

    const handleDeleteClick = (propertyId) => {
        const updatedProperties = properties.filter(property => property.id !== propertyId);
        setProperties(updatedProperties);
    };

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const handleStatusChange = (propertyId, newStatus) => {
        const updatedProperties = properties.map(property =>
            property.id === propertyId ? { ...property, status: newStatus } : property
        );
        setProperties(updatedProperties);
    };

    const sortedProperties = [...properties].sort((a, b) => {
        const aValue = sortConfig.key === 'price' || sortConfig.key === 'area'
            ? parseFloat(a[sortConfig.key].replace(/[^\d.-]/g, ''))
            : a[sortConfig.key];
        const bValue = sortConfig.key === 'price' || sortConfig.key === 'area'
            ? parseFloat(b[sortConfig.key].replace(/[^\d.-]/g, ''))
            : b[sortConfig.key];

        if (aValue < bValue) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    return (
        <div className="property-table">
            <div style={{ textAlign: 'left' }}>
                <h2>Mis Propiedades</h2>
                <button className="view-button" onClick={() => navigate('/formularioprop')}>Crear Propiedad</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('address')}>
                            Dirección 
                            {sortConfig.key === 'address' ? (sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />) : <FaSortUp />}
                        </th>
                        <th onClick={() => handleSort('city')}>
                            Ciudad 
                            {sortConfig.key === 'city' ? (sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />) : <FaSortUp />}
                        </th>
                        <th onClick={() => handleSort('price')}>
                            Precio 
                            {sortConfig.key === 'price' ? (sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />) : <FaSortUp />}
                        </th>
                        <th onClick={() => handleSort('status')}>
                            Estado 
                            {sortConfig.key === 'status' ? (sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />) : <FaSortUp />}
                        </th>
                        <th onClick={() => handleSort('rooms')}>
                            Habitaciones 
                            {sortConfig.key === 'rooms' ? (sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />) : <FaSortUp />}
                        </th>
                        <th onClick={() => handleSort('baths')}>
                            Baños 
                            {sortConfig.key === 'baths' ? (sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />) : <FaSortUp />}
                        </th>
                        <th onClick={() => handleSort('area')}>
                            Superficie 
                            {sortConfig.key === 'area' ? (sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />) : <FaSortUp />}
                        </th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedProperties.map((property) => (
                        <tr key={property.id}>
                            <td><strong>{property.address}</strong></td>
                            <td>{property.city}</td>
                            <td>{property.price}</td>
                            <td>
                                {isEditMode ? (
                                    <select
                                        value={property.status}
                                        onChange={(e) => handleStatusChange(property.id, e.target.value)}
                                    >
                                        <option value="En venta">En venta</option>
                                        <option value="Pendiente">Pendiente</option>
                                        <option value="Vendida">Vendida</option>
                                    </select>
                                ) : (
                                    <span className={`status ${property.status.replace(' ', '').toLowerCase()}`}>
                                        {property.status}
                                    </span>
                                )}
                            </td>
                            <td>{property.rooms}</td>
                            <td>{property.baths}</td>
                            <td>{property.area}</td>
                            <td>
                                <FaEye className="icon-button" onClick={() => handleViewClick(property)} />
                                <FaEdit className="icon-button" onClick={() => handleEditClick(property)} />
                                <FaTrash className="icon-button" onClick={() => handleDeleteClick(property.id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListadoPropiedades;
