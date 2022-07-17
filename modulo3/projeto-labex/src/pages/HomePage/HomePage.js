import React from "react";
import {
  DivBtnHomePage,
  ImgHomeLogo,
  BtnHome,
} from "./styledHome";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from "../../Routes/coordinator";
import { Body, Container } from "../../Components/components";
import Header from "../../constants/Header";
import Footer from "../../constants/Footer";
import AstroHome from "../../Imgs/AstroHome.png";


export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header/>
      <Body>
        <ImgHomeLogo src={AstroHome} />
        <h1>LabeX</h1>
        <DivBtnHomePage>
          <BtnHome onClick={() => goToListTripsPage(navigate)}>
            Ver Viagens
          </BtnHome>
          <BtnHome onClick={() => goToLoginPage(navigate)}>Login</BtnHome>
        </DivBtnHomePage>
        </Body>
      <Footer/>
     
    </Container>
  );
}
