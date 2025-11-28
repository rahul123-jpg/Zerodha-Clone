import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const ctx = useContext(GeneralContext);

  // ==========================
  // DRAGGABLE FEATURE
  // ==========================
  useEffect(() => {
    const box = document.getElementById("buy-window");

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    const mouseDown = (e) => {
      isDragging = true;
      offsetX = e.clientX - box.getBoundingClientRect().left;
      offsetY = e.clientY - box.getBoundingClientRect().top;
      box.classList.add("dragging");
    };

    const mouseMove = (e) => {
      if (!isDragging) return;
      box.style.left = `${e.clientX - offsetX}px`;
      box.style.top = `${e.clientY - offsetY}px`;
    };

    const mouseUp = () => {
      isDragging = false;
      box.classList.remove("dragging");
    };

    box.addEventListener("mousedown", mouseDown);
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      box.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  // ==========================
  // TRADE BUTTON
  // ==========================
  const handleTradeClick = () => {
    if (!stockQuantity || stockQuantity <= 0) {
      alert("Please enter valid Quantity");
      return;
    }

    if (!stockPrice || stockPrice <= 0) {
      alert("Please enter valid Price");
      return;
    }

    axios.post("https://zerodha-backend-ojuv.onrender.com/neworder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: mode,
      product: "MIS",
    });

    if (mode === "BUY") ctx.closeBuyWindow();
    else ctx.closeSellWindow();
  };

  // CANCEL BUTTON
  const handleCancelClick = () => {
    if (mode === "BUY") ctx.closeBuyWindow();
    else ctx.closeSellWindow();
  };

  return (
    <div className="container" id="buy-window">
      <div className="header">
        <h3>
          {mode} <span>({uid})</span>
        </h3>

        <div className="market-options">
          <label>
            <input type="radio" defaultChecked /> CNC
          </label>
          <label>
            <input type="radio" /> MIS
          </label>
        </div>
      </div>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
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

          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
