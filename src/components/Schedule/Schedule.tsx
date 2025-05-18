import React from 'react';
import type { ScheduleProps } from '@/types';
import './Schedule.scss';

/**
 * Componente que muestra un calendario de Google Calendar embebido para un espacio específico
 * @component
 * @param {ScheduleProps} props - Propiedades del componente
 * @param {string} props.spaceNumber - Número identificador del espacio
 * @param {string} props.calendarId - ID del calendario de Google Calendar
 * @param {string} props.calendarColor - Color del calendario en formato hexadecimal (sin #)
 * @returns {React.ReactElement} Componente Schedule con el calendario embebido
 */
const Schedule: React.FC<ScheduleProps> = ({ 
  spaceNumber, 
  calendarId, 
  calendarColor 
}) => {
  // Configuración del calendario de Google
  const calendarUrl = new URL('https://calendar.google.com/calendar/embed');
  calendarUrl.searchParams.set('height', '600');
  calendarUrl.searchParams.set('wkst', '2');
  calendarUrl.searchParams.set('ctz', 'America/Argentina/Cordoba');
  calendarUrl.searchParams.set('showPrint', '0');
  calendarUrl.searchParams.set('showTitle', '0');
  calendarUrl.searchParams.set('showCalendars', '0');
  calendarUrl.searchParams.set('mode', 'WEEK');
  calendarUrl.searchParams.set('showTz', '0');
  calendarUrl.searchParams.set('src', calendarId);
  calendarUrl.searchParams.set('color', `#${calendarColor}`);

  return (
    <div className="schedule">
      <div className="schedule__content">
        <iframe
          className="schedule__frame"
          src={calendarUrl.toString()}
          style={{ border: 0 }}
          width="100%"
          height="600"
          title={`Calendario Espacio ${spaceNumber}`}
        />
      </div>
    </div>
  );
};

export default Schedule; 