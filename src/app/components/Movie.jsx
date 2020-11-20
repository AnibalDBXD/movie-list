import React from "react";

import "./styles/Movie.scss";

import loadingPlaceHolder from "../../assets/loading_placerholder.png";

import useLazyImage from "../hooks/useLazyImage";

const MovieInfo = ({ name, value }) => (
  <div className={`movie__${name}`}>
    <span className="info__head">
      {name.replace(/\b\w/g, (l) => l.toUpperCase())}
    </span>
    {value}
  </div>
);

const Movie = ({ data }) => {
  const {
    title,
    poster_path,
    adult,
    overview,
    release_date,
    vote_average,
    original_language,
  } = data;

  const adultContent = adult ? "Yes" : "No";

  const caracterLimit = 150;

  const overviewPost = overview.slice(0, caracterLimit) + "...";

  const posterURL = `https://image.tmdb.org/t/p/original/${poster_path}`;

  const posterLoaded = useLazyImage(posterURL);

  return (
    <div
      className="movie"
      style={{
        backgroundImage: `url(${posterLoaded || loadingPlaceHolder}`,
        backgroundSize: "280px 400px",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      {title.length > 24 ? (
        <h2 className="movie__title title-lite">{title}</h2>
      ) : (
        <h2 className="movie__title">{title}</h2>
      )}

      <span className="movie__description">{overviewPost}</span>

      <div className="movie__infos">
        <MovieInfo name="adultContent" value={adultContent} />
        <MovieInfo name="date" value={release_date} />
        <MovieInfo name="vote" value={vote_average} />
        <MovieInfo name="language" value={original_language} />
      </div>
    </div>
  );
};

export default Movie;
