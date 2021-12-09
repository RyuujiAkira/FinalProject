const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      key="random1"
      value={query}
      placeholder={"search movies"}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;
