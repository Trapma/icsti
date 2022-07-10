import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./routes/Home";

function App() {
  let location = useLocation();

  return (
    <div className="App">
      <Navigation />

      {location.pathname === "/" &&
        <Home />
      }
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
