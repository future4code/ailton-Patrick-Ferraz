import styled, { createGlobalStyle } from "styled-components";



export const Body = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
min-height: 100vh;
align-items: center;
margin: 50px 0px;
`
export const Container = styled.div`
 min-height: 100%;
    display: flex;
    flex-direction: column;
`

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Kanit', sans-serif;
}
`;
