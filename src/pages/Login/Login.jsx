import React, {
  useState,
  useContext
} from "react";


import {
  useNavigate,
  Link,

} from "react-router-dom";

import { Oval } from "react-loader-spinner";
import { login } from "../../services/api";

import { UserContext } from "../../contexts/UserContext";


import { Container, Logo, Form, TextList } from "./styles";


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
            <Oval color="#52B6FF" height={20} width={20} />
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