import React, { useContext } from "react";
import { AppContext } from "../context/context";
import Button from "react-bootstrap/Button";
import { BsSearch } from "react-icons/bs";

const SearchForm = () => {
  const {
    search,
    year,
    type,
    isLoading,
    updateMoviesList,
    updateSearch,
    isError,
  } = useContext(AppContext);

  const yearsList = [
    "",
    ...Array.from({ length: 50 }, (_, index) => {
      let today = new Date().getFullYear();
      return today - index;
    }),
  ];
  const typeList = ["", "movie", "series", "episode"];

  const handleChange = (e) => {
    updateSearch({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMoviesList();
  };
  return (
    <form>
      <div className="form-control">
        <BsSearch />
        <input
          type="text"
          className="form-control"
          placeholder="what are you looking for"
          value={search}
          name="search"
          onChange={handleChange}
        />
        <Button
          variant="primary"
          type="submit"
          disabled={isLoading}
          onClick={handleSubmit}
        >
          Search
        </Button>
      </div>
      {isError.show && <p className="error">{isError.msg}</p>}
      <div className="search-addons">
        <div className="year">
          <label htmlFor="year">year :</label>
          <select name="year" id="year" value={year} onChange={handleChange}>
            {yearsList.map((year) => {
              return (
                <option value={year} key={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
        <div className="type">
          <label htmlFor="type">type :</label>
          <select name="type" id="type" value={type} onChange={handleChange}>
            {typeList.map((type) => {
              return (
                <option value={type} key={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
