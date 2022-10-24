import styled from "styled-components";

export const ContainerCardMovie = styled.div`
margin:0.5rem;
display : flex;
flex-direction: column;
justify-content:center;

`

export const MoviePoster = styled.img`
box-sizing: border-box;
width: 156px;
height: 232px;
left: 16px;
top: 619px;
border-radius: 4px;
`
export const MovieTitle = styled.h4`
margin-top: 10px;
width: 155px;
height: 60px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 1.2rem;
line-height: 20px;
display: flex;
align-items: center;
color: #000000;
`

export const MovieReleaseData = styled.h5`
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