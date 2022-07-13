import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { backOnePage } from "../../Routes/coordinator";
import { useEffect } from "react";
import axios from "axios";
import { base_URL, aluno } from "../../constants/constants";
import useProtectedPage from "../../Hooks/useProtectedPage";

export default function TripDetailsPage() {
  useProtectedPage()
  const params = useParams();
  const idTrip = params.id;
  const [details, setDetails] = useState("");

  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`${base_URL}/${aluno}/trip/${idTrip}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        console.log(res.data.trip);
        setDetails(res.data.trip)
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  const navigate = useNavigate();

  return (
    <div>
      <h1> TripDetailsPage</h1>
      <div>
        <h3>{details.name}</h3>
        <p>Detalhes da Viagem: {details.description}</p>
        <p>Planeta: {details.planet}</p>
        <p>Duração em dias: {details.durationInDays}</p>
        <p>Data: {details.date}</p>

      </div>
      <button onClick={() => backOnePage(navigate)}>Voltar</button>
    </div>
  );
}
