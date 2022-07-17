import styled from "styled-components"

export const DivBtnHomePage = styled.div`
display: flex;
max-width:100vh;
max-height: 50%;
gap:10vw;
margin-top: 50px;
`

export const ImgHomeLogo = styled.img`
max-height: 300px;
max-width: 300px;
`

export const MainContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 50px 0px;
`

export const BtnHome = styled.button`
background-color: purple;
border-radius: 30px;
border: none;
width: 140px;
height: 60px;
color:white;
:hover{
    cursor: pointer;
    background-color: black;
    color:white;
}


`