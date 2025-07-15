
import React from 'react'
import  { useEffect, useState } from 'react';



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
        <section className={`shadow-xl rounded-b-xl bg-white fixed top-0 left-0 w-full z-50 bg-white shadow-md duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}>
            <div className="container flex justify-between py-3 items-center">
                <a href="" className='font-jost font-bold text-[35px]'>SP</a>
                <div className="menulist">
                    <div className="menuicon">
                        <ul className='flex gap-[30px] items-center' >
                            <li className='font-jost text-[#fef9c] cursor-pointer link-underline '>About Us</li>
                            <li className='font-jost text-[#fef9c] cursor-pointer link-underline '>Privacy Policy</li>
                            <li className='font-jost text-[#fef9c] cursor-pointer link-underline '>Our Team</li>
                            <li className='font-jost text-[#fef9c] cursor-pointer border-[1px] px-3 py-1 rounded-3xl border-black bg-black text-white duration-300 ease-linear hover:bg-transparent hover:text-black ' >Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar
