import './Pagination.css';

const Pagination = ({ entriesPerPage, totalEntries, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalEntries / entriesPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number}>
              <a onClick={() => paginate(number)} href="#!">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

export default Pagination;