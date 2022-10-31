import { PosterImageURL } from "../../Constants/url";
import { CastImage, ContainerCardCast } from "./styled";

const CardCast = ({cast}) =>{
   
    return(
<ContainerCardCast>
<CastImage src={`${PosterImageURL}${cast.profile_path}`}/>
<h3>{cast.name}</h3>
<p>{cast.character}</p>
</ContainerCardCast>
    );
};

export default CardCast;