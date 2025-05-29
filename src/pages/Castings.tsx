import React, { useState } from 'react';
import type { JSX } from 'react';
import { NavbarContainer } from '@/components/organisms/Navbar';
import { CastingList } from '@/components/organisms/Castings';
import { completeCastings } from '@/data/castings';
import Modal from '@/components/molecules/Modal';
import './Castings.scss';
import type { Casting } from '@/types';
import WhatsAppButton from '@/components/molecules/WhatsAppButton';
import { AccentBlock } from '@/components/atoms/AccentBlock';
import { Button } from '@/components/atoms/Buttons';
import toast from 'react-hot-toast';

/**
 * Página de Castings que muestra las convocatorias disponibles
 * @component
 * @returns {JSX.Element} Componente de la página de Castings
 */
const Castings: React.FC = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCasting, setSelectedCasting] = useState<Casting | null>(null);

  const handleOpenModal = (casting: Casting) => {
    setSelectedCasting(casting);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCasting(null);
  };

  const buildCastingMessage = (casting: Casting) => {
    return `Hola, ví en la página de Tercer Espacio que tienen un casting abierto para ${casting.title}! Te envío ${casting.requiredInfo}`;
  };

  const copyToClipboard = (text: string | undefined) => {
    navigator.clipboard.writeText(text || '');
    toast.success('¡Contacto copiado al portapapeles!');
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
            <AccentBlock className='casting-modal-content__accent'>
              <p className="casting-modal-content__title"><b>~ {selectedCasting.title} ~</b></p>
              <p>{selectedCasting.fisic}</p>
              <p>{selectedCasting.description}</p>
              <p className='casting-modal-content__required-info-title'><b>Para aplicar, tenés que enviar:</b></p>
              <p><span className="casting-modal-content__required-info">{selectedCasting.requiredInfo}</span></p>
              <p className='casting-modal-content__required-info-title'><b>Contacto:</b></p>
              {selectedCasting.contact.email && (
                <p className='casting-modal-content__copy-contact' onClick={() => copyToClipboard(selectedCasting.contact.email)}>
                  {selectedCasting.contact.email}
                </p>
              )}
              {selectedCasting.contact.phone && (
                <p className='casting-modal-content__copy-contact' onClick={() => copyToClipboard(selectedCasting.contact.phone)}>
                  {selectedCasting.contact.phone}
                </p>
              )}
            </AccentBlock>
            <p>Elegí un medio para continuar:</p>
            <div className="casting-modal-content__buttons">
              {selectedCasting.contact.email && (
                <Button
                  label="Email"
                  href={`mailto:${selectedCasting.contact.email}?subject=${encodeURIComponent(`Casting para ${selectedCasting.title}`)}&body=${encodeURIComponent(buildCastingMessage(selectedCasting))}`}
                  variant="success"
                />
              )}
              {selectedCasting.contact.phone && (
                <WhatsAppButton
                  label="WhatsApp"
                  phoneNumber={selectedCasting.contact.phone}
                  message={buildCastingMessage(selectedCasting)}
                />
              )}
            </div>
          </div>
        )}
      </Modal>
    </NavbarContainer>
  );
};

export default Castings;