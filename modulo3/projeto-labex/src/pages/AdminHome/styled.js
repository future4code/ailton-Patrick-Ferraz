import styled from "styled-components";

export const TriplistAdmin = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border: 1px solid white;
border-radius: 10px;
width: 90%;
height: 30%;
margin: 10px 0px;
padding:10px;
`

export const Title = styled.h1`
margin: 10px 0px;
`

export const CardAdmin = styled.div`
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
export const DivBtn = styled.div`
display: flex;
margin: 10px 0px;
gap: 20px;
`

export const BtnCreateTrip = styled.button`
background-color: purple;
border-radius: 25px;
height: 50px;
width: 100px;
:hover{
    cursor: pointer;
    background-color: white;
    color:black;
}
`

export const BtnBack = styled.button`
background-color: purple;
border-radius: 25px;
height: 50px;
width: 100px;
:hover{
    cursor: pointer;
    background-color: white;
    color:black;
}
`

export const BtnLogout = styled.button`
background-color: purple;
border-radius: 25px;
height: 50px;
width: 100px;
:hover{
    cursor: pointer;
    background-color: white;
    color:black;
}
`

export const BtnDelete = styled.button`
background-color: purple;
border-radius: 25px;
height: 50px;
width: 100px;
:hover{
    cursor: pointer;
    background-color: red;
    color:white;
}
`

export const BtnDetails = styled.button`
background-color: purple;
border-radius: 25px;
height: 50px;
width: 100px;
:hover{
    cursor: pointer;
    background-color: white;
    color:black;
}
`