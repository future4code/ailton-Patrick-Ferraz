import axios from "axios";
import { BASE_URL } from "../constants/urls"

export const createPost = (body,clear,setIsLoading) =>{
    setIsLoading(true)
    axios.post(`${BASE_URL}/posts`, body,{
        headers: {
            Authorization: localStorage.getItem("token")
        }
    } ).then((res) =>{
        alert('Post criado com sucesso')
        setIsLoading(false)
        clear()
    }) 
    .catch((err)=>{console.log(err)
    setIsLoading(false)
    })
  }