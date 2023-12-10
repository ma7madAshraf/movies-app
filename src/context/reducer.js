const reducer = (state, action) => {
  if (action.type === "UPDATE_SEARCH") {
    return { ...state, [action.payload.name]: action.payload.value };
  }
  if (action.type === "UPDATE_LIST") {
    return {
      ...state,
      totalPages: Math.ceil(action.payload.totalResults / 10),
      moviesList: action.payload.Search,
      isLoading: false,
    };
  }
  if (action.type === "UPDATE_THE_MOVIE") {
    return {
      ...state,
      theMovie: action.payload,
      isLoading: false,
    };
  }
  if (action.type === "CHANGE_PAGE") {
    return {
      ...state,
      page: action.payload,
      isLoading: true,
    };
  }
  if (action.type === "START_SEARCH") {
    return { ...state, isLoading: true, isError: { show: false, msg: "" } };
  }
  if (action.type === "END_SEARCH") {
    return { ...state, isLoading: false };
  }
  if (action.type === "SHOW_ERROR") {
    return {
      ...state,
      isError: { show: action.payload.show, msg: action.payload.msg },
      isLoading: false,
    };
  }
};

export default reducer;
