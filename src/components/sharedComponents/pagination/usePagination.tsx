import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const usePagination = (
  currentPage: string | number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  total: number,
  hrefSegment: string
) => {
  const navigate = useNavigate();

  const pageChangeHandler = (number: number) => {
    setCurrentPage(number);
    navigate(`${hrefSegment}/page/${number}`);
  };

  const nextPageHandler = () => {
    setCurrentPage((prevState: number) => +prevState + 1);
    navigate(`${hrefSegment}/page/${+currentPage + 1}`);
  };

  const prevPageHandler = () => {
    setCurrentPage((prevState: number) => +prevState - 1);
    navigate(`${hrefSegment}/page/${+currentPage - 1}`);
  };

  const items = [];
  for (let i = 0; i < total; i++) {
    if (i > 5) {
      items.push(
        <React.Fragment key={`ellipsis-${i}`}>
          <li>
            <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              ...
            </button>
          </li>
          <li>
            <button
              onClick={() => pageChangeHandler(i + 1)}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {9}
            </button>
          </li>
        </React.Fragment>
      );
      break;
    }
    items.push(
      <li key={i.toString() + Math.random()}>
        <button
          onClick={() => pageChangeHandler(i + 1)}
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          {i + 1}
        </button>
      </li>
    );
  }

  return { prevPageHandler, items, nextPageHandler };
};
export default usePagination;
