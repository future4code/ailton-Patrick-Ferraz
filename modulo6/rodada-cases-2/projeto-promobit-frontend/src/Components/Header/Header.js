import styled from "styled-components";

export const ConteinerHeader = styled.div`
width: 100%;
height: 56px;
left: 0px;
top: 0px;
border:1px solid black;
background: #5C16C5;
`;

export const Title = styled.h1`
width:140px;
height:18.21px;
left: 0%;
right: 0%;
top: 0%;
bottom: -0.14%;
color: #FFFFFF;
`;

const Header= ({title}) =>{
    return(
       <ConteinerHeader>
        <Title>{title}</Title>
       </ConteinerHeader>
    );
};

export default Header;