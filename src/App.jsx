import "./styles/partials/_global.scss";
import "./App.scss";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <main className="viewBox">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
