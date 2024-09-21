import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";

export default function Pagination({
  setCurrentPage,
  totalPages,
  currentPage,
  numberOfDisplayedPages,
}) {
  numberOfDisplayedPages = numberOfDisplayedPages || 5;

  function generatePaginationItems() {
    const pages = [];
    const half = Math.floor(numberOfDisplayedPages / 2);
    let firstPage = Math.max(currentPage - half, 1);
    let lastPage = Math.min(
      firstPage + (numberOfDisplayedPages - 1),
      totalPages
    );

    firstPage = Math.max(
      firstPage - Math.max(half - (totalPages - currentPage), 0),
      1
    );

    for (let i = firstPage; i <= lastPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  return (
    <div className="flex justify-center my-3 py-6 gap-3">
      <button
        className="px-2 py-1 rounded-md hover:bg-gray-200 disabled:opacity-50"
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
      >
        <FaAngleDoubleLeft />
      </button>
      <button
        className="px-2 py-1 rounded-md hover:bg-gray-200 disabled:opacity-50"
        onClick={() => setCurrentPage(currentPage === 1 ? 1 : currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaAngleLeft />
      </button>
      {generatePaginationItems().map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-2 py-1 rounded-md hover:bg-gray-200 ${
            page === currentPage ? "bg-blue-500 text-white" : ""
          }`}
        >
          {page}
        </button>
      ))}
      <button
        className="px-2 py-1 rounded-md hover:bg-gray-200 disabled:opacity-50"
        onClick={() =>
          setCurrentPage(
            currentPage === totalPages ? totalPages : currentPage + 1
          )
        }
        disabled={currentPage === totalPages}
      >
        <FaAngleRight />
      </button>
      <button
        className="px-2 py-1 rounded-md hover:bg-gray-200 disabled:opacity-50"
        onClick={() => setCurrentPage(totalPages)}
        disabled={currentPage === totalPages}
      >
        <FaAngleDoubleRight />
      </button>
    </div>
  );
}
