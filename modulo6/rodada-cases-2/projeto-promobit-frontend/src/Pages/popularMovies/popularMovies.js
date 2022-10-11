import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { key } from "../../Constants/key";
import styled from "styled-components";
import CardMovie from "../../Components/CardMovie/CardMovie";

const ContainerPopularMovies = styled.div`

`

const CardsMovies = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
border: 1px solid black;
`

const PopularMovies = () =>{
const [movies, setMovies] = useState([])
    useEffect(()=>{
        getPopularMovies()
    },[])

    const getPopularMovies = () =>{

        axios.get(`${BASE_URL}/movie/popular?api_key=${key}&language=pt-BR&page=1`)
        .then((res)=>{
            console.log(res.data.results);
            setMovies(res.data.results);
            
        })
        .catch((err)=>{
            console.log(err.data);
        })
    }

    return(
        <ContainerPopularMovies>
            <CardsMovies>
            {
                movies.map((movie)=>{
                    return <CardMovie
                    key={movie.id}
                    movie={movie}/>
                })
            }
            </CardsMovies>
        </ContainerPopularMovies>
    )
}

export default PopularMovies;