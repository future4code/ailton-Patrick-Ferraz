import React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
import { cadastro } from "../../services/users";
import { useNavigate } from "react-router-dom";

export default function CadastroForm(setRightButtonText) {
  const [form, onChange, clear] = useForm({username:"", email: "", password: "" });
  const navigate = useNavigate()
 
  const onSubmitForm = (e) => {
    e.preventDefault();
    cadastro(form,clear,navigate,setRightButtonText)
  };

  return (
  
        <form onSubmit={onSubmitForm}>
                 <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            fullWidth
            margin="normal"
            name={"username"}
            value={form.username}
            onChange={onChange}
            required
            type={"text"}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name={"email"}
            value={form.email}
            onChange={onChange}
            required
            type={"email"}
          />
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            fullWidth
            margin="normal"
            name={"password"}
            value={form.password}
            onChange={onChange}
            required
            type={"password"}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            margin="normal"
          >
            Cadastrar
          </Button>
        </form>
  );
}