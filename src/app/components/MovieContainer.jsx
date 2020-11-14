import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { getPopularMovie } from "../../api/index";
import { FETCH_POPULAR_MOVIE } from "../../redux/Actions";

import Movie from "./Movie";

export const MovieContainer = (props) => {
  const [ListMovies, setListMovies] = useState([]);
  const [Page, setPage] = useState(props.page);
  const handleGetPopular = async () => {
    await getPopularMovie(Page).then((result) => {
      props.dispatch(FETCH_POPULAR_MOVIE(result.data));
      setListMovies(result.data.results);
    });
  };

  useEffect(() => {
    handleGetPopular();
  }, [Page]);

  return (
    <div className="container">
      <div className="row">
        {ListMovies.map((item) => (
          <div key={item.id} className="mt-4 col-12 col-md-6 col-lg-4 col-xl-3">
            <Movie key={item.id} data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    movies: state.movies.list,
    page: state.movies.page,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(MovieContainer);
