function data(state, action) {
  switch (action.type) {
    case "SEARCH_VIDEO":
      return {
        ...state,
        movie_searched: action.payload.query,
      };

    default:
      return state;
  }
}

export default data;
