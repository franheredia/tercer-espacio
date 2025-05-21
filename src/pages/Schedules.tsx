import React, { useState } from 'react';
import Schedule from '@/components/Schedule';
import { NavbarContainer } from '@/components/Navbar';
import { spaces } from '@/data/spaces';
import type { Space } from '@/types';
import './Schedules.scss';

/**
 * Página de horarios que muestra la disponibilidad de los espacios
 * y permite realizar reservas
 * @returns Componente de página de horarios
 */
const Schedules: React.FC = () => {
  const [selectedSpace, setSelectedSpace] = useState<Space>(spaces[0]);
  const wppMessage = encodeURIComponent(`Hola Tercer Espacio! Me gustaría reservar un horario en el ${selectedSpace.name}`);

  return (
    <NavbarContainer title="Disponibilidad Horaria">
      <div className="schedules">
        <div className="schedules__selector">
          <div className="schedules__buttons">
            {spaces.map((space) => (
              <button
                key={space.id}
                className={`schedules__button ${selectedSpace.id === space.id ? 'schedules__button--active' : ''}`}
                onClick={() => setSelectedSpace(space)}
              >
                {space.description}
              </button>
            ))}
          </div>
          <a
            href={`https://wa.me/+5493518119701?text=${wppMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="schedules__whatsapp-button"
          >
            Hacé tu reserva
          </a>
        </div>
        <Schedule
          spaceNumber={selectedSpace.id}
          spaceName={selectedSpace.description}
          calendarId={selectedSpace.calendarId}
          calendarColor={selectedSpace.calendarColor}
        />
      </div>
    </NavbarContainer>
  );
};

export default Schedules; 