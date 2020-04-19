import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";


// navbar
import Navbar from "./component/Navbar";
// pages
import Home from "./page/Home";
import Member from "./page/Member";
import Login from "./page/Login";
import Register from "./page/Register";
import Admin from "./page/Admin";
import Lapangan from "./page/Lapangan";
// import ProductClient from "./client/ProductClient";

class Main extends Component {
  render() {
    return (
      <Switch>
        {/* Load component tiap halaman */}

        {/* 1 : login */}
        <Route exact path="/login" component={Login} />
        {/* produk */}
        <Route path="/Home">
          <Navbar />
          <Home />
        </Route>
        <Route path="/Member">
          <Navbar />
          <Member />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Lapangan">
          <Navbar />
          <Lapangan />
        </Route>
        {/* <Route path="/ProductClient">
          <Navbar />
          <ProductClient />
        </Route> */}
        <Route path="/Admin">
          <Navbar />
          <Admin />
        </Route>
      </Switch>
    );
  }
}

export default Main;
