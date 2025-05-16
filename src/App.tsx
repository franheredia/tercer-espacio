import './App.scss'
import LinksSection from './components/LinksSection/LinkSection';
import Profile from './components/Profile/Profile';
import { linkSections } from '../data/linksSection';

function App() {

  return (
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
  )
}

export default App
