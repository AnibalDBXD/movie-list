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

export const MovieContainer = (props) => {
  // Hooks
  const [ListMovies, setListMovies] = useState([]);

  const [Page, setPage] = useState(1);

  const { TOKEN, API_URL } = Config;
  const URL = API_URL + `movie/popular?api_key=${TOKEN}&page=${Page}`;
  const [data, loading] = useAxiosFetch(URL);

  //Searched

  const Query = props.movie_searched;

  const UrlQuery =
    Query !== ""
      ? API_URL + `search/movie?api_key=${TOKEN}&language=en-US&query=${Query}`
      : null;
  const [dataQuery] = useAxiosFetch(UrlQuery);

  //Update the Page to find another page on the api
  const updatePage = () => {
    setPage(Page + 1);
  };

  // Get Popular Movies, Infinite Scroll
  useEffect(() => {
    const prevMovies = ListMovies;
    const postMovies = data.results ? data.results : [];
    const Movies = prevMovies.concat(postMovies);
    setListMovies(Movies);
  }, [data]);

  // Search
  useEffect(() => {
    const ResultMovies = dataQuery.results ? dataQuery.results : [];
    setListMovies(ResultMovies);
  }, [Query]);

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

const mapStateToProps = (state) => ({
  movie_searched: state.movie_searched,
});

export default connect(mapStateToProps)(MovieContainer);
