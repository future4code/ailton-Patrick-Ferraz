import React,{useState} from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
import { createPost } from "../../services/posts";
import {CircularProgress} from "@mui/material";


export default function CreatePostForm() {
  const [form, onChange, clear] = useForm({title:"", body:""});
  const [isLoading, setIsLoading] = useState(false)

 
  const onSubmitForm = (e) => {
    e.preventDefault();
    createPost(form,clear,setIsLoading)
    
  };

  return (
  
        <form onSubmit={onSubmitForm}>
                 <TextField
            id="outlined-basic"
            label="Titulo"
            variant="outlined"
            fullWidth
            margin="normal"
            name={"title"}
            value={form.title}
            onChange={onChange}
            required
            type={"text"}
          />
          <TextField
            id="outlined-basic"
            label="Post"
            variant="outlined"
            fullWidth
            margin="normal"
            name={"body"}
            value={form.body}
            onChange={onChange}
            required
            type={"text"}
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