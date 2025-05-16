import React from 'react';
import type { ScheduleProps } from '../../types';
import './Schedule.scss';

const Schedule: React.FC<ScheduleProps> = ({ spaceNumber, calendarId, calendarColor }) => {
  const calendarUrl = `https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=America%2FArgentina%2FCordoba&showPrint=0&showTitle=0&showCalendars=0&mode=WEEK&showTz=0&src=${calendarId}&color=%23${calendarColor}`;

  return (
    <div className="schedule-content">
      <iframe
        src={calendarUrl}
        style={{ border: 0 }}
        width="100%"
        height="600"
        title={`Calendario Espacio ${spaceNumber}`}
      />
    </div>
  );
};

export default Schedule; 