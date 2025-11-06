import React from 'react'

function Footer() {
  return (
    <div className='container border-top mt-5'>
  <div className='row mt-5'>
    <div className='col'>
      <img src='images/images/logo.svg' style={{width:"50%"}}/>
      <p>
        &copy;2010-2024,Not Zerodha Broking Ltd. All rights reserved
      </p>
    </div>

    <div className='col'>
      <p>Company</p>
       <a className='text-decoration-none text-body' href=''> About</a> 
       <br></br>
         <a className='text-decoration-none text-body' href=''> Product</a> 
         <br></br>  
       <a className='text-decoration-none text-body' href=''> Pricing</a> 
       <br></br>  
       <a className='text-decoration-none text-body' href=''> Referral programme</a> 
       <br></br> 
       <a className='text-decoration-none text-body' href=''> Carreers</a> 
       <br></br>
       <a  className='text-decoration-none text-body' href=''> Zerodha.tech</a>
       <br></br>
       <a className='text-decoration-none text-body' href=''> Press & media</a> 
       <br></br> 
        <a  className='text-decoration-none text-body' href=''> Zerodha cares (CSR)</a> 
    </div>

    <div className='col'>
     <p>Support</p>
    <a className='text-decoration-none text-body'href=''> Contact</a>  
    <br></br>
     <a className='text-decoration-none text-body' href=''> Support portal</a>
     <br></br>
      <a className='text-decoration-none text-body'href='' > Z-Connect blog</a>  
      <br></br>
      <a className='text-decoration-none text-body' href=''> List of charges</a>
      <br></br>
     <a className='text-decoration-none text-body' href=''>Downloads & resources </a>  
     <br></br>
    </div>

    <div className='col '>
    <p>Account</p>
    <a className='text-decoration-none text-body' href=''>Open an Account</a>
    <br/>
    <a  className='text-decoration-none text-body' href=''> Fund transfer</a>
    <br/>
    <a  className='text-decoration-none text-body' href=''> 60 day challenge</a>
    </div>
  </div>

  <div className='mt-5 fs-6 text-small text-muted'>
  <p>Zerodha Broking Ltd.: Member of NSE & BSE | SEBI Registration no.: INZ000031633
CDSL: Depository services through Zerodha Securities Pvt. Ltd. | SEBI Registration no.: IN-DP-100-2015
Commodity Trading through Zerodha Commodities Pvt. Ltd. | MCX: 46025 | SEBI Registration no.: INZ000038238
Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P. Nagar 4th Phase, Bengaluru – 560078, Karnataka, India.
For any complaints pertaining to securities broking please write to complaints@zerodha.com
, for DP related to dp@zerodha.com
.
Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

<p>Procedure to file a complaint on SEBI SCORES:
Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
Benefits: Effective Communication, Speedy redressal of the grievances.</p>

<p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

<p>Prevent unauthorised transactions in your account.
Update your mobile numbers/email IDs with your stock brokers.
Receive information of your transactions directly from Exchange on your mobile/email at the end of the day.
Issued in the interest of investors. KYC is a one-time exercise while dealing in securities markets – once KYC is done through SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.
Dear Investor:
If you are subscribing to an IPO, there is no need to issue a cheque.
Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment.

In case of non-allotment, the funds will remain in your account.
Do not give stock tips and do not authorize anyone else to trade on your behalf.
If you find anyone claiming to be part of Zerodha and asking for money or credentials, please create a ticket here.</p>
</div>
    </div>
  )
}

export default Footer
