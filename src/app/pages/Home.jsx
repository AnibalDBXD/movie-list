import React, { useState, useEffect } from "react";
import { getPopularMovie } from '../../api/index';
import { FETCH_POPULAR_MOVIE } from '../../redux/Actions'
import { connect } from "react-redux";

function Home(props) {
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
    <div>
      <h1>Home</h1>
    </div>
  );
}


const mapStateToProps = (state, props) => {
  return{
    movies: state.movies.list,
    page: state.movies.page,
    loading: state.loading,
  }
};

export default connect(mapStateToProps)(Home);
