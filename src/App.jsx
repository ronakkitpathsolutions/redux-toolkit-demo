import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes";
import { Provider } from "react-redux";
import store from "./redux/inndx";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routing />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
