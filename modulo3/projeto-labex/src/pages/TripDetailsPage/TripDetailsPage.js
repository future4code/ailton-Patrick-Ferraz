import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { backOnePage } from "../../Routes/coordinator";
import { useEffect } from "react";
import axios from "axios";
import { base_URL, aluno } from "../../constants/constants";
import useProtectedPage from "../../Hooks/useProtectedPage";
import Header from "../../constants/Header"
import Footer from "../../constants/Footer"
import { CardDetails,Candidates,BtnBack,Title,Infos, PendingCandidate, ApprovedCandidate} from "./styled";
import { Body, Container } from "../../Components/components";
import { useRequestData } from "../../Hooks/useRequestData";

export default function TripDetailsPage() {
  useProtectedPage();
  const params = useParams();
  const idTrip = params.id;
  const [details, setDetails] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isLoading] = useRequestData(`${base_URL}/${aluno}/trip/${idTrip}`)
 


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
      .then(() => {
        tripDetails();
      })
      .catch(() => {
      });
  };

  const candidates =
    details.candidates &&
    details.candidates.map((person) => {
      return (
        <PendingCandidate key={person.id}>
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
        </PendingCandidate>
      );
    });

  const approvedCandidates =
    details.approved &&
    details.approved.map((person) => {
      return (
        <ApprovedCandidate key={person.id}>
          <div>
          <p>Nome: {person.name}</p>
          <p>Idade: {person.age}</p>
          <p>Profissão: {person.profession}</p>
          <p>País: {person.country}</p>
          <p>Texto de candidatura: {person.applicationText}</p>
          </div>
        </ApprovedCandidate>
      );
    });

  return (
    <Container>
      <Header/>
      <Body>
      <CardDetails>
      <Title> Detalhes da viagem</Title>
      <Infos>
        <h3>{details.name}</h3>
        <p>Detalhes da Viagem: {details.description};</p>
        <p>Planeta: {details.planet};</p>
        <p>Duração em dias: {details.durationInDays};</p>
        <p>Data: {details.date}.</p>
      </Infos>
      <Candidates>
      <h4>Candidatos Pendentes</h4>
      {isLoading && <strong>Carregando lista de Candidatos Pendentes</strong>}
      {!isLoading && details.candidates && details.candidates.length > 0 && candidates}
      {!isLoading && details.candidates && details.candidates.length === 0 && (
        <strong>Não há candidatos pendentes.</strong>)}
      </Candidates>
      <Candidates>
        <h4>Candidatos Aprovados</h4>
        {isLoading && <strong>Carregando lista de Candidatos Pendentes</strong>}
        {!isLoading && details.approved && details.approved.length > 0 && approvedCandidates}
        {!isLoading && details.approved && details.approved.length === 0 && (
          <strong>Ainda não existem candidatos aprovados para essa viagem. </strong>
        )}
      </Candidates>
      <BtnBack  onClick={() => backOnePage(navigate)}>Voltar</BtnBack>
      </CardDetails>
      </Body>
      <Footer/>
    </Container>
  );
}