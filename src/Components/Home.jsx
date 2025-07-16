import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import WhoAreWe from './WhoAreWe'
import ScheduleMetting from './ScheduleMetting'
import AboutUs from './AboutUs'
import Footer from './Footer'
import OurBestProducts from './OurBestProducts'

function Home() {
  return (
    <>
   
      <Hero/>
     <OurBestProducts/>
      <ScheduleMetting/>
      <AboutUs/>
      <WhoAreWe/>
    </>
  )
}

export default Home
