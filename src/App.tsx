import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import LinksSection from '@/components/LinksSection/LinksSection';
import Profile from '@/components/Profile/Profile';
import Schedules from '@/pages/Schedules';
import { linksSections } from '@/data/linksSection';
import type { LinksSectionsProps } from '@/types';

/**
 * Componente principal de la aplicación
 * @returns Componente App
 */
export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="app">
              <Profile />
              {linksSections.map((section: LinksSectionsProps, index: number) => (
                <LinksSection key={index} section={section} />
              ))}
              <div className="app__footer">
                <p className="app__footer-text">
                  Dirección: Humberto Primo 836 - Córdoba, Argentina
                  <br />
                  Alias: TERCER.ESPACIO
                </p>
              </div>
            </div>
          } 
        />
        <Route path="/horarios" element={<Schedules />} />
      </Routes>
    </Router>
  );
};

export default App;
