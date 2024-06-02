import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Films from "./pages/Films";
import Planets from "./pages/Planets";
import Navbar from "./components/Navbar";
import injectContext from "./store/context";
import { FilmDetail } from "./pages/details/FilmDetail";
import People from "./pages/People";
import { PeopleDetail } from "./pages/details/PeopleDetal";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa el CSS de Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createPopper } from "@popperjs/core";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:id" element={<FilmDetail />} />
        <Route path="/character" element={<People />} />
        <Route path="/character/:id" element={<PeopleDetail />} />
        <Route path="/planets" element={<Planets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
