import styled,{createGlobalStyle} from 'styled-components'



export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Kanit', sans-serif;
}
`
export const Header = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid #c1121f;
width: 100%;
padding: 10px;

h1{
    color:#c1121f  
}

`


export const ProfilePhoto = styled.img `
width: 50px;
height: 50px;
border-radius: 40px;
`

export const Container = styled.div`
display: flex;
justify-content:center;

`

export const CardMatchs = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 35vw;
height: 980px;
border: 2px solid #c1121f;
background-color: #003049;
gap:10px;
p{
    color:#fdf0d5;
}
`

export const InfosMatches = styled.div`
display: flex;
align-items: center;
margin-left: 30px;
gap:15px;
margin-bottom: 10px;
`

export const BntProfilePage = styled.button`
background-color: #003049;
border: none;
:hover{
    cursor: pointer;
}
`

export const BtnClear = styled.div`
background-color: white;
border: none;
align-self: flex-end;
margin-left: 50px;
span{
visibility: hidden;
width: 120px;
background-color: black;
color: #fff;
text-align: center;
padding: 5px 0px;
border-radius: 6px;
position: absolute;
z-index: 1;
}
:hover{
    cursor: pointer;
    span{
        visibility: visible;
    }
}
`