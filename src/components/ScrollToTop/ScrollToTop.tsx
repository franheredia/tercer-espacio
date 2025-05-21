import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente que maneja el scroll automático al cambiar de página
 * @component
 * @description Hace scroll al inicio de la página cuando cambia la ruta
 * @returns {null} No renderiza nada
 */
const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop; 