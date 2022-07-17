import styled from "styled-components";

export const CardTrips = styled.div`
border: 1px solid white;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
align-items: center;
width: 90%;
margin: 10px 0px;
padding: 10px;
background-color:purple;
div{
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: left;
    flex-wrap: wrap;  
}
`

export const CardTripList= styled.div`
border-radius: 30px;
display: flex;
align-items: center;
flex-direction: column;
width: 50%;
background-color: black;
color:white;
`

export const Title = styled.h1`
margin: 10px 0px;
`

export const DivBtnTripPage = styled.div`
display: flex;
margin: 10px 0px;
gap: 20px;
`
export const BtnListTrip = styled.button`
background-color: purple;
border-radius: 25px;
height: 50px;
width: 100px;
color:white;
:hover{
    cursor: pointer;
    background-color: white;
    color:black;
}
`


