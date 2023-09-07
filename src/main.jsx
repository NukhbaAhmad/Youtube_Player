import React from "react";
import REACTDOM from "react-dom/client";
import App from "./Components/App";

REACTDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
