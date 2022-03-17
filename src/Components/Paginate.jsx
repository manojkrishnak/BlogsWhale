function Paginate({ totalArticles, postsPerPage, paginate, currentPage }) {
  const pageNumbers = [];
  const numPages = Math.ceil(totalArticles / postsPerPage);
  //   for (let i = 1; i <= Math.ceil(totalArticles / postsPerPage); i++) {
  //     pageNumbers.push(i);
  //   }
  for (let i = 1; i <= numPages; i++) {
    if (
      i <= 5 || //the first five pages
      i == numPages || //the last page
      Math.abs(currentPage - i) <= 1 //the current page and the one before and after
    )
      pageNumbers.push(i);
  }

  return (
    <ul className="flex">
      {pageNumbers.map((pageNumber) => (
        <li className="page-number-box" key={pageNumber} onClick={() => paginate(pageNumber)}>
          {pageNumber}
        </li>
      ))}
    </ul>
  );
}

export default Paginate;
