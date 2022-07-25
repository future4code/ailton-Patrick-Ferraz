import React, { useEffect } from 'react'
import { useNavigate} from "react-router-dom"

export default function useProtectedPage() {
  const navigate = useNavigate();

useEffect(()=>{
const token = localStorage.getItem('token');
if (token === null){
    console.log("Não está logado!")
    navigate("/login")
}
},[])

}

