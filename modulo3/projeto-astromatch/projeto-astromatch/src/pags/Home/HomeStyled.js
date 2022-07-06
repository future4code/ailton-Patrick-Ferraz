import styled,{createGlobalStyle} from 'styled-components'



export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
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
width: 40vw;
height: 100vh;
border-radius: 25px;
border: 2px solid black;
`

export const InfosProfile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
;
`
export const BtnDislike = styled.button`
background-color: white;
border: none;
`

export const BtnLike = styled.button`
background-color: white;
border: none;
`