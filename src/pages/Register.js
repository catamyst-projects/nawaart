import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Form = styled.form`
  width: 500px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Label = styled.label`
  font-weight: 700;
`;

const Input = styled.input`
  font-size: 1.5rem;
  padding: 10px;
`;

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await axios.post("https://nawaart.herokuapp.com/users/register", {
        name,
        email,
        password,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FormContainer>
      <h1>Register New User</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="*****"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Input type="submit" value="Register" />
        </FormGroup>
      </Form>
    </FormContainer>
  );
};

export default Register;
