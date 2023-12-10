import { createContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";

const initialFilters = {
  search: "",
  year: "",
  type: "",
};
const initialState = {
  ...initialFilters,
  moviesList: [],
  isLoading: false,
  page: 1,
  totalPages: 1,
  theMovie: {},
  isError: { show: false, msg: "" },
};
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const showError = (show = false, msg = "") => {
    dispatch({ type: "SHOW_ERROR", payload: { show, msg } });
  };

  const updateSearch = (theChange) => {
    dispatch({ type: "UPDATE_SEARCH", payload: theChange });
  };
  const updateMoviesList = async () => {
    dispatch({ type: "START_SEARCH" });
    const apiKey = "dc091ea2";
    let url = `http://www.omdbapi.com?apikey=${apiKey}&s=${state.search}`;
    if (state.year) {
      url = url + `&y=${state.year}`;
    }
    if (state.type) {
      url = url + `&type=${state.type}`;
    }
    if (state.page !== 1) {
      url = url + `&page=${state.page}`;
    }
    try {
      if (!state.search) {
        showError(true, "you must enter a title for search");
        return;
      }
      const resp = await axios(url);
      console.log(resp.data.Response);

      if (resp.data.Response === "True") {
        dispatch({ type: "UPDATE_LIST", payload: resp.data });
      } else {
        throw resp.data.Error;
      }
    } catch (error) {
      showError(true, error);
    }
  };

  const updateTheMovie = async (movieId) => {
    dispatch({ type: "START_SEARCH" });
    let movieUrl = `http://www.omdbapi.com/?apikey=dc091ea2&i=${movieId}&plot=full`;
    try {
      const resp = await axios(movieUrl);
      dispatch({ type: "UPDATE_THE_MOVIE", payload: resp.data });
    } catch (error) {
      showError(true, error.response.data.Error);
    }
  };

  const changePage = async (val) => {
    dispatch({ type: "CHANGE_PAGE", payload: val });
  };

  useEffect(() => {
    if (state.search) {
      updateMoviesList();
    }
    // eslint-disable-next-line
  }, [state.page]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        updateMoviesList,
        changePage,
        updateSearch,
        updateTheMovie,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
