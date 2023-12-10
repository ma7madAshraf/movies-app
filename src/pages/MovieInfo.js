import React, { useContext } from "react";

import { AppContext } from "../context/context";
import Loading from "../components/Loading";
import { Navigate, Link } from "react-router-dom";

const MovieInfo = () => {
  const { theMovie, isLoading, isError } = useContext(AppContext);
  const [full, setFull] = React.useState(false);
  if (isLoading) {
    return (
      <div className="loading-movie">
        <h1>please wait...</h1>
        <Loading />
      </div>
    );
  }
  if (isError.show) {
    return (
      <div className="error-movie">
        <h1>{isError.msg}</h1>
        <Link to="/" className="btn">
          Go Home
        </Link>
      </div>
    );
  }
  if (theMovie.Title) {
    return (
      <>
        <div className="movie-container">
          <h1 data-type={theMovie.Type} data-year={theMovie.Year}>
            {theMovie.Title}
          </h1>
          <div className="feat-img">
            <img src={theMovie.Poster} alt="Poster" />
            <div className="movie-details">
              <p
                className="plot"
                onClick={() => {
                  setFull(!full);
                }}
              >
                {full
                  ? theMovie.Plot
                  : `${theMovie.Plot.substring(0, 100)}...see more `}
              </p>
              <p>
                <span> Released: </span> {theMovie.Released}
              </p>
              <p>
                <span> Actors: </span> {theMovie.Actors}
              </p>
              <p>
                <span> Genre: </span> {theMovie.Genre}
              </p>
              <p>
                <span>Ratings: </span> {theMovie.imdbRating}
              </p>
              {theMovie.totalSeasons && (
                <p>
                  <span> totalSeasons: </span> {theMovie.totalSeasons}
                </p>
              )}
            </div>
          </div>
          <Link to="/" className="btn back">
            back to results
          </Link>
        </div>
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default MovieInfo;
