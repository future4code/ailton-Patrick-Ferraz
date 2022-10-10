import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import DiaDeSorte from "../pages/DiaDeSorte"
import Lotofacil from "../pages/Lotofacil"
import Lotomania from "../pages/Lotomania"
import Megasena from "../pages/Mega-sena"
import Quina from "../pages/Quina"
import Timemania from "../pages/Timemania"


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