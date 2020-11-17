//React Dependecies
import React, { lazy, Suspense, useState, useEffect } from "react";

//Redux Dependencies
import { connect } from "react-redux";

//Api
import { Searcher } from "../../api/index";

//Components
import LoadingComponent from "./LoadingComponent";

const Movie = lazy(() => import("./Movie"));

export const MoviesSearchedContainer = (props) => {
  // Hooks
  const [ListMovies, setListMovies] = useState([]);

  const movieToQuery = props.movieToQuery;

  // This function update the State "ListMovies" to show A list of movies ;P
  const handleGetSearchedMovies = async () => {
    await Searcher(movieToQuery).then((result) => {
      const Movies = result.data.results;
      setListMovies(Movies);
    });
  };

  useEffect(() => {
    handleGetSearchedMovies();
  }, [movieToQuery]);

  return (
    <div className="container">
      <div className="col">
        <Suspense fallback={<LoadingComponent />}>
          <div className="row">
            {ListMovies.map((item) => (
              <div
                key={item.id}
                className="mt-4 col-12 col-md-6 col-lg-6 col-xl-6"
              >
                <Movie key={item.id} data={item} />
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieToQuery: state.movie_searched,
});

export default connect(mapStateToProps)(MoviesSearchedContainer);
