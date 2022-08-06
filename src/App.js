import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
   <>
   <Navbar />
   <Home />
   <About/>
   <Skills/>
   <Work/>
   {/* <Contact /> */}
   
   </>
  );
}

export default App;
