import React,{useLayoutEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function useUnprotectedPage() {
const navigate = useNavigate();

useLayoutEffect(()=>{
const token = localStorage.getItem('token');
if(token){
    console.log("Não está logado")
    navigate("/feed")
}

},[navigate])

}
