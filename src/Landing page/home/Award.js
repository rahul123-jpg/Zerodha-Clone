import React from 'react'

function Award() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 p-5'>
          <img src='images/images/largestBroker.svg'/>
        </div>
        <div className='col-6 p-5 mt-3'>
        <h1>Largest Stock broker in India</h1>
        <p className='mb-5'>2+ million Zerodha client contribute to over 15% of all retail over volumes in india
           daily by trading and investing in:</p>

          <div className='row'>
          <div className='col-6'> <ul>
            <li>
              <p>future and options</p>
            </li>
             <li>
              <p>Commodity derivatives</p>
            </li>
             <li>
              <p>Currency derivatives</p>
            </li>
            
           </ul></div>
          <div className='col'> <ul>
            <li>
              <p>Stocks & IPOs</p>
            </li>
             <li>
              <p>Direct mutual funds</p>
            </li>
             <li>
              <p>Bonds and Goverment security</p>
            </li>
            
           </ul>

           </div>
           </div>
           <img src='images\images\pressLogos.png' style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  )
}

export default Award
