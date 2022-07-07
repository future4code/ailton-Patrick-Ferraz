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
padding: 12px;

h1{
    color:#c1121f  
}

`

export const ProfilePhoto = styled.img `
width: 70%;
height: 50%;
border:1px solid black;

`

export const Container = styled.div`
display: flex;
justify-content:center;

`

export const CardProfile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 35vw;
height: 100vh;
border-radius: 25px;
border: 2px solid #c1121f;
background-color: #003049;
`

export const InfosProfile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

h3{
    color:#c1121f
};

p{
    text-align: center;
    margin: 1rem 1rem;
    color:#fdf0d5;
}

`
export const BtnDiv = styled.div`
display: flex;
width: 40%;
justify-content: space-between;
`

export const BtnDislike = styled.button`
background-color: #003049;
border: none;
:hover{
    cursor: pointer;
}
`

export const BtnLike = styled.button`
background-color: #003049;
border: none;
:hover{
    cursor: pointer;
}
`
export const BtnClear = styled.button`
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

export const BtnMatchPage = styled.button`
background-color: #003049;
border: none;
:hover{
    cursor: pointer;
}
`