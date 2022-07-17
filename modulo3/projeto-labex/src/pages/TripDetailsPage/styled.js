import styled from "styled-components";

export const Title = styled.h1`
margin: 10px 0px;
`

export const CardDetails = styled.div`
border: 1px solid black;
border-radius: 30px;
display: flex;
align-items: center;
flex-direction: column;
height: 80%;
width: 50%;
justify-content: center;
background-color: black;
color:white;
`

export const PendingCandidate = styled.div`
display: flex;
flex-direction: column;
width: 90%;
margin: 10px 0px;
div{
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: left;
    flex-wrap: wrap;  
}
button{
    background-color: black;
    color:white;
    border: 1px solid white;
    border-radius: 25px;
    margin: 5px 0px;
    :hover{
        cursor: pointer;
        background-color: white;
        color:black;
    }
}
`


export const ApprovedCandidate  = styled.div`
display: flex;
flex-direction: column;
width: 90%;
margin: 10px 0px;
div{
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: left;
    flex-wrap: wrap;  
}
`

export const Infos = styled.div`
display: flex;
flex-direction: column;
gap:5px;
margin: 10px 10px;
h3{
    text-align: center;
    margin-bottom: 10px;
}

`

export const Candidates = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid white;
border-radius: 30px;
background-color: purple;
width: 90%;
padding: 10px;
margin: 10px 0px;
`

export const BtnBack = styled.button`
background-color: purple;
border-radius: 25px;
height: 50px;
width: 100px;
margin: 10px 0px;
:hover{
    cursor: pointer;
    background-color: white;
    color:black;
}
`