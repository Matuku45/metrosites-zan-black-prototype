// src/main.jsx
import React from "react";                      // ✅ must be imported
import ReactDOM from "react-dom/client";        // ✅ render to DOM
import { BrowserRouter } from "react-router-dom"; // ✅ for routing
import App from "./App.jsx";                        // ✅ main component
import "./App.css";                           // optional: your styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
