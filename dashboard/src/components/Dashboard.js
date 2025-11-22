import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // WINDOW RESIZE LISTENER (mobile <-> desktop switch handle)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // MOBILE: Watchlist only on summary ("/")
  // DESKTOP: Watchlist always
  const showWatchlist =
    !isMobile || (isMobile && location.pathname === "/");

  return (
    <div className="dashboard-container">
      {showWatchlist && (
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
      )}

      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
