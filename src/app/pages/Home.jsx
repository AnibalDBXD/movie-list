import React from "react";
import { connect } from "react-redux";

import "./styles/Home.scss";

import Search from "../components/Search";

import MovieContainer from "../components/MovieContainer.jsx";

function Home() {
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
              <MovieContainer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
