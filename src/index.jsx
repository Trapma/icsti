import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import "./css/styles.css";
import Projects from "./routes/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Service from "./routes/Service";
import Archive from "./routes/Archive";
import Contact from "./routes/Contact";
import News from "./routes/News";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<h1> Такой страницы не существует</h1>} />

      </Route>
    </Routes>
  </BrowserRouter>

);
