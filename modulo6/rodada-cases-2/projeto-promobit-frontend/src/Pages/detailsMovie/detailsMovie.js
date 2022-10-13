import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, PosterImageURL } from "../../Constants/url";
import { key } from "../../Constants/key";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Components/Header/Header";

export const MovieConteiner = styled.div`

`

export const MovieDetails = styled.div`
display: flex;
width: 100%;
height: 600px;
left: 0px;
top: 56px;
background: #2D0C5E;
`;

export const MoviePoster = styled.img`
width: 383px;
height: 574px;
left: 112px;
top: 128px;
background: url(image.png);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 8px;
margin: 34px 86px 143px 86px;
`;

export const MovieInfosContainer = styled.div`

`;

export const MovieInfos = styled.p`

`
export const MovieTitle = styled.h2`
width: 238px;
height: 38px;
left: 528px;
top: 128px;
margin: 72px 674px 50px 7px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 38px;
display: flex;
align-items: center;
letter-spacing: -0.005em;
color: #FFFFFF;
`


const DetailsMovie = () =>{
     const {movieId}= useParams();
     const [moviePoster, setMoviePoster] = useState("");
     const [movieTitle, setMovieTitle] = useState("");
     const [genres, setGenres] = useState([]);
     const [runTime, setRunTime] = useState(0);
     const [releaseDate, setReleaseDate] = useState("");
     const [overview, setOverview] = useState("");
     const [crew,setCrew] = useState([]);
     const [certification, setCertification] = useState("");
     

useEffect(()=>{
    getDetailsMove();
    getCredits();
    getReleaseDate();
},[])

    const getDetailsMove = () =>{

        axios.get(`${BASE_URL}/movie/${movieId}?api_key=${key}&language=pt-BR&`)
        .then((res)=>{
            // console.log("Details",res.data);
            setMoviePoster(res.data.poster_path);
            setMovieTitle(res.data.title);
            setGenres(res.data.genres);
            setRunTime(res.data.runtime);
            setReleaseDate(res.data.release_date)
            setOverview(res.data.overview)
        })
        .catch((err)=>{
            console.log(err.data);
        })
    }

    const getCredits = () =>{

        axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${key}&language=pt-BR&`)
        .then((res)=>{
           console.log('Crew',res.data.crew);
            setCrew(res.data.crew);
           
        })
        .catch((err)=>{
            console.log(err.data);
        })
    }

    const getReleaseDate = () =>{

        axios.get(`${BASE_URL}/movie/${movieId}/release_dates?api_key=${key}`)
        .then((res)=>{
            // console.log(res.data.results[1].release_dates[0].certification);
            setCertification(res.data.results[1].release_dates[0].certification);
                       
        })
        .catch((err)=>{
            console.log(err.data);
        })
    }

const crewFilter = crew.filter((crew)=> crew.job === "Director" || crew.job === "Writer" || crew.job === "Producer")

console.log("Oi",crewFilter)


    return(
        <MovieConteiner>
        <Header title={"TMDB"}/>
        <MovieDetails>
        <MoviePoster src={`${PosterImageURL}${moviePoster}`}/>
        <MovieInfosContainer>
        <MovieTitle>{movieTitle}</MovieTitle>
        <MovieInfos>{certification} anos • {releaseDate}(BR) • {genres.map((genres)=>{return `${genres.name},`})} • {runTime} </MovieInfos>
        <p>Sinopse</p>
        {overview}
        </MovieInfosContainer>
        </MovieDetails>
        </MovieConteiner>
    )
}

export default DetailsMovie;