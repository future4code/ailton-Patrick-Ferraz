import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import DiaDeSorte from "../Pages/DiaDaSorte/DiaDaSorte"
import Lotofacil from "../Pages/Lotofacil/Lotofacil"
import Lotomania from "../Pages/Lotomania/Lotomania"
import Megasena from "../Pages/MegaSena/Megasena"
import Quina from "../Pages/Quina/Quina"
import Timemania from "../Pages/Timemania/Timemania"


export default function Router(){
    return (
        <BrowserRouter>
        <Routes>
        <Route index element={<Megasena/>}/>
        <Route path="loteria/DiaDeSorte" element={<DiaDeSorte/>}/>
        <Route path="loteria/Lotofacil" element={<Lotofacil/>}/>
        <Route path="loteria/Lotomania" element={<Lotomania/>}/>
        <Route path="loteria/Megasena" element={<Megasena/>}/>
        <Route path="loteria/Quina" element={<Quina/>}/>
        <Route path="loteria/Timemania" element={<Timemania/>}/>
        </Routes>
        </BrowserRouter>
    )
}