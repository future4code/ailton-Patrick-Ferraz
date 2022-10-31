import { PosterImageURL } from "../../Constants/url";
import { ContainerRecommendations, RecommendationPoster } from "./styled";


const CardRecommendations = ({recommendations}) =>{
const releaseDateRefactored = recommendations.release_date.split('-').reverse().join('/')

return(
<ContainerRecommendations>
<RecommendationPoster src={`${PosterImageURL}${recommendations.poster_path}`}/>
<h3>{recommendations.title}</h3>
<p>{releaseDateRefactored}</p>
</ContainerRecommendations>
    );
};

export default CardRecommendations;