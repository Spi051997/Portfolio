
import './App.css';
import Nav from './compenents/Nav.js';
import Home from './compenents/Home';
import Sociallinks from './compenents/Sociallinks';
import { FaBeer } from 'react-icons/fa';
import About from './compenents/About';
function App() {
  return (
    <div   >
      <Nav />
      <Home />
      <About />
      
      <Sociallinks />
   
    </div>
  );
}

export default App;
