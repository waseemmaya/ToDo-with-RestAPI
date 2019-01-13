import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "grommet-css/build/index.min.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Redux/MainStore";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Main />
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);
