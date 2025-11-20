import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const loadOrders = () => {
    axios
      .get("http://localhost:3002/getOrders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Orders</h3>

      <table className="table table-hover table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Stock</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
        </thead>

        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-muted py-4">
                No orders yet...
              </td>
            </tr>
          ) : (
            orders.map((o, i) => (
              <tr key={i}>
                <td className="fw-semibold">{o.name}</td>
                <td>{o.qty}</td>
                <td>₹{o.price}</td>

                {/* BUY / SELL Color Highlight */}
                <td
                  className={
                    o.mode === "BUY"
                      ? "text-success fw-bold"
                      : "text-danger fw-bold"
                  }
                >
                  {o.mode}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
