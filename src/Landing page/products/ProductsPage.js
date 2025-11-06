import React from 'react'
import Hero from './Hero'
import Leftsection from './Leftsection'
import Rightsection from './Rightsection'
import Universe from './Universe'

function PricingPage() {
  return (
   <>
   <Hero/>
   <Leftsection 
    imageURL="images/images/Kite.png" 
   productName="Kite"
    productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
   tryDemo=""
   learnMore="" 
   googlePlay="" 
   appStore=""/>
      <Rightsection imageURL="images/images/console.png" 
   productName="Console"
    productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
   learnMore="" />

   <Leftsection 
    imageURL="images/images/coin.png" 
   productName="Coin"
    productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
   tryDemo=""
   learnMore="" 
   googlePlay="" 
   appStore=""/>
      <Rightsection  imageURL="images/images/KiteConnect.png" 
   productName="Kite Connect API"
    productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our client base."
   learnMore="" />

   <Leftsection 
    imageURL="images/images/varsity.png" 
   productName="Varsity Mobile"
    productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
   tryDemo=""
   learnMore="" 
   googlePlay="" 
   appStore=""
   />
   <p className='text-center mt-5 mb-5'>
      Want to know more about your technology stack? check out the zerodha.tech blog.
   </p>
   <Universe/>
   </>
  )
}

export default PricingPage
