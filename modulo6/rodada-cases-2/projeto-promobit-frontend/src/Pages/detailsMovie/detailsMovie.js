import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, PosterImageURL, trailerURL } from "../../Constants/url";
import { key } from "../../Constants/key";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import CardCast from "../../Components/CardCast/CardCast";
import CardRecommendations from "../../Components/CardRecommendations/CardRecommendations";

export const MovieConteiner = styled.div``;

export const MovieInfos = styled.div`
  display: flex;
  width: 100%;
  height: 449px;
  background-color: #2d0c5e;
`;

export const MoviePoster = styled.img`
  width: 383px;
  height: 574px;
  margin: 20px 50px 46px 100px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
`;

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
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
  width: 90vw;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  margin-top: 10px;
  margin-left: 90px;
`;

export const CastTitle = styled.h2`
  margin-top: 250px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  margin-left: 95px;
`;

export const ContainerTrailer = styled.div`
  margin-left: 95px;
  margin-top: 10px;
`;

export const Trailer = styled.iframe`
  width: 907px;
  height: 510px;
`;

export const TrailerTitle = styled.h2`
  margin-top: 50px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  margin-left: 95px;
`;

export const ContainerRecommendations = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  margin-top: 10px;
  margin-left: 90px;
  margin-bottom: 100px;
`;

export const RecommendationTitle = styled.h2`
  margin-top: 50px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  margin-left: 95px;
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
        // console.log("Details",res.data);
        setMoviePoster(res.data.poster_path);
        setMovieTitle(res.data.title);
        setGenres(res.data.genres);
        setRunTime(res.data.runtime);
        setReleaseDate(res.data.release_date);
        setOverview(res.data.overview);
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
        console.log("Release Date e Certification", res.data.results);
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

  const releaseDateRefactored = releaseDate.split('-').reverse().join('-');

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
        <MoviePoster src={moviePoster ? `${PosterImageURL}${moviePoster} ` : ""} />
        <MovieDetails>
          <h2>{movieTitle}</h2>
          <p>
            {certificationFilterBR} anos 
           • {releaseDateRefactored} (BR) • {genresStringRefactored} •{" "}
            {runTimeRefectored}
          </p>
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
