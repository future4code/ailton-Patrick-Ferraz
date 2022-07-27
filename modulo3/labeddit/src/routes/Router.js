import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login/Login';
import Cadastro from '../pages/Cadastro/Cadastro'
import Feed from '../pages/Feed/Feed'
import Post from '../pages/Post/Post'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from '../components/Header/Header';



export default function router() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route index element={<Login/>}/>
        <Route path={"/cadastro"} element={<Cadastro/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={'/feed'} element={<Feed/>}/>
        <Route path={'/post/:id'} element={<Post/>}/>
        <Route path={'/error'} element={<ErrorPage/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}
