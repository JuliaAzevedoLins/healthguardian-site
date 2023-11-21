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
import Criadores from "./components/Criadores/Criadores"


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Cabecalho />
      <Routes>
      <Route exact path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/HealthGuardian" element={<HealthGuardian />} />
        <Route path="/Criadores" element={<Criadores />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;