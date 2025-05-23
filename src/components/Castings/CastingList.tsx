import React, { useState } from 'react';
import type { Casting, Gender } from '@/types';
import GenderFilter from './GenderFilter';
import './CastingList.scss';
import { isAfter, endOfYesterday } from 'date-fns';
import WhatsAppButton from '@/components/Molecules/WhatsAppButton';
interface CastingListProps {
  castings: Casting[];
}

const CastingList: React.FC<CastingListProps> = ({ castings }) => {
  const isCastingActive = (endDate: Date) => isAfter(endDate, endOfYesterday());

  const [selectedGender, setSelectedGender] = useState<Gender>('any');
  const filteredCastings = castings.filter(casting =>
    (selectedGender === 'any' || casting.gender === selectedGender || casting.gender === 'any') &&
    isCastingActive(casting.endDate)
  );

  const handleGenderChange = (gender: Gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className="castings-container">
      <GenderFilter selectedGender={selectedGender} onGenderChange={handleGenderChange} />

      {filteredCastings.length > 0 ? (
        filteredCastings.map((casting, index) => {
          const wppMessage = `Hola, ví en la página de Tercer Espacio que tienen un casting abierto para ${casting.title}! En breve te envío ${casting.requiredInfo}`;

          return (
            <div key={index} className="casting-card">
              <h2>{casting.title}</h2>
              <p>{casting.fisic}</p>
              <p>{casting.description}</p>
              <div className="casting-buttons">
                {casting.infoUrl && (
                  <a
                    href={casting.infoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="casting-buttons__btn"
                  >
                    Más info
                  </a>
                )}
                {casting.phone && (
                  <WhatsAppButton
                    message={wppMessage}
                    label="WhatsApp"
                    phoneNumber={casting.phone}
                    className="wpp-btn"
                  />
                )}
              </div>
            </div>
          );
        })
      ) : (
        <div className="casting-card">
          <h2>No hay castings compatibles</h2>
          <p>Ningún casting coincide con la búsqueda</p>
        </div>
      )}
    </div>
  );
};

export default CastingList; 