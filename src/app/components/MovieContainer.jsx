import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { getPopularMovie } from "../../api/index";

import Movie from "./Movie";

import LoadingComponent from "./LoadingComponent";

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
        <div className="row">
          {ListMovies.map((item) => (
            <div
              key={item.id}
              className="mt-4 col-12 col-md-6 col-lg-4 col-xl-3"
            >
              <Movie key={item.id} data={item} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default MovieContainer;
