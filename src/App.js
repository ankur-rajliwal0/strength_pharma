
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import WhoAreWe from './Components/WhoAreWe';
import ContactUs from './Components/ContactUs';
import ScheduleMetting from './Components/ScheduleMetting';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import About from './Components/About';
import Home from './Components/Home';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Layout from './Components/Layout';
import Products from './Components/Products';

function App() {
  return (
    <>
      {/* <Navbar/>
      <Hero/>
      <WhoAreWe/>
      <ScheduleMetting/>
      <AboutUs/>
       <ContactUs/>
       <About/>
       <Footer/> */}
 
       <BrowserRouter>
      <Routes>
        <Route element={<Layout/>} >
         
           <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
          <Route path="/Contact" element={<ContactUs/>} />
          <Route path="/Products" element={<Products/>} />
          
        
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
