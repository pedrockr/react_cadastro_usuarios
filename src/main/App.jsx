import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { BrowserRouter } from "react-router-dom";

import Logo from "../components/templates/Logo";
import Nav from "../components/templates/Nav";
import HandleRoutes from "../main/Routes";
import Footer from "../components/templates/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo />
        <Nav />
        <HandleRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
