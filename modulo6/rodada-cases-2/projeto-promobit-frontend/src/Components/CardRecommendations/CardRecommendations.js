import styled from "styled-components";
import { PosterImageURL } from "../../Constants/url";

export const ContainerRecommendations = styled.div`
display:flex;
flex-direction: column;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 4px;
margin: 0.5rem;
`;

export const RecommendationPoster= styled.img`
width: 176px;
height: 264px;
border-radius: 4px;
`;

const CardRecommendations = ({recommendations}) =>{
   
    return(
<ContainerRecommendations>
<RecommendationPoster src={`${PosterImageURL}${recommendations.poster_path}`}/>
<h3>{recommendations.title}</h3>
<p>{recommendations.release_date}</p>
</ContainerRecommendations>
    );
};

export default CardRecommendations;