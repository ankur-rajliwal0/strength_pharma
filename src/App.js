import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import WhoAreWe from './Components/WhoAreWe';
import ContactUs from './Components/ContactUs';
import ScheduleMetting from './Components/ScheduleMetting';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <WhoAreWe/>
      <ScheduleMetting/>
      <AboutUs/>
       <ContactUs/>
       <Footer/>
    </div>
  );
}

export default App;
