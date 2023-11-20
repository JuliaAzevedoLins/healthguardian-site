import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #9CBCCC;
`;



function Signup() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    phone: "",
    postalCode: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.password || !form.phone || !form.postalCode || !form.address) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    fetch(
      "https://healthguardian-e9b30-default-rtdb.firebaseio.com/DadosClientes.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          CEP: form.postalCode,
          Email: form.email,
          Nome: form.name,
          Senha: form.password,
          Telefone: form.phone,
          Endereço: form.address,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setError(null); // Clear the error message on successful submission
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Main>
        <Form onSubmit={handleSubmit} style={{width:"30%"}}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter phone number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPostalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter postal code"
              name="postalCode"
              value={form.postalCode}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              name="address"
              value={form.address}
              onChange={handleChange}
            />
          </Form.Group>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <Button className="botao" variant="primary" type="submit" style={{margin:"0 auto", width:"50%"}}>
            Submit
          </Button>
        </Form>
    </Main>
  );
}

export default Signup;