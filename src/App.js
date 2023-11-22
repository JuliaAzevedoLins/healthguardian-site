import "./App.css";
import React, { useState, useEffect  } from "react";
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from "./components/Login/Login";
import Cadastro from "./components/Cadastro/Cadastro";
import Footer from "./components/Footer/Footer";
import "../src/components/Comum_CSS/All_components.css";
import HealthGuardian from "./components/HealthGuardian/HealthGuardian";
import Header from "./components/Header/Header";
import Criadores from "./components/Criadores/Criadores"
import Beneficios from "./components/Beneficios/Beneficios";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const auth = localStorage.getItem('isAuthenticated');
    return auth ? JSON.parse(auth) : false;
  });

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="Login" element={<Login onLogin={handleLogin} />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/HealthGuardian" element={isAuthenticated ? <HealthGuardian /> : <Navigate to="/Login" replace />} />
        <Route path="/Criadores" element={isAuthenticated ? <Criadores /> : <Navigate to="/Login" replace />} />
        <Route path="/Beneficios" element={isAuthenticated ? <Beneficios /> : <Navigate to="/Login" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;