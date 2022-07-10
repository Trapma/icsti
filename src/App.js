import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  let location = useLocation();

  return (
    <div className="App">
      <Navigation />
      {location.pathname === "/" && <Header search={false} title="МЦНТИ" />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
