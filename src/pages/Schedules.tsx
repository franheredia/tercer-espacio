import React, { useState } from 'react';
import Schedule from '@/components/organisms/Schedule';
import { NavbarContainer } from '@/components/organisms/Navbar';
import Modal from '@/components/molecules/Modal';
import { RadioButton } from '@/components/atoms/Buttons';
import WhatsAppButton from '@/components/molecules/WhatsAppButton';
import { Button } from '@/components/atoms/Buttons';
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
  const wppMessage = `Hola Tercer Espacio! Me gustaría hacer la siguiente reserva:\nESPACIO: ${selectedSpace.description}\nFECHA: \nHORARIO: \n\nMe pasan el resumen y el monto a transferir? 😊`;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
          <Button
            label="Hacé tu reserva"
            variant="success"
            onClick={handleOpenModal}
            className="schedules__modal-button"
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
        title="Reservá tu espacio"
      >
        <div className="reservation-form">
          <p className="reservation-form__description">
            Tu reserva en tres pasos!
          </p>
          <p className="reservation-form__info--accent">
            <b>1.</b> Verificá que el espacio esté disponible en el calendario.
            <br />
            <b>2.</b> Pedinos el presupuesto para ese espacio, fecha y horario.
            <br />
            <b>3.</b> Transferí el 30% del total para confirmar la reserva.
          </p>
          <p className="reservation-form__info">
            Y listo! Te esperamos en el espacio 🤍
          </p>
          <div className="reservation-form__buttons">
            <Button
              label="Cancelar"
              variant="secondary"
              onClick={handleCloseModal}
            />
            <WhatsAppButton
              message={wppMessage}
              label="Continuar"
              className="reservation-form__whatsapp-button"
            />
          </div>
        </div>
      </Modal>
    </NavbarContainer>
  );
};

export default Schedules; 