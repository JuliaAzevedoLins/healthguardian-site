import "./App.css";
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Cadastro from "./components/Cadastro/Cadastro";
import Footer from "./components/Footer/Footer";
import "../src/components/Comum_CSS/All_components.css";
import HealthGuardian from "./components/HealthGuardian/HealthGuardian";
import Cabecalho from "./components/Cabecalho/Cabecalho";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;