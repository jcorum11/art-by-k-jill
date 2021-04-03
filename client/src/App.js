import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Paintings from "./pages/Paintings";
import Inspiration from "./pages/Inspiration";
// import NoMatch from "./pages/NoMatch";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Paintings} />
            <Route exact path="/inspiration" component={Inspiration} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/nomatch" component={NoMatch} /> */}
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
