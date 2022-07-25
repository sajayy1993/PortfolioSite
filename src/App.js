
import './App.css';
import Contact from './Components/Contact/Contact';
import Features from './Components/Features/Features';
import Header from './Components/Head/Header'
import Home from './Components/Hero/Home'
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';


function App() {
  return (
    <>
<Header/>
  <Home />
  <Features/>
  <Portfolio />
  <Resume />
  <Contact />
    </>
  

  );
}

export default App;
