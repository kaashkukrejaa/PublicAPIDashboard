import './SearchBar.css';

const SearchBar = ({ handleSearch }) => (
    <input
      type="text"
      placeholder="Search by API, Description or Category"
      onChange={handleSearch}
      className="search-bar"
    />
  );

export default SearchBar;