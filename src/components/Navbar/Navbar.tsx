import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

interface NavbarProps {
  title: string;
}

interface NavbarContainerProps extends NavbarProps {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-back" aria-label="Volver al inicio">
        <span>◄</span>
      </Link>
      <h1 className="nav-title">{title}</h1>
      <Link to="/" className="nav-profile" aria-label="Ir al inicio">
        <img
          src={`${import.meta.env.BASE_URL}images/logo-magenta.png`}
          alt="Logo de Tercer Espacio"
          className="nav-logo"
        />
      </Link>
    </div>
  );
};

export const NavbarContainer: React.FC<NavbarContainerProps> = ({ title, children }) => {
  return (
    <>
      <Navbar title={title} />
      <main className="navbar-margin">
        {children}
      </main>
    </>
  );
};

export default Navbar; 