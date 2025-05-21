import React from 'react';
import type { JSX } from 'react';
import './GenderFilter.scss';
import type { Gender } from '@/types';

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

  const wppMessage = encodeURIComponent(
    `Hola Tercer Espacio! Les mando un casting para sumar a su página:\n_(y soy consciente de que sólo se publican castings que paguen al menos viáticos)_\n*Título de la propuesta:* \n*Fisic to rol:* (opcional)\n*Descripción de la propuesta:*\n*Teléfono de contacto:*\n*Info necesaria para aplicar:* Fotos de cara y cuerpo completo\n*Link con más información:* (opcional)\n*Remuneración:* Cubre viáticos y remuneración\n*Fecha de vencimiento de la publicación:* `
  );

  return (
    <div className="gender-filter">
      <div className="gender-filter__container">
        <div className="gender-filter__group">
          {genderOptions.map(option => (
            <div key={option.id} className="gender-filter__option">
              <input
                type="radio"
                id={option.id}
                name="role-filter"
                value={option.id}
                checked={selectedGender === option.id}
                onChange={(e) => onGenderChange(e.target.value as Gender)}
                className="gender-filter__input"
              />
              <label
                htmlFor={option.id}
                className="gender-filter__label"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
        <a
          className="gender-filter__whatsapp-button"
          href={`https://wa.me/+5493518119701?text=${wppMessage}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Agregar un casting
        </a>
      </div>
    </div>
  );
};

export default GenderFilter; 