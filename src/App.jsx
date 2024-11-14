import "./styles/partials/_global.scss";
import "./App.scss";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <main className="viewBox">
      <BrowserRouter>
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <section className="viewBox__content">
          {!isMenuOpen && (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />

              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          )}
        </section>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
