import axios from "axios";
import { useState,useEffect } from "react";
import { base_URL,aluno } from '../constants/constants'


export const useRequestData = (url) =>{
const [data,setData] = useState ("");
const token = localStorage.getItem("token")

useEffect(()=>{
    getTrips(url)
},[url]);

const getTrips = (url) =>{
    axios.get(url)
.then((res)=>{setData(res.data.trips)})
.catch(()=>{})
}

return [data,getTrips]
}
