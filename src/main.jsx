// src/main.jsx
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import LandingPage from "./pages/user/LandingPage";
import Listing from "./pages/user/listing";
import Order from "./pages/user/order";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
