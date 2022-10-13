import {useNavigate} from "react-router-dom"
import styled from "styled-components";
import { PosterImage, PosterImageURL } from "../../Constants/url";
import { goToDetails } from "../../Router/coordinator";

const ContainerCardMovie = styled.div`
border:1px solid black;
margin:0.5rem;
`

const MoviePoster = styled.img`
box-sizing: border-box;
width: 156px;
height: 232px;
left: 16px;
top: 619px;
border: 1px solid #E7E7E7;
border-radius: 4px;
`
const MovieTitle = styled.h4`
width: 155px;
height: 40px;
left: 16px;
top: 3353px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 20px;
display: flex;
align-items: center;
color: #000000;
`

const MovieReleaseData = styled.h5`

`

const CardMovie = ({movie}) =>{
    const navigate = useNavigate();
    return(
        <ContainerCardMovie onClick={()=>goToDetails(navigate,movie.id)}>
            <MoviePoster src={`${PosterImageURL}${movie.poster_path}`}/>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieReleaseData>{movie.release_date}</MovieReleaseData>
           
        </ContainerCardMovie>
    );
};

export default CardMovie;