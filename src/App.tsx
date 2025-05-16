import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss'
import LinksSection from './components/LinksSection/LinkSection';
import Profile from './components/Profile/Profile';
import Schedules from './pages/Schedules';
import { linkSections } from '../data/linksSection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="container">
            <Profile />
            {linkSections.map((section, index) => (
              <LinksSection key={index} section={section} />
            ))}
            <p className='footer'>
              Dirección: Humberto Primo 836 - Córdoba, Argentina
              <br />
              Alias: TERCER.ESPACIO
            </p>
          </div>
        } />
        <Route path="/horarios" element={<Schedules />} />
      </Routes>
    </Router>
  )
}

export default App
