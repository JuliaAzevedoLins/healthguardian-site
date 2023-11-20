import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Main = styled.div`
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1F7385;
  @media (min-width: 300px) and (max-width: 800px){
    width: 100vw;
    height: 70vh;
    display: space-between;
  }
  
`;

const Login_ = styled.div`
  margin-top : 4%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Frase_inicial = styled.div`
  padding-top: 7%;
  font-size: 30px;
  text-align: center;
  justify-content: center;
  color: #ffff;
`;

const Send_to_cadastro = styled.div`

  padding-top: 2%;
  font-size: 20px;
  text-align: center;
  justify-content: center;
  color: #ffff;
  @media (min-width: 300px) and (max-width: 800px){
    font-size: 15px;
  }

`;

const Clique_aqui = styled(Link)`
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
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://healthguardian-e9b30-default-rtdb.firebaseio.com/DadosClientes.json')
    .then(response => response.json())
    .then(data => {
      const dataArray = Object.values(data);
      for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].Email === form.email) {
          if (dataArray[i].Senha === form.password) {
            console.log("Senha correta");
            localStorage.setItem("loggedInUser", dataArray[i].Nome);
            onLogin();
            navigate('/HealthGuardian');
          }
        }
      }
    });
  }
  return (

    <Main>
    <Frase_inicial className='Frase_inicial'>De volta ao Health Guardian!</Frase_inicial>
    <Login_>
    <Form onSubmit={handleSubmit} className="formStyle">
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <FormLabel >E-mail</FormLabel>
        <Form.Control type="email" placeholder="Digite seu email" name="email" value={form.email} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <FormLabel>Senha</FormLabel>
        <Form.Control type="password" placeholder="Digite sua senha" name="password" value={form.password} onChange={handleChange} />
      </Form.Group>
      <Form.Control className="botao" type="submit" value="Submit"  style={{margin:"0 auto", width:"50%"}}/>
      <Send_to_cadastro>Ainda não possui uma conta?</Send_to_cadastro>
      <Send_to_cadastro>Você pode <Clique_aqui to="/Cadastro">criar uma conta aqui!</Clique_aqui></Send_to_cadastro>
    </Form>
    </Login_>
    </Main>
  );
}

export default Login;

