import { PropsType } from "./types";
import usePagination from "./usePagination";

const Pagination = ({
  total,
  currentPage,
  setCurrentPage,
  hrefSegment,
  forSearch,
}: PropsType) => {
  const { prevPageHandler, items, nextPageHandler } = usePagination(
    currentPage,
    setCurrentPage,
    total,
    hrefSegment,
    forSearch
  );

  return (
    <div className="w-full  justify-center mt-8 flex">
      <nav aria-label="Page navigation example" className="mx-auto">
        <ul className="flex items-center -space-x-px h-8 text-sm">
          <li>
            <button
              disabled={+currentPage === 1}
              onClick={prevPageHandler}
              className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </button>
          </li>

          {items}

          <li>
            <button
              disabled={+currentPage === total}
              onClick={nextPageHandler}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
