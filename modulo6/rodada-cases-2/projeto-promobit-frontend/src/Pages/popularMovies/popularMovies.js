import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { key } from "../../Constants/key";
import styled from "styled-components";
import CardMovie from "../../Components/CardMovie/CardMovie";
import Header from "../../Components/Header/Header";
import Pagination from "../../Components/Pagination/Pagination";
import { useParams } from "react-router-dom";

const ContainerPopularMovies = styled.div`

`

const CardsMovies = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
border: 1px solid black;
margin-top: 3rem;
`

export const Menu = styled.nav`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width:100%;
height: 449px;
background-color: #2D0C5E;
p{
    color: #FFFFFF;
}
`

export const MenuPhrase = styled.h4`
width:100%;
height: 112px;
top: 141px;
left: 328px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 30px;
text-align: center;
letter-spacing: -0.005em;
color: #FFFFFF;
`;

export const MenuItem = styled.button`

`

const PopularMovies = () =>{
const [movies, setMovies] = useState([]);
const [genres, setGenres] = useState([]);

    useEffect(()=>{
        getPopularMovies()
        getGenresMovies()
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
    };

    const getGenresMovies = () =>{

        axios.get(`${BASE_URL}/genre/movie/list?api_key=${key}&language=pt-BR`)
        .then((res)=>{
          
            setGenres(res.data.genres)
            
        })
        .catch((err)=>{
            console.log(err.data);
        })
    };

    return(
        <ContainerPopularMovies>
            <Header title={"TMDB"}/>
            <Menu>
                <MenuPhrase> Milhões de filmes, séries e pessoas para descobrir. Explore já.</MenuPhrase>
                <p>FILTRE POR:</p>
                <MenuItem>
                {
                genres.map((genres)=>{
                    return<button>
                    {genres.name}
                    </button>
                })
                }
                </MenuItem>
              
            </Menu>
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