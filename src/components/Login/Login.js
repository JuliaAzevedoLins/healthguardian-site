import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Fundo from "./FundoLogin.png"


const Main = styled.div`
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-image: url(${Fundo});
  background-size: cover;
  @media (min-width: 300px) and (max-width: 800px){
    width: 100vw;
    height: 100vh;
    display: space-between;
  }
  
`;

const LoginComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

const InitialPhrase = styled.div`
  padding-top: 7%;
  font-size: 30px;
  text-align: center;
  justify-content: center;
  color: #ffff;
`;

const SendToCadastro = styled.div`

  padding-top: 2%;
  font-size: 20px;
  text-align: center;
  justify-content: center;
  color: #ffff;
  @media (min-width: 300px) and (max-width: 800px){
    font-size: 15px;
  }

`;

const ClickHere = styled(Link)`
  color: #598C92;
  text-decoration: none;
  &:hover {
    color: #a37b2b;
  }
`;

const FormLabel = styled.label`
  color: #ffff;

`;

function Login({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://healthguardian-e9b30-default-rtdb.firebaseio.com/DadosClientes.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const dataArray = Object.values(data);
        for (let i = 0; i < dataArray.length; i++) {
          if (dataArray[i].Email === form.email) {
            if (dataArray[i].Senha === form.password) {
              console.log("Senha correta");
              localStorage.setItem("loggedInUser", dataArray[i].Nome);
              if (typeof onLogin === "function") {
                onLogin();
              }
              navigate("/HealthGuardian");
            }
          }
        }
      });
  };
  return (

    <Main>
      <LoginComponent>
      <InitialPhrase className="Frase_inicial">
        De volta ao Health Guardian!
      </InitialPhrase>
        <Form onSubmit={handleSubmit} className="formStyle">
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <FormLabel>E-mail</FormLabel>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <FormLabel>Senha</FormLabel>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Control
            className="botao"
            type="submit"
            value="Submit"
            style={{ margin: "0 auto", width: "50%" }}
          />
          <SendToCadastro>Ainda não possui uma conta?</SendToCadastro>
          <SendToCadastro>
            Você pode{" "}
            <ClickHere to="/Cadastro">criar uma conta aqui!</ClickHere>
          </SendToCadastro>
        </Form>
      </LoginComponent>
    </Main>

  );
}

export default Login;
