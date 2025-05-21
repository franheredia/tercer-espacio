import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

/**
 * Props para el componente Navbar
 * @interface NavbarProps
 */
interface NavbarProps {
  /** Título a mostrar en la barra de navegación */
  title: string;
}

/**
 * Props para el contenedor de Navbar
 * @interface NavbarContainerProps
 * @extends NavbarProps
 */
interface NavbarContainerProps extends NavbarProps {
  /** Contenido a renderizar debajo de la barra de navegación */
  children: React.ReactNode;
}

/**
 * Componente de barra de navegación
 * @component
 * @param {NavbarProps} props - Props del componente
 * @returns Componente Navbar
 */
const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <nav className="navbar">
      <div className="navbar__section navbar__section--left">
        <Link to="/" className="navbar__link navbar__link--back" aria-label="Volver al inicio">
          <span className="navbar__arrow">◄</span>
        </Link>
      </div>

      <div className="navbar__section navbar__section--center">
        <h1 className="navbar__title">{title}</h1>
      </div>

      <div className="navbar__section navbar__section--right">
        <Link to="/" className="navbar__link navbar__link--home" aria-label="Ir al inicio">
          <img
            src={`${import.meta.env.BASE_URL}images/logo-magenta.png`}
            alt="Logo de Tercer Espacio"
            className="navbar__logo"
          />
        </Link>
      </div>
    </nav>
  );
};

/**
 * Contenedor que incluye la barra de navegación y el contenido principal
 * @component
 * @param {NavbarContainerProps} props - Props del componente
 * @returns Componente NavbarContainer
 */
export const NavbarContainer: React.FC<NavbarContainerProps> = ({ title, children }) => {
  return (
    <div className="navbar-layout container">
      <Navbar title={title} />
      <main className="navbar-layout__content">
        {children}
      </main>
    </div>
  );
};

export default Navbar; 