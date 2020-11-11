function data(state, action) {
  switch (action.type) {
    case "FETCH_POPULAR_MOVIE":
      return {
        ...state,
        movies: {
          page: action.payload.page,
          list: action.payload.results,
        },
        loading: false,
      };
    default:
      return state;
  }
}

export default data;
