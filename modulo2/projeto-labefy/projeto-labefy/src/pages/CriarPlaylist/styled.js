import styled from "styled-components";

export const CardPlaylist = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 220px;
height: 130px;
border-radius: 25px;
&:hover {
  cursor: pointer;
  background-color: black;
  color: white;
}
`;


export const BtnDelete = styled.button`
border-radius: 25px;
&:hover{
cursor: pointer;
}
`
export const Playlists = styled.div`
display: flex;
height: 100%;
`

export const CriarPlaylistSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
align-items: center;
height: 25%;
padding: 40px;
`

export const PlaylistsSection = styled.section`
display: flex;
flex-wrap: wrap;
height: 100%;
width: 100%;
`

