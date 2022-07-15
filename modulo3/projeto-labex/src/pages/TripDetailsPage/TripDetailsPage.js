import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { backOnePage } from "../../Routes/coordinator";
import { useEffect } from "react";
import axios from "axios";
import { base_URL, aluno } from "../../constants/constants";
import useProtectedPage from "../../Hooks/useProtectedPage";
import Header from "../../constants/Header"
import Footer from "../../constants/Footer"
import { Body, ContainerDetails } from "../../Components/components";

export default function TripDetailsPage() {
  useProtectedPage();
  const params = useParams();
  const idTrip = params.id;
  const [details, setDetails] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    tripDetails();
  }, []);

  const tripDetails = () => {
    axios
      .get(`${base_URL}/${aluno}/trip/${idTrip}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setDetails(res.data.trip);
      })
      .catch(() => {
      });
  };

  const decidePerson = (id,approve) => {
    const body = {
      approve: approve,
    };
    axios
      .put(
        `${base_URL}/${aluno}/trips/${idTrip}/candidates/${id}/decide`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        tripDetails();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const candidates =
    details.candidates &&
    details.candidates.map((person) => {
      return (
        <div>
          <p>Nome: {person.name}</p>
          <p>Idade: {person.age}</p>
          <p>Profissão: {person.profession}</p>
          <p>País: {person.country}</p>
          <p>Texto de candidatura: {person.applicationText}</p>
          <div>
            <button
              onClick={() => {
                decidePerson(person.id,true);
              }}
            >
              Aceitar
            </button>
            <button   onClick={() => {
                decidePerson(person.id,false);
              }}> Dispensar</button>
          </div>
        </div>
      );
    });

  const approvedCandidates =
    details.approved &&
    details.approved.map((person) => {
      return (
        <div>
          <p>Nome: {person.name}</p>
          <p>Idade: {person.age}</p>
          <p>Profissão: {person.profession}</p>
          <p>País: {person.country}</p>
          <p>Texto de candidatura: {person.applicationText}</p>
        </div>
      );
    });

  return (
    <ContainerDetails>
      <Header/>
      <Body>
      <h1> TripDetailsPage</h1>
      <div>
        <h3>{details.name}</h3>
        <p>Detalhes da Viagem: {details.description}</p>
        <p>Planeta: {details.planet}</p>
        <p>Duração em dias: {details.durationInDays}</p>
        <p>Data: {details.date}</p>
      </div>
      <div>
        <h4>Candidatos Pendentes</h4>
        {candidates}
      </div>
      <div>
        <h4>Candidatos Aprovados</h4>
        {approvedCandidates}
      </div>
      <button onClick={() => backOnePage(navigate)}>Voltar</button>
      </Body>
      <Footer/>
    </ContainerDetails>
  );
}
