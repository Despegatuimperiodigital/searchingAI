import React, { useState, useEffect } from 'react';
import './estilos.css';

function ChatHistory({ historial, mensaje, searchText }) {
  const [lastMessages, setLastMessages] = useState([]);

  const today = new Date().toISOString().slice(0, 10);
  let currentDate = null;


  useEffect(() => {
    // Actualiza lastMessages cuando el historial cambie
    if (historial && historial.length > 0) {
      setLastMessages(historial.slice(-5)); // Obtener los últimos 5 mensajes
    }
  }, [historial]);

  return (
    <div className="chat-container">
    <ul>
      {lastMessages.map((message, index) => {
        const messageDate = message.fecha_de_creacion.slice(0, 10);
        let showDate = false;

        if (messageDate !== currentDate) {
          currentDate = messageDate;
          showDate = true;
        }

        return (
          <li key={index}>
            {showDate && (
              <div className="message-date">
                {messageDate === today ? "Hoy" : messageDate}
              </div>
            )}
            {message.consulta && (
              <div className="user-message">
                <span className="message-content">{message.consulta}</span>
              </div>
            )}
            {message.respuesta && (
              <div className="ai-message">
                <span className="message-content">{message.respuesta}</span>
              </div>
            )}
            {
               <div className="user-message">
               <span className="message-content">{searchText}</span>
             </div> 
            }
            {
                <div className="ai-message">
                <span className="message-content">{mensaje}</span>
              </div>
            }
          </li>
        );
      })}
    </ul>
  </div>
  );
}

export default ChatHistory;