import "./styles/partials/_global.scss";
import "./App.scss";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <main className="viewBox">
      <Nav />
      <Footer />
    </main>
  );
}

export default App;
