import React, { lazy, Suspense, useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { getPopularMovie } from "../../api/index";

import LoadingComponent from "./LoadingComponent";

const Movie = lazy(() => import("./Movie"));

export const MovieContainer = () => {
  // Hooks
  const [ListMovies, setListMovies] = useState([]);

  const [Page, setPage] = useState(1);

  // This function update the State "ListMovies" to show A list of movies ;P
  const handleGetPopular = async () => {
    await getPopularMovie(Page).then((result) => {
      const prevMovies = ListMovies;
      const postMovies = result.data.results;
      const Movies = prevMovies.concat(postMovies);
      setListMovies(Movies);
    });
  };
  //Update the Page to find another page on the api
  const updatePage = () => {
    setPage(Page + 1);
  };

  useEffect(() => {
    handleGetPopular();
  }, [Page]);

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
      </InfiniteScroll>
    </div>
  );
};

export default MovieContainer;
