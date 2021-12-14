const SearchBar = ({ query, setQuery }) => {
  return (
    <input class = "searchbar"
      key="random1"
      value={query}
      placeholder={"  Search Movies"}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;
