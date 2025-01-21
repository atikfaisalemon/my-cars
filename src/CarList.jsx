import Cars from "./Cars";
import PropTypes from "prop-types";

const CarList = ({ searchTerm, carsData, isPremium }) => {
  const rows = [];

  carsData.forEach((car) => {
    // Filter out cars based on the search term
    if (car.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }

    // Show only premium cars if isPremium is true
    if (isPremium && !car.isPremium) {
      return;
    }

    rows.push(<Cars key={car.id} cars={car} />);
  });

  return <ul className="grid grid-cols-3 gap-5 mt-5">{rows}</ul>;
};

CarList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  carsData: PropTypes.array.isRequired,
  isPremium: PropTypes.bool.isRequired,
};

export default CarList;
