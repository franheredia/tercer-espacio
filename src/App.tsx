import React from 'react';
import type { JSX } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import LinksSection from '@/components/LinksSection/LinksSection';
import Profile from '@/components/Profile/Profile';
import Schedules from '@/pages/Schedules';
import Castings from '@/pages/Castings';
import Workshops from '@/pages/Workshops';
import { linksSections } from '@/data/linksSection';
import type { LinksSectionsProps } from '@/types';

/**
 * Componente principal de la aplicación que maneja el enrutamiento y la estructura base
 * @component
 * @description Gestiona las rutas principales y renderiza los componentes correspondientes
 * @returns {JSX.Element} El componente App con su estructura de enrutamiento
 */
export const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="app">
              <div className="app__container container">
                <Profile />
                {linksSections.map((section: LinksSectionsProps, index: number) => (
                  <LinksSection key={`section-${index}`} section={section} />
                ))}
                <div className="app__footer">
                  <p className="app__footer-text">
                    Dirección: Humberto Primo 836 - Córdoba, Argentina
                    <br />
                    Alias: TERCER.ESPACIO
                  </p>
                </div>
              </div>
            </div>
          } 
        />
        <Route path="/horarios" element={<Schedules />} />
        <Route path="/castings" element={<Castings />} />
        <Route path="/talleres" element={<Workshops />} />
      </Routes>
    </Router>
  );
};

export default App;
