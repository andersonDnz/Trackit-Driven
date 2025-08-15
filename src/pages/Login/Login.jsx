import React, {
  useState,
  useContext
} from "react";

import {
  useNavigate,
  Link,

} from "react-router-dom";

import { login } from "../../services/api";

import { UserContext } from "../../contexts/UserContext";

import { Container, Logo, Form, TextList } from "./styles";
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    login({ email, password })
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("trackitUser", JSON.stringify(res.data));
        navigate("/hoje");
      })
      .catch((err) => {
        alert("Erro ao fazer login. Verifique suas credenciais.");
        setLoading(false);
      });
  };

  return (
    <Container>
      <Logo src="/assets/logo.png" alt="TrackIt" />

      <Form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          required
          autoComplete="current-password"
        />
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          required
          autoComplete="current-password"
        />
        <button type="submit" disabled={loading}>
          {loading ? (
            <LoadingDots>
              <div />
              <div />
              <div />
            </LoadingDots>
          ) : (
            "Entrar"
          )}
        </button>
      </Form>
      <Link to="/cadastro">
        <TextList>
          Não tem uma conta? Cadastre-se!
        </TextList>
      </Link>
    </Container >
  );
};

export default Login;
