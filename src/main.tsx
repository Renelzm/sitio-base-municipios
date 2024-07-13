import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MunicipalPage } from "./presentation/MunicipalPage.tsx";

import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MunicipalPage />
    </Provider>
  </React.StrictMode>
);
