import React from 'react';
import type { JSX } from 'react';
import './Button.scss';

/**
 * Props para el componente Button
 * @interface ButtonProps
 */
interface ButtonProps {
  /** Texto del botón */
  label: string;
  /** Tipo de botón */
  type?: 'button' | 'submit' | 'reset';
  /** Variante del botón */
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  /** Tamaño del botón */
  size?: 'small' | 'medium' | 'large';
  /** Estado deshabilitado */
  disabled?: boolean;
  /** Clase CSS adicional opcional */
  className?: string;
  /** Función que se ejecuta al hacer click */
  onClick?: () => void;
  /** URL del enlace (si se proporciona, el botón se convierte en un enlace) */
  href?: string;
  /** Atributos adicionales para el enlace */
  linkProps?: {
    target?: string;
    rel?: string;
  };
}

/**
 * Componente atómico de botón base
 * @component
 * @param {ButtonProps} props - Props del componente
 * @returns {JSX.Element} Componente Button
 */
const Button: React.FC<ButtonProps> = ({
  label,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  onClick,
  href,
  linkProps
}): JSX.Element => {
  const baseClassName = `button button--${variant} button--${size} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={baseClassName}
        onClick={onClick}
        {...linkProps}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button; 