import React, { useState } from 'react';
import type { Workshop } from '@/types';
import './WorkshopList.scss';

interface WorkshopListProps {
  workshops: Workshop[];
}

const WorkshopList: React.FC<WorkshopListProps> = ({ workshops }) => {
  const [filter, setFilter] = useState<'all' | 'active' | 'coming_soon'>('all');

  const filteredWorkshops = workshops.filter(workshop =>
    filter === 'all' || workshop.status === filter
  );

  return (
    <div className="workshops-container">
      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Todos
        </button>
        <button
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          En curso
        </button>
        <button
          className={`filter-btn ${filter === 'coming_soon' ? 'active' : ''}`}
          onClick={() => setFilter('coming_soon')}
        >
          Próximamente
        </button>
      </div>

      <div className="workshops-grid">
        {filteredWorkshops.map((workshop, index) => {
          const wppMessage = encodeURIComponent(
            `Hola! Me interesa el taller de ${workshop.title} que dan en Tercer Espacio`
          );

          return (
            <div key={index} className={`workshop-card ${workshop.status}`}>
              {workshop.image && (
                <div className="workshop-image">
                  <img src={workshop.image} alt={workshop.title} loading="lazy" />
                </div>
              )}
              <div className="workshop-content">
                <h2>{workshop.title}</h2>
                <p className="description">{workshop.description}</p>
                <div className="workshop-details">
                  <p className="schedule">
                    <strong>Horario:</strong> {workshop.schedule}
                  </p>
                  <p className="instructor">
                    <strong>Por:</strong> {workshop.instructor}
                  </p>
                  <p className="modality">
                    <strong>Modalidad:</strong> {workshop.modality}
                  </p>
                </div>

                <div className="workshop-buttons">
                  {workshop.contact.infoUrl && (
                    <a
                      href={workshop.contact.infoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info-btn"
                    >
                      Más info
                    </a>
                  )}
                  {workshop.contact.phone && (
                    <a
                      href={`https://wa.me/${workshop.contact.phone}?text=${wppMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wpp-btn"
                      title="Chatear por WhatsApp"
                    >
                      WhatsApp
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredWorkshops.length === 0 && (
        <div className="no-results">
          <h3>No hay talleres disponibles en esta categoría</h3>
        </div>
      )}
    </div>
  );
};

export default WorkshopList; 