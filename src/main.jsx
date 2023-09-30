import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

// vercel.json routes config
// {
//   "routes": [
//     { "src": "/", "dest": "/" },
//     { "src": "/menu", "dest": "/" },
//     { "src": "/merch", "dest": "/" },
//     { "src": "/upload", "dest": "/" },
//     { "src": "/cart", "dest": "/" },
//     { "src": "/register", "dest": "/" },
//     { "src": "/login", "dest": "/" },
//     { "src": "/cancel", "dest": "/" }
//   ]
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
