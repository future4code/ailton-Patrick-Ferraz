import {useNavigate} from "react-router-dom"
import styled from "styled-components";
import { PosterImageURL } from "../../Constants/url";
import { goToDetails } from "../../Router/coordinator";

export const ContainerCardCast = styled.div`
display:flex;
flex-direction: column;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 4px;
margin: 0.5rem;
`;

export const CastImage = styled.img`
width: 175px;
height: 222px;
border-radius: 4px;
`;

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