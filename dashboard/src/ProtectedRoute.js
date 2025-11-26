import React from "react";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href ="https://zeodha-landing-pagef2.netlify.app/login";
    return null; 
  }

  return children;
};

export default ProtectedRoute;
