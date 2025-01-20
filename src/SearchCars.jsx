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
export default SearchCars;
