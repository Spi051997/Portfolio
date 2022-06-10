
import './App.css';
import Nav from './compenents/Nav.js';
import Home from './compenents/Home';
import Sociallinks from './compenents/Sociallinks';
import { FaBeer } from 'react-icons/fa';
import About from './compenents/About';
import Portfolio from './compenents/Portfolio';
function App() {
  return (
    <div   >
      <Nav />
      <Home />
      <About />
      <Portfolio />

      <Sociallinks />
   
    </div>
  );
}

export default App;
