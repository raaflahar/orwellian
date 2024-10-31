import { StrictMode } from "react";
import { createRoot } from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Headers from "./assets/Headers/Headers";
import Home from "./assets/Container/Home/Home";
import Shop from "./assets/Container/Shop/Shop";
import About from "./assets/Container/About/About";
import Footer from "./assets/Footer/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
