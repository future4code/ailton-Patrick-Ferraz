import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/coordinator";

export const login = (body,clear,navigate,setRightButtonText,setIsLoading) => {
  setIsLoading(true)
    axios
      .post(`${BASE_URL}/users/login`, body)
      .then((res) => localStorage.setItem("token",res.data.token, clear(),setIsLoading(false),goToFeed(navigate),setRightButtonText('Logout')))
      .catch((err) => console.log(err.response.data.message),setIsLoading(false))
      setIsLoading(false)
  };


  export const cadastro = (body, clear, navigate,setRightButtonText) =>{
    axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => localStorage.setItem("token",res.data.token, clear(),goToFeed(navigate),setRightButtonText('Logout')))
    .catch((err) => console.log(err.response.data.message));
};

