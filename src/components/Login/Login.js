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
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://healthguardian-e9b30-default-rtdb.firebaseio.com/DadosClientes.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const dataArray = Object.values(data);
        let userFound = false;
        for (let i = 0; i < dataArray.length; i++) {
          if (dataArray[i].Email === form.email && dataArray[i].Senha === form.password) {
            userFound = true;
            console.log("Senha correta");
            localStorage.setItem("loggedInUser", dataArray[i].Nome);
            if (typeof onLogin === "function") {
              onLogin();
            }
            navigate("/HealthGuardian");
            break;
          }
        }
        if (!userFound) {
          setError('Senha ou e-mail incorretos');
        }
      });
  };
  return (

<Main>
  <LoginComponent>
    <InitialPhrase className="Frase_inicial">
      De volta ao Health Guardian!
    </InitialPhrase>
    <br></br>
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
        <br></br>
        {error && <p style={{color: 'red'}}>{error}</p>}
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
