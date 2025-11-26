import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const ctx = useContext(GeneralContext);

  const handleTradeClick = async () => {

    // 1️⃣ GET TOKEN FROM LOCALSTORAGE
    const token = localStorage.getItem("token");

    // 2️⃣ IF TOKEN MISSING → LOGIN PAGE PAR BHEJ DE
    if (!token) {
      alert("Please login first to place orders!");
      window.location.href = "https://zeodha-landing-pagef2.netlify.app/login"; 
      return;
    }

    // 3️⃣ SEND ORDER WITH TOKEN
    try {
      await axios.post(
        "https://zerodha-backend-ojuv.onrender.com/newOrder",
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: mode, 
          product: "MIS"
        },
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      );

      alert("Order Placed Successfully!");

    } catch (err) {
      console.log(err);
      alert("Order failed! Unauthorized or server error.");
    }

    // close popups
    if (mode === "BUY") ctx.closeBuyWindow();
    else ctx.closeSellWindow();
  };

  const handleCancelClick = () => {
    if (mode === "BUY") ctx.closeBuyWindow();
    else ctx.closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleTradeClick}>
            {mode === "BUY" ? "Buy" : "Sell"}
          </Link>

          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
