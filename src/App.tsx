import './App.scss'
import LinksSection from './components/LinksSection/LinkSection';
import Profile from './components/Profile/Profile';
import { linkSections } from '../data/linksSection';

function App() {

  return (
    <div className="container">
      {linkSections.map((section, index) => (
        <LinksSection key={index} section={section} />
      ))}
    </div>
  )
}

export default App
