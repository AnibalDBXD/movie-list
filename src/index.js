import React from "react";
import ReactDOM from "react-dom";
import App from "./app/routers/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import data from "./redux/data";

const INITIAL_STATE = {
  movie_searched: "",
  searched_movies: [],
  movie: {},
};

const store = createStore(
  data,
  INITIAL_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
