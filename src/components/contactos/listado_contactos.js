import React, { useState } from 'react';
import '.././styles.css';

const ListadoContactos = () => {
    const [contacts, setContacts] = useState([
        { name: "Juan Pérez", email: "juan.perez@gmail.com", phone: "9 5656 2356" },
        { name: "Ana Gómez", email: "ana.gomez@gmail.com", phone: "9 4585 2456" }
    ]);

    return (
            <div className="table-container">
                <h2 className="table-heading">Listado de Contactos</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Teléfono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact, index) => (
                            <tr key={index}>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    );
};

export default ListadoContactos;