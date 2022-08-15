import React from "react";
import {
  ScreenContainer,
  SingUpButtonContainer,
} from "./styled";
import CadastroForm from "./CadastroForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

export default function Cadastro({setRightButtonText}) {
  useUnprotectedPage()

  return (
    <ScreenContainer>
      <h1>Cadastro</h1>
  <CadastroForm setRightButtonText={setRightButtonText}/>  
      <SingUpButtonContainer>
      </SingUpButtonContainer>
    </ScreenContainer>
  );
}