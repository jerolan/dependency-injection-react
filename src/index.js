import React from "react";
import ReactDOM from "react-dom/client";
import "tailwindcss/tailwind.css";
import { worker } from "./msw/browser";
import App from "./app-with-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

worker.start();
