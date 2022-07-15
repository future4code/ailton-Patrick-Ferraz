import axios from "axios";
import React, { useEffect, useState } from "react";
import { url_base, aluno } from "../../components/constants";
import { Container,Header,CardProfile,ProfilePhoto,InfosProfile,BtnDiv,BtnDislike,BtnLike,BtnClear,BtnMatchPage } from "./HomeStyled";
import Like from "../../imgs/Like.png"
import Dislike from "../../imgs/Dislike.png"
import Clear from "../../imgs/Clear.png"
import MatchPage from "../../imgs/MatchPage.png"


export default function Home(props) {
  const [profile, setProfile] = useState("");
  const [idProfile, setIdProfile] = useState("");
  const [choise,setChoise] = useState(false)

  useEffect(() => {

    getProfileToChoose();
  }, [idProfile]);

  const getProfileToChoose = () => {
    axios
      .get(`${url_base}/${aluno}/person`)
      .then((res) => {
        
        setProfile(res.data.profile);
      })
      .catch((err) => {
        alert("Erro ao escolher perfil.")
      });
  };

  const choosePerson = (profileId) => {
    const body = {
      id: profile.id,
      choice: choise,
    };
    axios
      .post(`${url_base}/${aluno}/choose-person`, body)
      .then((res) => {
        getProfileToChoose(aluno)
        if(res.data.isMatch === true)
        alert (`Parabéns! Você deu Match com ${profile.name}`)
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
      });
  };

  return (
    <Container>

    <CardProfile>

      <Header>
      <h1>astroMatch</h1>
      <BtnMatchPage onClick={props.goToMatches}><img src={MatchPage} alt="icon-go-to-Match-Page"/></BtnMatchPage>
      </Header>
    
      <ProfilePhoto src={profile.photo} alt="profile photo"></ProfilePhoto>

      <InfosProfile>
        <h3>{profile.name}, {profile.age}</h3>
        <p>{profile.bio}</p>
      </InfosProfile>

         <BtnDiv>
         <BtnDislike onClick={dontChoosePerson}><img src={Dislike} alt="icon-Dislike-Button"/></BtnDislike>
        <BtnLike onClick={choosePerson}><img src={Like} alt="icon-Like-Button"/></BtnLike>
          </BtnDiv>     
  
    </CardProfile>

    <BtnClear onClick={props.clear} ><img src={Clear} alt="icon-Clear-Button"/>
    <span>Limpar swipes e matches</span>
    </BtnClear>

    </Container>
  );
}
