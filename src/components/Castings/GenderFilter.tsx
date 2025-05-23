import React from 'react';
import type { JSX } from 'react';
import './GenderFilter.scss';
import type { Gender } from '@/types';
import RadioButton from '@/components/Atoms/Button/RadioButton';
import WhatsAppButton from '@/components/Atoms/Button/WhatsAppButton';

/**
 * Props para el componente GenderFilter
 * @interface GenderFilterProps
 */
interface GenderFilterProps {
  /** Género seleccionado actualmente */
  selectedGender: Gender;
  /** Función para manejar el cambio de género */
  onGenderChange: (gender: Gender) => void;
}

/**
 * Componente para filtrar castings por género
 * @component
 * @param {GenderFilterProps} props - Props del componente
 * @returns {JSX.Element} Componente GenderFilter
 */
const GenderFilter: React.FC<GenderFilterProps> = ({ selectedGender, onGenderChange }): JSX.Element => {
  const genderOptions: Array<{ id: Gender; label: string }> = [
    { id: 'any', label: 'Todos' },
    { id: 'female', label: 'Roles femeninos' },
    { id: 'male', label: 'Roles masculinos' },
    { id: 'nonbinary', label: 'Roles no binarios' }
  ];

  const wppMessage = `Hola Tercer Espacio! Les mando un casting para sumar a su página:
_(y soy consciente de que sólo se publican castings que paguen al menos viáticos)_
*Título de la propuesta:* 
*Fisic to rol:* (opcional)
*Descripción de la propuesta:*
*Teléfono de contacto:*
*Info necesaria para aplicar:* Fotos de cara y cuerpo completo
*Link con más información:* (opcional)
*Remuneración:* Cubre viáticos y remuneración
*Fecha de vencimiento de la publicación:* `;

  return (
    <div className="gender-filter">
      <div className="gender-filter__container">
        <div className="gender-filter__group">
          {genderOptions.map(option => (
            <RadioButton
              key={option.id}
              id={option.id}
              name="role-filter"
              value={option.id}
              label={option.label}
              checked={selectedGender === option.id}
              onChange={(value) => onGenderChange(value as Gender)}
              className="gender-filter__option"
            />
          ))}
        </div>
        <WhatsAppButton
          message={wppMessage}
          label="Agregá un casting"
          className="gender-filter__whatsapp-button"
        />
      </div>
    </div>
  );
};

export default GenderFilter; 