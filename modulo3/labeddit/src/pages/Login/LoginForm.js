import React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import useForm from "../../hooks/useForm";

export default function LoginForm() {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
  
        <form onSubmit={onSubmitForm}>
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
            Login
          </Button>
        </form>
  );
}