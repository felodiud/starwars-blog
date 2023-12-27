import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Films from "./pages/Films";
import Planets from "./pages/Planets";
import Navbar from "./components/Navbar";
import injectContext from "./store/context";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Films" element={<Films />} />
        <Route path="/Planets" element={<Planets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
