import axios from "axios";
import React, { useEffect, useState } from "react";
import { url_base, aluno } from "../../components/constants";
import { ProfilePhoto } from "./HomeStyled";

export default function Home(props) {
  const [profile, setProfile] = useState("");
  const [idProfile, setIdProfile] = useState("");
  const [choise,setChoise] = useState(false)

  useEffect(() => {
    const getProfileToChoose = () => {
      axios
        .get(`${url_base}/${aluno}/person`)
        .then((res) => {
          console.log(res)
          setProfile(res.data.profile);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getProfileToChoose();
  }, [idProfile]);

  const choosePerson = (profileId) => {
    const body = {
      id: profile.id,
      choice: true,
    };
    axios
      .post(`${url_base}/${aluno}/choose-person`, body)
      .then((res) => {
        setIdProfile(profileId)
        setChoise(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const dontChoosePerson = (id) => {
    const body = {
      id: profile.id,
      choice: true,
    };
    axios
      .post(`${url_base}/${aluno}/choose-person`, body)
      .then((res) => {
        setIdProfile(id)
        setChoise(false)

      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>astroMatch</h1>
      <ProfilePhoto src={profile.photo} alt="profile photo"></ProfilePhoto>
      <div>
        <strong>{profile.name}</strong>
        <p>{profile.age}</p>
        <p>{profile.bio}</p>
      </div>
      <div>
        <button onClick={choosePerson}>Like</button>
        <button onClick={dontChoosePerson}>Bye</button>
      </div>

      <button onClick={props.goToMatches}>Matches Page</button>
      <button onClick={props.clear}>Clear</button>
    </div>
  );
}
