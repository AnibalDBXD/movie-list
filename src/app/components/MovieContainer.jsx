//React Dependecies
import React, { lazy, Suspense, useState, useEffect } from "react";

//Redux Dependencies
import { connect } from "react-redux";

//Api
import useAxiosFetch from "../hooks/useAxiosFetch";
import Config from "../../api/config";

//Components
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingComponent from "./LoadingComponent";

const Movie = lazy(() => import("./Movie"));

export const MovieContainer = () => {
  // Hooks
  const [ListMovies, setListMovies] = useState([]);

  const [Page, setPage] = useState(1);
  const { TOKEN, API_URL } = Config;
  const URL = API_URL + `movie/popular?api_key=${TOKEN}&page=${Page}`;

  const { data, loading } = useAxiosFetch(URL);

  //Update the Page to find another page on the api
  const updatePage = () => {
    setPage(Page + 1);
  };

  useEffect(() => {
    const prevMovies = ListMovies;
    const postMovies = data.results ? data.results : [];
    const Movies = prevMovies.concat(postMovies);
    setListMovies(Movies);
  }, [data]);

  return (
    <div className="container">
      <InfiniteScroll
        className="col"
        dataLength={ListMovies.length}
        next={updatePage}
        hasMore={true}
        loader={<LoadingComponent />}
      >
        <Suspense fallback={<LoadingComponent />}>
          <div className="row">
            {loading ? (
              <LoadingComponent />
            ) : (
              ListMovies.map((item) => (
                <div
                  key={item.id}
                  className="mt-4 col-12 col-md-6 col-lg-6 col-xl-6"
                >
                  <Movie key={item.id} data={item} />
                </div>
              ))
            )}
          </div>
        </Suspense>
      </InfiniteScroll>
    </div>
  );
};

const MapStateToProps = (props) => {
  return {
    searched_movies: props.searched_movies,
  };
};

export default connect(MapStateToProps)(MovieContainer);
