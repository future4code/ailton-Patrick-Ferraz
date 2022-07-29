import React,{useState} from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
import {login} from '../../services/users'
import { useNavigate } from "react-router-dom";
import {CircularProgress} from "@mui/material";


export default function LoginForm({ setRightButtonText}) {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const onSubmitForm = (e) => {
    e.preventDefault();
    login(form,clear,navigate,setRightButtonText,setIsLoading);
  };


  return (
    <form onSubmit={onSubmitForm}>
      <TextField
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
        {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Login</>}
      </Button>
    </form>
  );
}
