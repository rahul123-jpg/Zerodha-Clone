import React from 'react'

function Universe() {
  return (
   <div className="container mt-5">
      <div className="row text-center"> 
        <h1> The Zerodha Universe</h1>
        <p> Extend your trading and investment experience even further with our partner platforms</p>  
       
        <div className="col-4 p-3 mt-5">
          <img src="images/images/smallcaseLogo.png"/>
          <p className='text-small text-muted'>
            Thematic investments platform
          </p>
        </div>
         <div className="col-4 p-3 mt-5">
               <img src="images/images/streakLogo.png"  class="img-fluid w-50"/>
          <p className='text-small text-muted'> 
            Algo & strategy platform
          </p>
        </div>
         <div className="col-4 p-3 mt-5">
               <img src="images/images/sensibullLogo.svg"  class="img-fluid w-50"/>
          <p className='text-small text-muted'>
            Option trading paltform
          </p>
        </div>
             <div className="col-4 p-3 mt-5">
          <img  src="images/images/zerodhaFundhouse.png"   class="img-fluid w-50" />
          <p className='text-small text-muted'>
           Asset Management
          </p>
        </div>
         <div className="col-4 p-3 mt-5">
               <img src="images/images/goldenpiLogo.png "class="img-fluid w-50"/>
          <p className='text-small text-muted'> 
           Bonds trading platform
          </p>
        </div>
         <div className="col-4 p-3 mt-5">
               <img src="images/images/dittoLogo.png "  class="img-fluid w-50"/>
          <p className='text-small text-muted'>
          Insurance
          </p>
        </div>
                <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>
                  Sign Up Now</button>
      </div>
    </div>
  )
}

export default Universe
