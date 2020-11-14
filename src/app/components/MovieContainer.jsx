import React from "react";
import { connect } from "react-redux";

import Movie from "./Movie";

export const MovieContainer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <Movie />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <Movie />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <Movie />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <Movie />
        </div>
      </div>
    </div>
  );
};

export default MovieContainer;
