import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, PosterImageURL, trailerURL } from "../../Constants/url";
import { key } from "../../Constants/key";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import CardCast from "../../Components/CardCast/CardCast";
import CardRecommendations from "../../Components/CardRecommendations/CardRecommendations";
import CircularProgressDetails from "../../Components/CircularProgressDetails/CircularProgressDetails";


export const MovieConteiner = styled.div`
width:100%;
`;

export const MovieInfos = styled.div`
  display: flex;
  flex-direction: column;
  height: 1000px;
  background-color: #2d0c5e;
`;

export const MoviePoster = styled.img`
 width: 186px;
height: 279px;
  margin: 20px 88px 46px 60px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
`;

export const MovieDetails = styled.div`
  height: 1658.66px;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  color: #ffffff;
  font-family: "Roboto";
  font-style: normal;

  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ContainerCrew = styled.div`

  display: flex;
  flex-direction: row;
  margin: 1rem 1rem 1rem 0px;
`;

export const ContainerMap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem 1rem 0px;
`;

export const ContainerCast = styled.div`
  display: flex;
  max-height: 100%;
  flex-direction: row;
  overflow-x: scroll;
  margin-top: 10px;
  margin-left: 90px;
`;

export const CastTitle = styled.h2`

`;

export const ContainerTrailer = styled.div`

`;

export const Trailer = styled.iframe`

`;

export const TrailerTitle = styled.h2`

`;

export const ContainerRecommendations = styled.div`

`;

export const RecommendationTitle = styled.h2`

`;

const DetailsMovie = () => {
  const { movieId } = useParams();
  const [moviePoster, setMoviePoster] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [genres, setGenres] = useState([]);
  const [runTime, setRunTime] = useState(0);
  const [releaseDate, setReleaseDate] = useState("");
  const [overview, setOverview] = useState("");
  const [crew, setCrew] = useState([]);
  const [certification, setCertification] = useState([]);
  const [cast, setCast] = useState([]);
  const [keyTrailer, setKeyTrailer] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [voteAverage, setVoteAverage] = useState(0);

  useEffect(() => {
    getDetailsMove();
    getCredits();
    getReleaseDate();
    getVideos();
    getRecommendations();
  }, []);

  const getDetailsMove = () => {
    axios
      .get(`${BASE_URL}/movie/${movieId}?api_key=${key}&language=pt-BR&`)
      .then((res) => {
        setMoviePoster(res.data.poster_path);
        setMovieTitle(res.data.title);
        setGenres(res.data.genres);
        setRunTime(res.data.runtime);
        setReleaseDate(res.data.release_date);
        setOverview(res.data.overview);
        setVoteAverage(res.data.vote_average);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  const getCredits = () => {
    axios
      .get(
        `${BASE_URL}/movie/${movieId}/credits?api_key=${key}&language=pt-BR&`
      )
      .then((res) => {
        setCrew(res.data.crew);
        setCast(res.data.cast);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  const getReleaseDate = () => {
    axios
      .get(`${BASE_URL}/movie/${movieId}/release_dates?api_key=${key}`)
      .then((res) => {
        setCertification(res.data.results);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  const getVideos = () => {
    axios
      .get(`${BASE_URL}/movie/${movieId}/videos?api_key=${key}&language=pt-BR`)
      .then((res) => {
        setKeyTrailer(res.data.results[0].key);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRecommendations = () => {
    axios
      .get(
        `${BASE_URL}/movie/${movieId}/recommendations?api_key=${key}&language=pt-BR&page=1`
      )
      .then((res) => {
        setRecommendations(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const genresMap = genres.map((genres) => {
    return `${genres.name},`;
  });
  const genresStringRefactored = genresMap
    .toString()
    .replace(/,+/g, ",")
    .slice(0, -1);

  const crewFilter = crew.filter(
    (crew) =>
      crew.job === "Director" ||
      crew.job === "Writer" ||
      crew.job === "Producer"
  );
  const certificationFilterBR = certification
    .filter((country) => country.iso_3166_1 === "BR")
    .map((releaseDate) => releaseDate.release_dates[0])
    .map((certification) =>{ return `${certification.certification}`});


  const hour = Math.floor(runTime / 60);
  const min = runTime % 60;
  const textHour = `00${hour}`.slice(-2);
  const textMin = `00${min}`.slice(-2);
  const runTimeRefectored = `${textHour} horas e ${textMin} minutos.`;

  const releaseDateRefactored = releaseDate.split('-').reverse().join('/');

  const crewMap = crewFilter.map((crew) => {
    return (
      <ContainerMap>
        <strong>{crew.name}</strong>
        <p>{crew.job}</p>
      </ContainerMap>
    );
  });

  return (
    <MovieConteiner>
      <Header title={"TMDB"} />
      <MovieInfos>
        <MoviePoster src={moviePoster !== null ? `${PosterImageURL}${moviePoster} ` : ""} />
        <MovieDetails>
          <h2>{movieTitle}</h2>
          <p>
            {certificationFilterBR[0] !== "" ? `${certificationFilterBR} anos ` : 'Sem classificação indicativa na base de dados '} 
            <br/>
           {releaseDateRefactored} (BR) 
           <br/>
           {genresStringRefactored}
           <br/>
          {runTimeRefectored}
          </p>
          <CircularProgressDetails voteAverage={voteAverage}/>
          <h3>Sinopse</h3>
          <p>{overview}</p>
          <ContainerCrew>{crewMap}</ContainerCrew>
        </MovieDetails>
      </MovieInfos>
      <CastTitle> Elenco Original </CastTitle>
      <ContainerCast>
        {cast.map((cast) => {
          return <CardCast key={cast.id} cast={cast} />;
        })}
      </ContainerCast>
      <TrailerTitle>Trailer</TrailerTitle>
      <ContainerTrailer>
        <Trailer src={`${trailerURL}${keyTrailer}`} />
      </ContainerTrailer>
      <RecommendationTitle>Recomendações</RecommendationTitle>
      <ContainerRecommendations>
        {recommendations.map((recommendations) => {
          return (
            <CardRecommendations
              key={recommendations.id}
              recommendations={recommendations}
            />
          );
        })}
      </ContainerRecommendations>
    </MovieConteiner>
  );
};

export default DetailsMovie;
