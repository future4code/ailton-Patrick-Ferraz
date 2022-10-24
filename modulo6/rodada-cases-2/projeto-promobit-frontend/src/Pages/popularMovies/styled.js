import styled from "styled-components";

export const ContainerPopularMovies = styled.div`
width: 100%;
`;

export const CardsMovies = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 449px;
  background-color: #2d0c5e;
  p {
    color: #ffffff;
  }
`;

export const MenuPhrase = styled.h4`
  width: 100%;
  height: 112px;
  top: 141px;
  left: 328px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 30px;
  text-align: center;
  letter-spacing: -0.005em;
  color: #ffffff;
`;

export const MenuItem = styled.div`
width: 100%;
`;