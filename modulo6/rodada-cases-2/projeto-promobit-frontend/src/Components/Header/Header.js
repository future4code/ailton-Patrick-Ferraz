import { useNavigate } from "react-router-dom";
import { goToPopularMovies } from "../../Router/coordinator";
import { ConteinerHeader, Title } from "./styled";



const Header= ({title}) =>{

    const navigate = useNavigate();

    return(
       <ConteinerHeader>
        <Title onClick={()=>goToPopularMovies(navigate)}>{title}</Title>
       </ConteinerHeader>
    );
};

export default Header;