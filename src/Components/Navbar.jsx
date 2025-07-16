
import React from 'react'
import { useEffect, useState } from 'react';
import { Link, Links } from 'react-router-dom';
import Logo from "../Assets/Common/logoStrengthPharma.png"


function Navbar() {


  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  return (
    <section className={`shadow-xl rounded-b-xl bg-white fixed top-0 left-0 w-full z-50 bg-white shadow-md duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}>
      <div className="container flex justify-between py-3 items-center">
        <a  href='/'><img src={Logo} alt="Strength Pharma" className='w-[70px]' /></a>
        <div className="menulist">
          <div className="menuicon">
            <ul className='flex gap-[30px] items-center' >
              <Link to="/">  <li className='font-jost text-[#fef9c] cursor-pointer link-underline '>Home</li></Link>
              <Link to="/Products"><li className='font-jost text-[#fef9c] cursor-pointer link-underline '>Products</li>
              </Link>
              <Link to="/About">  <li className='font-jost text-[#fef9c] cursor-pointer link-underline '>About Us</li></Link>
              <Link to="/PrivacyPolicy">  <li className='font-jost text-[#fef9c] cursor-pointer link-underline '>Privacy Policy</li></Link>
              <Link to="/Contact">                            <li className='font-jost text-[#fef9c] cursor-pointer border-[1px] px-3 py-1 rounded-3xl border-black bg-black text-white duration-300 ease-linear hover:bg-transparent hover:text-black ' >Contact Us</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
