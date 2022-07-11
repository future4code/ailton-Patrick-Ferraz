import axios from "axios";
import { useState,useEffect } from "react";

export const useRequestData = (url) =>{
const [data,setData] = useState (undefined);


useEffect(()=>{
    axios.get(url)
    .then((res)=>{setData(res.data.trips)})
    .catch((err)=>{console.log(err)})
},[url]);

return data
}