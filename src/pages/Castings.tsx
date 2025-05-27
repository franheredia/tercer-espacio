import React, { useState } from 'react';
import type { JSX } from 'react';
import { NavbarContainer } from '@/components/organisms/Navbar';
import { CastingList } from '@/components/organisms/Castings';
import { completeCastings } from '@/data/castings';
import Modal from '@/components/molecules/Modal';
import './Castings.scss';
import type { Casting } from '@/types';
import WhatsAppButton from '@/components/molecules/WhatsAppButton';

/**
 * Página de Castings que muestra las convocatorias disponibles
 * @component
 * @returns {JSX.Element} Componente de la página de Castings
 */
const Castings: React.FC = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCasting, setSelectedCasting] = useState<{ title: string; phone?: string; requiredInfo: string } | null>(null);

  const handleOpenModal = (casting: Casting) => {
    setSelectedCasting(casting);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCasting(null);
  };

  return (
    <NavbarContainer title="Castings">
      <CastingList
        castings={completeCastings}
        onTriggerCasting={handleOpenModal}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Aplicá a este casting"
      >
        {selectedCasting && (
          <div className="casting-modal-content">
            <p>{selectedCasting.title}</p>
            <p>Para la aplicación, se solicitarán los siguientes datos:<br/>{selectedCasting.requiredInfo}</p>
            <p>Elige una opción para continuar</p>
            {selectedCasting.phone && (
              <WhatsAppButton
                label="Continuar por WhatsApp"
                phoneNumber={selectedCasting.phone}
                message={`Hola, ví en la página de Tercer Espacio que tienen un casting abierto para ${selectedCasting.title}! En breve te envío ${selectedCasting.requiredInfo}`}
              />
            )}
          </div>
        )}
      </Modal>
    </NavbarContainer>
  );
};

export default Castings;