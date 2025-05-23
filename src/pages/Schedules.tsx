import React, { useState } from 'react';
import Schedule from '@/components/Schedule';
import { NavbarContainer } from '@/components/Navbar';
import Modal from '@/components/Modal/Modal';
import RadioButton from '@/components/Atoms/Button/RadioButton';
import WhatsAppButton from '@/components/Atoms/Button/WhatsAppButton';
import { spaces } from '@/data/spaces';
import type { Space } from '@/types';
import './Schedules.scss';

/**
 * Página de horarios que muestra la disponibilidad de los espacios
 * y permite realizar reservas
 * @returns Componente de página de horarios
 */
const Schedules: React.FC = () => {
  const [selectedSpace, setSelectedSpace] = useState<Space>(spaces[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const wppMessage = `Hola Tercer Espacio! Me gustaría reservar un horario en el ${selectedSpace.name}`;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleReserve = () => {
    handleCloseModal();
  };

  return (
    <NavbarContainer title="Disponibilidad Horaria">
      <div className="schedules">
        <div className="schedules__selector">
          <div className="schedules__buttons">
            {spaces.map((space) => (
              <RadioButton
                key={space.id}
                id={space.id}
                name="space-selector"
                value={space.id}
                label={space.description}
                checked={selectedSpace.id === space.id}
                onChange={(value) => setSelectedSpace(spaces.find(s => s.id === value) || spaces[0])}
                className="schedules__button"
              />
            ))}
          </div>
          <WhatsAppButton
            message={wppMessage}
            label="Hacé tu reserva"
            className="schedules__whatsapp-button"
          />
        </div>
        <Schedule
          spaceNumber={selectedSpace.id}
          spaceName={selectedSpace.description}
          calendarId={selectedSpace.calendarId}
          calendarColor={selectedSpace.calendarColor}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Reservar espacio"
      >
        <div className="reservation-form">
          <p className="reservation-form__description">
            ¿Te gustaría reservar el espacio {selectedSpace.description}?
          </p>
          <p className="reservation-form__info">
            Para continuar con tu reserva, serás redirigido a WhatsApp donde podrás coordinar los detalles con nuestro equipo.
          </p>
          <div className="reservation-form__buttons">
            <button
              className="reservation-form__button reservation-form__button--cancel"
              onClick={handleCloseModal}
            >
              Cancelar
            </button>
            <WhatsAppButton
              message={wppMessage}
              label="Continuar en WhatsApp"
              className="reservation-form__button reservation-form__button--confirm"
            />
          </div>
        </div>
      </Modal>
    </NavbarContainer>
  );
};

export default Schedules; 