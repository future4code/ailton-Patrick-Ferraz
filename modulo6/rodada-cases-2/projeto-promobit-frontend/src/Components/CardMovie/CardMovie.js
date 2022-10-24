import {useNavigate} from "react-router-dom"
import { PosterImage, PosterImageURL } from "../../Constants/url";
import { goToDetails } from "../../Router/coordinator";
import { ContainerCardMovie, MoviePoster, MovieReleaseData, MovieTitle } from "./styled";


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