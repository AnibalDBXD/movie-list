import React/*, { useState, useEffect }*/ from "react";
// import { getPopularMovie } from '../../api/index';
// import { FETCH_POPULAR_MOVIE } from '../../redux/Actions'
// import { connect } from "react-redux";

import Search from "../components/Search";

import "./styles/Home.scss";

import MovieContainer from "../components/MovieContainer.jsx";

function Home(props) {
  // const [ListMovies, setListMovies] = useState([]);
  // const [Page, setPage] = useState(props.page);
  // const handleGetPopular = async () => {
  //   await getPopularMovie(Page).then((result) => {
  //     props.dispatch(FETCH_POPULAR_MOVIE(result.data));
  //     setListMovies(result.data.results);
  //   });
  // };

  // useEffect(() => {
  //   handleGetPopular();
  // }, [Page]);

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col m-2"
          style={{"textAlign": "center",
                  "color": "white"}} >
              <h1 >Welcome to MovieList!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Search/>
          </div>
        </div>
        <div className="row">
          <MovieContainer/>
        </div>
      </div>
    </main>
  );
}


// const mapStateToProps = (state, props) => {
//   return{
//     movies: state.movies.list,
//     page: state.movies.page,
//     loading: state.loading,
//   }
// };

export default Home;
