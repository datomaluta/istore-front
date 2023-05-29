import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "../i18n.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Suspense fallback="loading"> */}
      <App />
      {/* </Suspense> */}
    </BrowserRouter>
  </React.StrictMode>
);
