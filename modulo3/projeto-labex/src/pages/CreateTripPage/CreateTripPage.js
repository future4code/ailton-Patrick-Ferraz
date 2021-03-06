import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../../Hooks/useProtectedPage";
import { backOnePage } from "../../Routes/coordinator";
import { aluno, base_URL } from "../../constants/constants";
import axios from "axios";
import useForm from "../../Hooks/useForm";
import Header from "../../constants/Header";
import Footer from "../../constants/Footer";
import { CardCreateTrip } from "./styled";
import { Form,Title,BtnBack,BtnSubmit} from "./styled";
import { Body, Container } from "../../Components/components";

export default function CreateTripPage() {
  useProtectedPage();
  const navigate = useNavigate();

  const { form, onChange } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const token = localStorage.getItem("token");

  const createTrip = (e) => {
    e.preventDefault();
    axios
      .post(`${base_URL}/${aluno}/trips`, form, {
        headers: {
          auth: token,
        },
      })
      .then(() => {
        alert("Viagem criada e cadastrada com sucesso!");
      })
      .catch(() => {
      });
  };

  return (
    <Container>
      <Header/>
      <Body>
      <CardCreateTrip>
      <Title>Criar Viagem</Title>
      <Form onSubmit={createTrip}>
        <input
          name={"name"}
          type={"text"}
          onChange={onChange}
          value={form.name}
          placeholder="Nome da Viagem"
          required
          pattern={"^.{5,}"}
          title={"O nome deve ter no mínimo 5 letras"}

        />
        <select name={"planet"} onChange={onChange} required>
        <option value={""}>Escolha um Planeta</option>
        <option value={form.planet.Mercúrio}>Mercúrio</option>
        <option value={form.planet.Vênus}>Vênus</option>
        <option value={form.planet.Marte}>Marte</option>
        <option value={form.planet.Júpiter}>Júpiter</option>
        <option value={form.planet.Saturno}>Saturno</option>
        <option value={form.planet.Urano}>Urano</option>
        <option value={form.planet.Neturno}>Neturno</option>
        </select>
        
        <input
          name={"date"}
          type={"date"}
          onChange={onChange}
          value={form.date}
          min={new Date()}
          placeholder="Data"
          required

        />
        <input
          name={"description"}
          type={"text"}
          onChange={onChange}
          value={form.description}
          placeholder="Descrição da viagem"
          required
          pattern={"^.{30,}"}
          title={"A descrição deve ter no mínimo 30 letras"}

        ></input>
        <input
          name={"durationInDays"}
          type={"number"}
          onChange={onChange}
          value={form.durationInDays}
          min={50}
          placeholder="Duração em dias"
          required

        ></input>
        <BtnSubmit>Criar</BtnSubmit>
      </Form>
      <BtnBack  onClick={() => backOnePage(navigate)}>Voltar</BtnBack>
      </CardCreateTrip >
      
      </Body>
      <Footer/>
    </Container>
  );
}
