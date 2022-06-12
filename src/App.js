
import './App.css';
import Nav from './compenents/Nav.js';
import Home from './compenents/Home';
import Sociallinks from './compenents/Sociallinks';
import { FaBeer } from 'react-icons/fa';
import About from './compenents/About';
import Portfolio from './compenents/Portfolio';
import Expirence from './compenents/Expirence';
import Contact from './compenents/Contact';
// import ProfessionalExpirence from './compenents/ProfessionalExpirence';
function App() {
  return (
    <div   >
      <Nav />
      <Home />
      <About />
      <Expirence />
      {/* <ProfessionalExpirence /> */}
      <Portfolio />
      
      <Contact />
      

      <Sociallinks />
   
    </div>
  );
}

export default App;
