import React, { useContext } from "react";

import { AppContext } from "../context/context";
import { Link } from "react-router-dom";

const Results = () => {
  const { moviesList, updateTheMovie } = useContext(AppContext);

  return (
    <div className="results">
      {moviesList.map((movie, index) => {
        return (
          <div className="card" key={index}>
            <Link
              to="/info"
              onClick={() => {
                updateTheMovie(movie.imdbID);
              }}
            >
              <div className="card-img">
                <img src={movie.Poster} alt="poster" />
                <span className="type">{movie.Type}</span>
                <span className="year">{movie.Year}</span>
              </div>
              <div className="card-details">
                <p>{movie.Title}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
