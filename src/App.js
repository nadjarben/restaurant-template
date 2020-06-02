import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

import Homepage from "./pages/Homepage/Homepage";
import Menu from "./pages/Menu/Menu";
import Backdrop from "./components/suspense/Backdrop"

function App() {
  return (
    <Suspense fallback={<Backdrop />}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/menu" component={Homepage} />
          </Switch>
        </Router>
      </Provider>
    </Suspense>
  );
}

export default App;
