import React from 'react'
import Award from './Award';
import Education from './Education';
import Hero from './Hero';
import Pricing from './Pricing';
import Stats from './Stats';
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from '../Footer';


function Homepage() {
  return (
  <>
  <Hero/>   
  <Award/>
  <Stats/>
  <Pricing/>
  <Education/>
      <OpenAccount/>
  </>
  )
}

export default Homepage
