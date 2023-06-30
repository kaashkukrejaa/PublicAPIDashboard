import './SearchBar.css';

/*
This component renders the search bar to search bases on API, Description or Category
*/
const SearchBar = ({ handleSearch }) => (
  <input
    type="text"
    placeholder="Search by API, Description or Category"
    onChange={handleSearch}
    className="search-bar"
  />
);

export default SearchBar;