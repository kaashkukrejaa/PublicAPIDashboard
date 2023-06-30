import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import Pagination from './components/pagination/Pagination';
import DataTable from './components/dataTable/DataTable';


/*
*  This component is the entry point for the dashboard application. The dashboard renders the data
    for the Public APIs and is capable of performing the following functionalities.
    1. Searching
    2. Sorting
    3. Pagination
*/
function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(25);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.publicapis.org/entries')   
      .then((response) => setData(response.data.entries))
      .catch((error) => setError(error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const filteredData = data.filter((entry) =>
    entry.API.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.Description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.Category.toLowerCase().includes(searchTerm.toLowerCase())
);

  // Sort data
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortColumn === null) return 0;
    if (a[sortColumn] < b[sortColumn]) return sortOrder === 'asc' ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  // Get current entries
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = sortedData.slice(indexOfFirstEntry, indexOfLastEntry);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1>Public APIs</h1>
      {error && <p>There was an error fetching the data.</p>}
      {!error && (
        <>
          <SearchBar handleSearch={handleSearch} />
          <DataTable
            currentEntries={currentEntries}
            handleSort={handleSort} 
            sortColumn={sortColumn}/>
          <Pagination
            entriesPerPage={entriesPerPage}
            totalEntries={filteredData.length}
            paginate={paginate}/>
        </>
      )}
    </div>
  );
}

export default App;
