import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supporthero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal </h4>
        <a  href="">
          Track Tickets
        </a>
      </div>

      <div className="row p-3 mx-3 ">
        <div className="col p-5 ">
          <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="eg. how do I activate F&Q why is my order getting rejected" />
          <br/>
          <a className="m-3" href=""> Track account opening</a>
          <a  className="m-3"href=""> Track segment activation</a>
          <a className="m-3" href=""> Intraday</a>
          <br/>
          <a  className="m-3"href=""> margins </a>
          <a href=""> Kite user </a>

        </div>
        <div className="col p-5">
          <h1 className="fs-3">Feautured</h1>
          <ol>
            <li><a href="">Current Takeover and Delisting -january 2024</a></li>
            <li><a href=""> Latest intraday leverges -MIS & CO</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
