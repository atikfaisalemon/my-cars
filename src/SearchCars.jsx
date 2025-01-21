import PropTypes from "prop-types";
const SearchCars = ({ searchTerm, OnSearchTerm }) => {
  return (
    <form action="">
      <input
        onChange={(e) => {
          OnSearchTerm(e.target.value);
        }}
        value={searchTerm}
        placeholder="Search Cars.."
        className="border rounded-md p-2 w-[350px]  flex items-start"
        type="text"
      />
    </form>
  );
};

SearchCars.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  OnSearchTerm: PropTypes.func.isRequired,
};

export default SearchCars;
