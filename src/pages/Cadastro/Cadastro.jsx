import React, { useState } from "react";
import { useNavigate, Link, } from "react-router-dom";
import { signUp } from "../../services/api";

import {
  Container,
  Form,
  LoaderWrapper,
  Logo,
  TextList
} from "./styles";

import styled from "styled-components";

const LoadingDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  div {
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    opacity: 0.3;
    animation: fade 1.4s infinite ease-in-out both;
  }
  div:nth-child(1) {
    animation-delay: 0s;
  }
  div:nth-child(2) {
    animation-delay: 0.2s;
  }
  div:nth-child(3) {
    animation-delay: 0.4s;
  }
  @keyframes fade {
    0%, 80%, 100% {
      opacity: 0.3;
    }
    40% {
      opacity: 1;
    }
  }
`;

const Cadastro = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    signUp(form)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert("Erro ao cadastrar. Tente novamente.");
        setLoading(false);
      });
  }

  return (
    <Container>
      <Logo src="/assets/logo.png" alt="TrackIt" />
      <Form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="email"
          value={form.email}
          onChange={handleChange}
          disabled={loading}
          required
          autoComplete="current-password"
        />
        <input
          name="password"
          type="password"
          placeholder="senha"
          value={form.password}
          onChange={handleChange}
          disabled={loading}
          required
          autoComplete="current-password"
        />
        <input
          name="name"
          type="text"
          placeholder="nome"
          value={form.name}
          onChange={handleChange}
          disabled={loading}
          required
        />
        <input
          name="image"
          type="url"
          placeholder="foto (URL)"
          value={form.image}
          onChange={handleChange}
          disabled={loading}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? (
            <LoadingDots>
              <div />
              <div />
              <div />
            </LoadingDots>
          ) : (
            "Cadastrar"
          )}
        </button>
      </Form>
      <Link to="/">
        <TextList>
          Já tem uma conta? Faça login!
        </TextList>
      </Link>
    </Container>
  );
};

export default Cadastro;
