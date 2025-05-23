import React from 'react';
import type { JSX } from 'react';
import './RadioButton.scss';

/**
 * Props para el componente RadioButton
 * @interface RadioButtonProps
 */
interface RadioButtonProps {
  /** ID único del radio button */
  id: string;
  /** Nombre del grupo de radio buttons */
  name: string;
  /** Valor del radio button */
  value: string;
  /** Etiqueta visible del radio button */
  label: string;
  /** Estado de selección del radio button */
  checked: boolean;
  /** Función para manejar el cambio de selección */
  onChange: (value: string) => void;
  /** Clase CSS adicional opcional */
  className?: string;
}

/**
 * Componente atómico de botón radio
 * @component
 * @param {RadioButtonProps} props - Props del componente
 * @returns {JSX.Element} Componente RadioButton
 */
const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  value,
  label,
  checked,
  onChange,
  className = ''
}): JSX.Element => {
  return (
    <div className={`radio-button ${className}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        className="radio-button__input"
      />
      <label
        htmlFor={id}
        className="radio-button__label"
      >
        {label}
      </label>
    </div>
  );
};

export default RadioButton; 