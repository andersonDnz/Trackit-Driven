import React, { useState } from "react";
import { useNavigate, Link, } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { signUp } from "../../services/api";

import {
  Container,
  Form,
  LoaderWrapper,
  Logo
} from "./styles";




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
        />
        <input
          name="password"
          type="password"
          placeholder="senha"
          value={form.password}
          onChange={handleChange}
          disabled={loading}
          required
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
            <LoaderWrapper>
              <Oval
                height={40}
                width={40}
                color="#ffffff"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#cccccc"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </LoaderWrapper>
          ) : (
            "Cadastrar"
          )}
        </button>
      </Form>
      <Link to="/">Já tem uma conta? Faça login!</Link>
    </Container>
  );
};

export default Cadastro;
