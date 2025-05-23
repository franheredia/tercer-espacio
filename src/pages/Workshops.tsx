import React from 'react';
import { WorkshopList } from '@/components/organisms/Workshops';
import { NavbarContainer } from '@/components/organisms/Navbar';
import { workshops } from '@/data/workshops';
import './Workshops.scss';

const Workshops: React.FC = () => {
  return (
    <NavbarContainer title="Talleres">
      <p className="workshops-description">
        Información sobre los talleres disponibles en el espacio ✨
      </p>
      <WorkshopList workshops={workshops} />
    </NavbarContainer>
  );
};

export default Workshops; 