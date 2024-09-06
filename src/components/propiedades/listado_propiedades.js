import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import { FaEdit, FaEye, FaSortUp, FaSortDown } from 'react-icons/fa';

const ListadoPropiedades = () => {
    const navigate = useNavigate();
    
    const [sortConfig, setSortConfig] = useState({ key: 'address', direction: 'ascending' });

    const properties = [
        { address: '123 Main St', city: 'New York', price: '$500,000', status: 'For Sale', rooms: 2, baths: 3, area: '1500 ft²' },
        { address: '456 Elm St', city: 'Los Angeles', price: '$750,000', status: 'Pending', rooms: 4, baths: 3, area: '2000 ft²' },
        { address: '789 Oak Ave', city: 'Chicago', price: '$400,000', status: 'Sold', rooms: 2, baths: 1, area: '1200 ft²' },
        { address: '101 Pine Rd', city: 'Miami', price: '$600,000', status: 'For Sale', rooms: 3, baths: 2.5, area: '1800 ft²' },
        { address: '202 Maple Dr', city: 'Seattle', price: '$550,000', status: 'For Sale', rooms: 3, baths: 2, area: '1600 ft²' }
    ];

    const handleViewClick = (property) => {
        navigate('/detallesprop', { state: { property } });
    };

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedProperties = [...properties].sort((a, b) => {
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
            <h2>Mis Propiedades</h2>
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
                    {sortedProperties.map((property, index) => (
                        <tr key={index}>
                            <td><strong>{property.address}</strong></td>
                            <td>{property.city}</td>
                            <td>{property.price}</td>
                            <td>
                                <span className={`status ${property.status.replace(' ', '').toLowerCase()}`}>
                                    {property.status}
                                </span>
                            </td>
                            <td>{property.rooms}</td>
                            <td>{property.baths}</td>
                            <td>{property.area}</td>
                            <td>
                                <FaEye className="icon-button" onClick={() => handleViewClick(property)} />
                                <FaEdit className="edit-icon" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListadoPropiedades;
