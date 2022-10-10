import Router from "./Router/Router";
import {BASE_URL} from "./constants/url"
import { useEffect } from "react";
import axios from "axios";

function App() {

  useEffect(()=>{

    getSorteios()
  },[])

const getSorteios = () => {
  axios.get(`${BASE_URL}/loterias`)
  .then((res)=>{
    console.log(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
}


  return (
    <div >
  <Router/>
    </div>
  );
}

export default App;
