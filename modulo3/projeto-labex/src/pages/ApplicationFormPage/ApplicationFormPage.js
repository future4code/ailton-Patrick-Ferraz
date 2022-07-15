import axios from "axios";
import React, { useState, useMemo } from "react";
import { useRequestData } from "../../Hooks/useRequestData";
import { base_URL, aluno } from "../../constants/constants";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useNavigate } from "react-router-dom";
import { backOnePage } from "../../Routes/coordinator";
import useForm from "../../Hooks/useForm";

export default function ApplicationFormPage(props) {
  const [trip, setTrip] = useState({});
  const [tripId, setTripId] = useState("");
  const [value, setValue] = useState("");
  const { form, setForm,onChange } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
  });

  const navigate = useNavigate();

  const [trips, getTrips] = useRequestData(`${base_URL}/${aluno}/trips`);

  const applyToTrip = (e) => {
   
    axios
      .post(`${base_URL}/${aluno}/trips/${tripId}/apply`, {
        ...form,
        country: value.label,
      })
      .then(() => alert("Inscrição realizada com sucesso."))
      .catch(() => alert("Inscrição não realizada. Tente novamente."));
  };

const apply = (e) =>{
  e.preventDefault();
  applyToTrip()
  setForm({name:"", age:"", applicationText:"", profession:""})
  setValue("")
}

  const tripChange = (e) => {
    setTrip(e.target.value);
    setTripId(e.target.value);
  };

  const CountrySelector = (e) => {
    const options = useMemo(() => countryList().getData(), []);

    const changeHandler = (value) => {
      setValue(value);
    };

    return (
      <Select
        className="country"
        options={options}
        value={value}
        onChange={changeHandler}
        required
      />
    );
  };

  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>
      <form onSubmit={apply}>
        <select onChange={tripChange}>
          <option value={""}>Nenhuma</option>
          {trips &&
            trips.map((trip) => {
              return (
                <option key={trip.name} value={trip.id}>
                  {trip.name} - {trip.planet}
                </option>
              );
            })}
        </select>
        <input
          name={"name"}
          value={form.name}
          type={"text"}
          placeholder="Nome"
          onChange={onChange}
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 letras"}
        />
        <input
          name={"age"}
          value={form.age}
          type={"number"}
          min="18"
          placeholder="Idade"
          onChange={onChange}
          required
        />
        <input
          name={"applicationText"}
          value={form.applicationText}
          type={"text"}
          placeholder="Texto de candidatura"
          onChange={onChange}
          required
          pattern={"^.{30,}"}
          title={"O texto de candidatura deve ter mais de 30 caracteres"}
        />
        <input
          name={"profession"}
          value={form.profession}
          type={"text"}
          placeholder="Profissão"
          onChange={onChange}
          required
          pattern={"^.{10,}"}
          title={"A profissão dever ter no mínimo 10 caracteres"}
        />
        {CountrySelector()}
        <button>Inscrever-se</button>
      </form>
      <button
        onClick={() => {
          backOnePage(navigate);
        }}
      >
        Voltar
      </button>
    </div>
  );
}
