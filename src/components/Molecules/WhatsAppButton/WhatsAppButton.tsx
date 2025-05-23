import React from 'react';
import type { JSX } from 'react';
import { Button } from '@/components/atoms/Buttons';
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
 * Componente molecular de botón de WhatsApp
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
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <Button
      href={whatsappUrl}
      label={label}
      variant="success"
      className={`whatsapp-button ${className}`}
      linkProps={{
        target: '_blank',
        rel: 'noopener noreferrer'
      }}
    />
  );
};

export default WhatsAppButton; 