import css from './SearchBox.module.css'
const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.searchbar}>
      <label className={css.searchName} htmlFor="search">Find contacts by name</label>
      <input
        className={css.searchInput}
        type="text"
        id="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;