import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Bands from "./components/Bands";
import News from "./components/News";
import Faq from "./components/Faq";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
          <Route path="/bands" component={Bands} exact>
            <Bands />
          </Route>
          <Route path="/news" component={News} exact>
            <News />
          </Route>
          <Route path="/faq" component={Faq} exact>
            <Faq />
          </Route>
          <Route path="/aboutus" component={About} exact>
            <About />
          </Route>
          <Route path="/contactus" component={Contact} exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
