import { useState, useEffect } from "react";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Register from "./views/Register";
import Login from "./views/Login";
import Header from "./components/Header";
import Home from "./views/Home";
import Menu from "./views/Menu";
import Shop from "./views/Shop";
import UploadProduct from "./components/UploadProduct";
import video from "./assets/videos/Nicole-Coffee-Cinemagraph.mp4";
import HamburgerNav from "./components/HamburgerNav";
import Navbar from "./components/Navbar";
import Cart from "./views/Cart";
import Cancel from "./views/Cancel";

// STRIPE
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51M8pJEJgWPjDbO5ajjTUurLefpF4RadjTlOsCpmT4Yaw2SHJlaCK0PhuUOuFwFtvHQaYG7v23X8uj6G8pb3VBAj600UE3G7yPU"
);

import CartProvider from "./context/CartContext";

function App() {
  const options = {
    // passing the client secret obtained from the server
    // clientSecret: "CLIENT_SECRET",
  };
  return (
    <CartProvider>
      <Elements stripe={stripePromise} options={options}>
        <div className="App">
          <video id="background-video" autoPlay muted loop width="1000px">
            <source src={video} type="video/mp4" />
            <source src={video} type="video/ogg" />
          </video>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/merch" element={<Shop />} />
            <Route path="/upload" element={<UploadProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </div>
      </Elements>
    </CartProvider>
  );
}

export default App;
