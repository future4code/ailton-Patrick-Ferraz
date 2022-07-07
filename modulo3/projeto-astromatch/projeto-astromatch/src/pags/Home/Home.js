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
      <Header>
      <h1>astroMatch</h1>
      <BtnMatchPage onClick={props.goToMatches}><img src={MatchPage}/></BtnMatchPage>
      </Header>
    
      <ProfilePhoto src={profile.photo} alt="profile photo"></ProfilePhoto>

      <InfosProfile>
        <h3>{profile.name}, {profile.age}</h3>
        <p>{profile.bio}</p>
      </InfosProfile>

         <BtnDiv>
         <BtnDislike onClick={dontChoosePerson}><img src={Dislike}/></BtnDislike>
        <BtnLike onClick={choosePerson}><img src={Like}/></BtnLike>
          </BtnDiv>     
  
    </CardProfile>

    <BtnClear onClick={props.clear} ><img src={Clear}/>
    <span>Limpar swipes e matches</span>
    </BtnClear>
    </Container>
  );
}
