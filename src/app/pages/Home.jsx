import React from "react";
import { connect } from "react-redux";

import "./styles/Home.scss";

import Search from "../components/Search";

import MovieContainer from "../components/MovieContainer.jsx";

import MoviesSearchedContainer from "../components/MoviesSearchedContainer.jsx";

function Home(props) {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div
                className="col m-2"
                style={{ textAlign: "center", color: "white" }}
              >
                <h1>Welcome to MovieList!</h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Search />
              </div>
            </div>
            <div className="row" style={{ marginTop: "2em" }}>
              {props.movie_searched ? (
                <MoviesSearchedContainer />
              ) : (
                <MovieContainer />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const MapStateToProps = (state) => {
  return {
    movie_searched: state.movie_searched,
  };
};

export default connect(MapStateToProps)(Home);
