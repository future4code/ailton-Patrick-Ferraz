import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../Routes/coordinator";
import axios from "axios";
import { aluno, base_URL } from "../../constants/constants";
import useForm from "../../Hooks/useForm";
import Header from "../../constants/Header";
import Footer from "../../constants/Footer";
import { CardLogin,BtnSubmit,Form,Title,BtnBack,BodyLogin } from "./styled";
import { Body } from "../../Components/components";

export default function LoginPage() {
  const { form, onChange } = useForm({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onSubmitLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${base_URL}/${aluno}/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/list");
      })
      .catch(() => {
        alert("Senha ou E-mail invalido. Tente novamente");
      });
  };

  return (
    <div>
      
      <Header/>
      <BodyLogin>
      <CardLogin>
      <Title>LoginPage</Title>
      <Form onSubmit={onSubmitLogin}>
        <input
          name={"email"}
          type={"email"}
          onChange={onChange}
          value={form.email}
          placeholder="E-mail"
          required
        />
        <input
          name={"password"}
          type={"password"}
          onChange={onChange}
          value={form.password}
          placeholder="Senha"
          required
        />
        <BtnSubmit>Login</BtnSubmit>
      </Form>
      <BtnBack onClick={() => goToHomePage(navigate)}>Voltar</BtnBack>
      </CardLogin>
      </BodyLogin>
      <Footer/>
      
    </div>
  );
}
