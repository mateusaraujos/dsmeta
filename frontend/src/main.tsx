import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Para evitar bug quando tentar enviar SMS na aplicação implantada no Netlify.
window.React = React;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
