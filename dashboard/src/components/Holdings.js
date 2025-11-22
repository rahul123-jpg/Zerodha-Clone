import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("https://zerodha-backend-ojuv.onrender.com/allHoldings")
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.log("Error loading holdings:", err);
      });
  }, []);

  const labels = allHoldings.map((item) => item.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price || 0),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const price = stock.price || 0;
            const qty = stock.qty || 0;
            const avg = stock.avg || 0;

            const curValue = price * qty;
            const isProfit = curValue - avg * qty >= 0;
            const profClass = isProfit ? "profit" : "loss";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{qty}</td>
                <td>{avg.toFixed(2)}</td>
                <td>{price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - avg * qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net || 0}</td>
                <td className={stock.isLoss ? "loss" : "profit"}>
                  {stock.day || 0}
                </td>
              </tr>
            );
          })}
        </table>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
