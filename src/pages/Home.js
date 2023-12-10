import React, { useContext } from "react";
import { AppContext } from "../context/context";
import PaginationComp from "../components/Pagination";
import Results from "../components/Results";
import SearchForm from "../components/SearchForm";
import ImgCard from "../components/ImgCard";
import Loading from "../components/Loading";

const Home = () => {
  const { moviesList, totalPages, isLoading } = useContext(AppContext);
  if (isLoading) {
    return (
      <div className="home">
        <ImgCard />
        <SearchForm />
        <Loading />;
      </div>
    );
  }
  return (
    <>
      <div className="home">
        <ImgCard />
        <SearchForm />
        {totalPages > 1 && <PaginationComp />}
        {moviesList && <Results />}
        {totalPages > 1 && <PaginationComp />}
      </div>
    </>
  );
};

export default Home;
