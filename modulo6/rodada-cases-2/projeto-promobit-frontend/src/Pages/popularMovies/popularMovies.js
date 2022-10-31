import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { key } from "../../Constants/key";
import CardMovie from "../../Components/CardMovie/CardMovie";
import Header from "../../Components/Header/Header";
import ReactPaginate from "react-paginate";
import useGenres from "../../Hooks/useGenre";
import Genres from "../../Components/Genres/Genres";
import { CardsMovies, ContainerPopularMovies, Menu, MenuItem, MenuPhrase } from "./styled";



const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreForURL = useGenres(selectedGenres)


 useEffect(() => {
    getPopularMovies();
  }, [page,genreForURL]);


  const handlePageClick = (data) => {
    let currentpage = data.selected + 1;
    setPage(currentpage);
  };

  const getPopularMovies = () => {
    axios
      .get(
        `${BASE_URL}/movie/popular?api_key=${key}&language=pt-BR&page=${page}&with_genres=${genreForURL}`
      )
      .then((res) => {
        setMovies(res.data.results);
        setPage(res.data.page);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };


  const movieMap = movies.map((movie) => {
    return <CardMovie key={movie.id} movie={movie} />;
  });

  return (
    <ContainerPopularMovies>
      <Header title={"TMDB"} />
      <Menu>
        <MenuPhrase>
          {" "}
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </MenuPhrase>
        <p>FILTRE POR:</p>
        <MenuItem>
          <Genres
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            genres={genres}
            setGenres={setGenres}
            setPage={setPage}
          />
        </MenuItem>
      </Menu>
      <CardsMovies>{movieMap}</CardsMovies>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={20}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </ContainerPopularMovies>
  );
};

export default PopularMovies;
