
import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios
      .get("https://zerodha-backend-ojuv.onrender.com/allPositions")
      .then((res) => {
        console.log("Positions response:", res.data);
        setAllPositions(res.data);
      })
      .catch((err) => {
        console.log("Error loading positions:", err);
      });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

     {allPositions.map((stock, index) => {
  const curValue = (stock.price || 0) * stock.qty;
  const isProfit = curValue - (stock.avg || 0) * stock.qty >= 0;
  const profClass = isProfit ? "profit" : "loss";
  const dayClass = stock.isLoss ? "loss" : "profit";

  return (
    <tr key={index}>
      <td>{stock.product}</td>
      <td>{stock.name}</td>
      <td>{stock.qty}</td>

      {/* SAFE VALUES */}
      <td>{stock.avg ? stock.avg.toFixed(2) : "0.00"}</td>
      <td>{stock.price ? stock.price.toFixed(2) : "0.00"}</td>

      <td className={profClass}>
        {stock.avg && stock.price
          ? (curValue - stock.avg * stock.qty).toFixed(2)
          : "0.00"}
      </td>

      <td className={dayClass}>{stock.day}</td>
    </tr>
  );
})}
  
        </table>
      </div>
    </>
  );
};

export default Positions;
