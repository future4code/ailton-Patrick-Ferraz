import React from "react";
import Button from "@mui/material/Button";
import {
  ScreenContainer,
  SingUpButtonContainer,
} from "./styled";
import useForm from "../../hooks/useForm";
import LoginForm from "./LoginForm";
import {useNavigate} from 'react-router-dom'
import {goToCadastro} from '../../routes/coordinator'

export default function Login() {
  
  const navigate = useNavigate()

  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <ScreenContainer>
      <h1>Login</h1>
  <LoginForm/>  
      <SingUpButtonContainer>
        <Button onClick={() => goToCadastro(navigate)} fullWidth variant="text" color="primary">
          Cadastre-se
        </Button>
      </SingUpButtonContainer>
    </ScreenContainer>
  );
}
