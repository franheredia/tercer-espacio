import React from 'react';
import type { JSX } from 'react';
import { NavbarContainer } from '@/components/Navbar';
import CastingList from '@/components/Castings/CastingList';
import { completeCastings } from '@/data/castings';
import './Castings.scss';

/**
 * Página de Castings que muestra las convocatorias disponibles
 * @component
 * @returns {JSX.Element} Componente de la página de Castings
 */
const Castings: React.FC = (): JSX.Element => {
  return (
    <NavbarContainer title="Castings">
        <CastingList castings={completeCastings} />
    </NavbarContainer>
  );
};

export default Castings;