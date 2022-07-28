import React from "react";
import Button from "@mui/material/Button";
import {
  ScreenContainer,
  SingUpButtonContainer,
} from "./styled";
import useForm from "../../hooks/useForm";
import CadastroForm from "./CadastroForm";
import {useNavigate} from 'react-router-dom'
import {goToCadastro} from '../../routes/coordinator'
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

export default function Cadastro() {
  useUnprotectedPage()
  
  const navigate = useNavigate()

  return (
    <ScreenContainer>
      <h1>Login</h1>
  <CadastroForm/>  
      <SingUpButtonContainer>
        <Button onClick={() => goToCadastro(navigate)} fullWidth variant="text" color="primary">
          Cadastre-se
        </Button>
      </SingUpButtonContainer>
    </ScreenContainer>
  );
}