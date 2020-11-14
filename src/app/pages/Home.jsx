import React from "react";

import Search from "../components/Search";

import "./styles/Home.scss";

import MovieContainer from "../components/MovieContainer.jsx";

function Home() {
  return (
    <main>
      <div className="container">
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
          <MovieContainer />
        </div>
      </div>
    </main>
  );
}

export default Home;
