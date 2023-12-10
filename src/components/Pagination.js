import React, { useContext } from "react";
import Pagination from "react-bootstrap/Pagination";
import { AppContext } from "../context/context";
const PaginationComp = () => {
  const { page, changePage, totalPages } = useContext(AppContext);
  const pagesNumber = Array.from({ length: totalPages }, (_, index) => {
    return index + 1;
  });
  return (
    <Pagination>
      <Pagination.First
        disabled={page === 1}
        onClick={() => {
          changePage(1);
        }}
      />
      <Pagination.Prev
        disabled={page === 1}
        onClick={() => {
          changePage(page - 1);
        }}
      />{" "}
      <Pagination.Ellipsis hidden={page < 4} />
      {pagesNumber.map((pageNumber) => {
        return (
          <Pagination.Item
            key={pageNumber}
            active={pageNumber === page}
            hidden={
              (pageNumber >= page + 3 && pageNumber > 5) ||
              (pageNumber <= page - 3 && pageNumber < totalPages - 4)
            }
            onClick={() => {
              changePage(pageNumber);
            }}
          >
            {pageNumber}
          </Pagination.Item>
        );
      })}
      <Pagination.Ellipsis hidden={page > totalPages - 3} />
      <Pagination.Next
        disabled={page === totalPages}
        onClick={() => {
          changePage(page + 1);
        }}
      />
      <Pagination.Last
        onClick={() => {
          changePage(totalPages);
        }}
        disabled={page === totalPages}
      />
    </Pagination>
  );
};

export default PaginationComp;
