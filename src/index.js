import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Switch, Route, HashRouter } from "react-router-dom";
import JVLogin from "./pages/JVLogin";
import JVProduct from "./pages/JVProduct";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <HashRouter>
        <Switch>
          <Route path="/login" component={JVLogin} />
          <Route path="/product" component={JVProduct} />
          <Route path="/" component={App} />
          {/* <Redirect from="/*" to="/edit" /> */}
        </Switch>
      </HashRouter>
    </DndProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
