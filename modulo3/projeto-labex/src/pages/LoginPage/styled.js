import styled from "styled-components";


export const Title = styled.h1`
margin-bottom: 30px;
`

export const BtnSubmit = styled.button`
background-color: purple;
border-radius: 25px;
:hover{
    cursor: pointer;
    background-color: white;
    color:black;
}
`
export const BtnBack = styled.button`
background-color: purple;
width: 100px;
border-radius: 25px;
margin-top: 20px;
:hover{
    cursor: pointer;
    background-color: white;
    color:black;
}
`


export const CardLogin =  styled.div`
border: 1px solid black;
border-radius: 30px;
display: flex;
align-items: center;
flex-direction: column;
height: 60%;
width: 50%;
justify-content: center;
background-color: black;
color:white;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
`
