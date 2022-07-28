import React,{useLayoutEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function useProtectedPage() {
const navigate = useNavigate();

useLayoutEffect(()=>{
const token = localStorage.getItem('token');
if(token === null){
    console.log("Não está logado")
    navigate("/login")
}

},[navigate])

}
