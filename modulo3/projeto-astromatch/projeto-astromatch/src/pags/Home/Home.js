import axios from "axios";
import React, { useEffect, useState } from "react";
import { url_base, aluno } from "../../components/constants";
import { Container,CardProfile,ProfilePhoto,InfosProfile,BtnDislike,BtnLike } from "./HomeStyled";
import Like from "../../imgs/Like.png"
import Dislike from "../../imgs/Dislike.png"


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
      choice: choise,
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
      choice: choise,
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
    <Container>
    <CardProfile>
      <div>
      <h1>astroMatch</h1>
      <button onClick={props.goToMatches}>Home</button>
      </div>
    
      <ProfilePhoto src={profile.photo} alt="profile photo"></ProfilePhoto>

      <InfosProfile>
        <h3>{profile.name}, {profile.age}</h3>
        <p>{profile.bio}</p>
      </InfosProfile>

         <div>
         <BtnDislike onClick={dontChoosePerson}><img src={Dislike}/></BtnDislike>
        <bBtnLike onClick={choosePerson}><img src={Like}/></bBtnLike>
          </div>     
  
    </CardProfile>

    <button onClick={props.clear}>Clear</button>
    </Container>
  );
}
