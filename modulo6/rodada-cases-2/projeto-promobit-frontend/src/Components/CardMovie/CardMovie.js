import {useNavigate} from "react-router-dom"
import styled from "styled-components";
import { PosterImage, PosterImageURL } from "../../Constants/url";
import { goToDetails } from "../../Router/coordinator";

const ContainerCardMovie = styled.div`
margin:0.5rem;
display : flex;
flex-direction: column;
justify-content:center;

`

const MoviePoster = styled.img`
box-sizing: border-box;
width: 156px;
height: 232px;
left: 16px;
top: 619px;
border-radius: 4px;
`
const MovieTitle = styled.h4`
margin-top: 10px;
width: 155px;
height: 40px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 1.2rem;
line-height: 20px;
display: flex;
align-items: center;
color: #000000;
`

const MovieReleaseData = styled.h5`
width: 155px;
height: 40px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 20px;
display: flex;
align-items: center;
color: #000000;
`

const CardMovie = ({movie}) =>{

const navigate = useNavigate();
const releaseDateRefactored = movie.release_date.split('-').reverse().join('/');

    return(
        <ContainerCardMovie onClick={()=>goToDetails(navigate,movie.id)}>
            <MoviePoster src={`${PosterImageURL}${movie.poster_path}`}/>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieReleaseData>{releaseDateRefactored}</MovieReleaseData>
           
        </ContainerCardMovie>
    );
};

export default CardMovie;