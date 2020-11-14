import React from "react";

import { Link } from "react-router-dom";

import "./styles/Movie.scss";

const Rating = ({ rating }) => {
  let stars = [];
  for (let i = 1; i < 11; i++) {
    let klass = "fas fa-star";
    if (rating >= i && rating !== null) {
      klass = "fas fa-star checked";
    }
    stars.push(
      <i
        style={{ direction: i % 2 === 0 ? "rtl" : "ltr" }}
        key={i}
        className={klass}
      />
    );
  }
  return <div className="movie__rating">{stars}</div>;
};

const MovieInfo = ({ name, value }) => (
  <div className={`movie__${name}`}>
    <span className="info__head">
      {name.replace(/\b\w/g, (l) => l.toUpperCase())}
    </span>
    {value}
  </div>
);

const Movie = ({ infos }) => {
  //   const cast = infos.cast.map((actor) => <p key={actor}>{actor}</p>);
  const TestBGimage =
    "https://images-na.ssl-images-amazon.com/images/I/516ZmcSkY3L._AC_SY679_.jpg";
  return (
    <div
      className="movie"
      style={{
        backgroundImage: `url(${TestBGimage})` /*`url(${infos.poster})`*/,
        color: "white",
      }}
    >
      <h2 className="movie__title">{"Title" /*infos.title*/}</h2>

      <span className="movie__description">
        {"Lorem ipsum lorem ipsum" /*infos.description*/}
      </span>

      <div className="movie__infos">
        <MovieInfo name="duration" value={"124m" /*infos.duration*/} />
        <MovieInfo name="director" value={"U" /*infos.director*/} />
        <MovieInfo name="year" value={12 /*infos.year*/} />
        <MovieInfo name="cast" value={1 /*cast*/} />
      </div>

      <div className="movie__imdb">
        {/* <Rating rating={Math.round(5 infos.rating)} />  */}
        <a
          href={"/" /*infos.imdbLink*/}
          className="movie__imdb-button"
          target="blank"
        >
          IMDb
        </a>
      </div>
    </div>
  );
};

export default Movie;
