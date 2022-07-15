import styled, { createGlobalStyle } from "styled-components";



export const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 20px 0px;
height: 100%;
`
export const Container = styled.div`
height: 100vh;
`
export const ContainerDetails = styled.div`
height:100%
`

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Kanit', sans-serif;
}
`;
