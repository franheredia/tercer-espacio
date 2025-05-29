import React, { useState } from 'react';
import type { Casting, Gender } from '@/types';
import GenderFilter from './GenderFilter';
import { Button } from '@/components/atoms/Buttons';
import './CastingList.scss';
import { isAfter, endOfYesterday } from 'date-fns';

interface CastingListProps {
  castings: Casting[];
  onTriggerCasting: (casting: Casting) => void;
}

const CastingList: React.FC<CastingListProps> = ({ castings, onTriggerCasting }) => {
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
        filteredCastings.map((casting, index) => (
          <div key={index} className="casting-card">
            <h2>{casting.title}</h2>
            <p>{casting.fisic}</p>
            <p>{casting.description}</p>
            <div className="casting-buttons">
              {casting.infoUrl && (
                <Button
                  label="Más info"
                  variant="secondary"
                  href={casting.infoUrl}
                  linkProps={{
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }}
                  className="casting-buttons__btn"
                />
              )}
              {casting.contact.phone && (
                <Button
                  label="Aplicar"
                  variant="success"
                  onClick={() => onTriggerCasting(casting)}
                  className="casting-buttons__btn"
                />
              )}
            </div>
          </div>
        ))
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