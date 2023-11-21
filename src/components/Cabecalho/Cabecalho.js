import React from "react";
import Logo from "./logo.png";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

function Cabecalho() {
  const location = useLocation();

  const Deslogar = styled(Link)`
    margin-right: 1%;
    width: 10%;
    height: 30%;
    background-color: #c3913b;
    border-radius: 5px;
    border: none;
    text-decoration: none;
    color: white;
    justify-content: center;
    text-align: center;

    &:hover {
      background-color: #a37b2b; 
    }

    @media (min-width: 290px) and (max-width: 310px){
      width: 10%;
      height: 10px;
      margin-right: 1%;
      font-size: 10px;
      justify-content: center;
      text-align: center;
      align-items: center;
    }

    @media (min-width: 300px) and (max-width: 800px){
      width: 60px;
      height: 20px;
      margin-right: 1%;
      font-size: 10px;
    }
  }
  `;
function deslogar() {
  localStorage.removeItem('loggedInUser');
}

return (
  <div className="Cabecalho">
    <div className="Marca_logo">
      <img className="Marca" src={Logo} alt="Logo" />
      <h1 className="HealthGuardian">Health Guardian</h1>
    </div>
    {location.pathname !== '/' &&  location.pathname !== '/Login' && location.pathname !== '/Cadastro' && (
      <div className="Links">
        <Link to="/HealthGuardian">HealthGuardian</Link>
        <Link to="/Criadores">Criadores</Link>
      </div>
    )}
    {location.pathname !== '/' && location.pathname !== '/Login' && location.pathname !== '/Cadastro' &&(
      <Deslogar onClick={deslogar} to="/Login">Deslogar</Deslogar>
    )}
  </div>
);
}

export default Cabecalho;