import React from 'react';
import type { JSX } from 'react';
import './WhatsAppButton.scss';

/**
 * Props para el componente WhatsAppButton
 * @interface WhatsAppButtonProps
 */
interface WhatsAppButtonProps {
  /** Mensaje predefinido para WhatsApp */
  message: string;
  /** Texto del botón */
  label: string;
  /** Clase CSS adicional opcional */
  className?: string;
  /** Número de teléfono de WhatsApp */
  phoneNumber?: string;
}

/**
 * Componente atómico de botón de WhatsApp
 * @component
 * @param {WhatsAppButtonProps} props - Props del componente
 * @returns {JSX.Element} Componente WhatsAppButton
 */
const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  label,
  className = '',
  phoneNumber = '+5493518119701'
}): JSX.Element => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button ${className}`}
    >
      {label}
    </a>
  );
};

export default WhatsAppButton; 