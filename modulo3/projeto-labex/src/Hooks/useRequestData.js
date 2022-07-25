import axios from "axios";
import { useState,useEffect } from "react";


export const useRequestData = (url) =>{
const [data,setData] = useState ("");
const [isLoading, setIsLoading] = useState(false);

useEffect(()=>{
    setIsLoading(true);
    getTrips(url)
},[url]);

const getTrips = (url) =>{
    axios.get(url)
.then((res)=>{setData(res.data.trips); setIsLoading(false)})
.catch(()=>{ setIsLoading(false)})
}

return [data,getTrips,isLoading]
}
