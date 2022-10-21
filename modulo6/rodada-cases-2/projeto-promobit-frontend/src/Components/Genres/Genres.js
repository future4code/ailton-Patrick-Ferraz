import axios from 'axios';
import React, { useEffect} from 'react'
import { key } from '../../Constants/key';
import { BASE_URL } from '../../Constants/url';
import Chip from '@mui/material/Chip';
import styled from 'styled-components';

export const ContainerGenres = styled.div`
padding:1em;
background-color:#2d0c5e;
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage
}) => {

  const handleAdd = (genre)=> {
    setSelectedGenres([...selectedGenres,genre]);
    setGenres(genres.filter((g)=>g.id !== genre.id));
    window.localStorage.setItem('Filter_Genres',JSON.stringify(selectedGenres))
 
  setPage(1);
  };

  const handleRemove = (genre)=> {
  setSelectedGenres(selectedGenres.filter((selected)=>selected.id !== genre.id));
  window.localStorage.removeItem('Filter_Genres');
  setGenres([...genres,genre])
  setPage(1);
  };

  

  const getGenresMovies = () => {
   axios.get(`${BASE_URL}/genre/movie/list?api_key=${key}&language=pt-BR`)
   .then((res)=>{
    setGenres(res.data.genres)
   })
   .catch((err)=>{
    console.log(err)
   })
    
  };

  useEffect(() => {
    getGenresMovies()
  
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('Filter_Genres'));
    if (items) {
      setSelectedGenres(items);
    }
  }, []);

  return (
    <ContainerGenres>
          {selectedGenres && selectedGenres.map((genre) => 
      (<Chip
        label={genre.name}
        style={{margin:2}}
        size="small"
        key={genre.id}
        color="warning"
        clickable
        onDelete={() =>handleRemove(genre)}
         />)

      )}
      {genres && genres.map((genre) => 
      (<Chip 
        label={genre.name}
        style={{margin:2}}
        size="small"
        color="primary"
        key={genre.id}
        clickable
        onClick={() =>handleAdd(genre)}
         />)

      )}
    </ContainerGenres>
  )
}

export default Genres