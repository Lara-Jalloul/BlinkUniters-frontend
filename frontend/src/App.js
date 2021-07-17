import React, { useEffect, useState } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Bands from "./components/Bands";
import News from "./components/News";
import Faq from "./components/Faq";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import AdminTestimonials from "./components/Admin/Testimonials/AdminTestimonials";
function App(props) {
  // useEffect(() => {
  //   props.history.push("/testimonials");
  // }, []);q
  return (
    <div>
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
        <Route path="/login" component={Login} exact>
          <Login />
        </Route>
        <Route path="/admin" component={AdminTestimonials} exact>
          <AdminTestimonials />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
