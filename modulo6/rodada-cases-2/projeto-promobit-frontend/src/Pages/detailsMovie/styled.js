import styled from "styled-components";

export const MovieConteiner = styled.div`
width:100%;
`;

export const MovieInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  background-color: #2d0c5e;

  @media screen and (min-device-width : 1200px){
    display: flex;
    flex-direction: row;
  }
`;

export const MoviePoster = styled.img`
  width:23rem;
  height:30rem;
  margin: 1.5rem 1.5rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
`;

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
  color: #ffffff;
  font-family: "Roboto";
  font-style: normal;

  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
  }

  h3{
    margin-top: 2rem;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ContainerCrew = styled.div`

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1rem 1rem 1rem 0px;
`;

export const ContainerMap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem 1rem 0px;
`;

export const ContainerCast = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  margin-top: 10px;
  margin-left: 20px;

`;

export const CastTitle = styled.h2`
margin: 1.5rem;
`;

export const Trailer = styled.iframe`
width: 24rem;
height: 24rem;
margin-left: 1rem ;

@media screen and (min-device-width : 1200px){
  width: 60rem;
height: 30rem;
margin-left: 1rem 
  }
`;

export const TrailerTitle = styled.h2`
margin: 1.5rem;
`;

export const ContainerRecommendations = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom:100px;
`;

export const RecommendationTitle = styled.h2`
margin: 1.5rem;
`;