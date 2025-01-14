import CarsTitle from "./CarsTitle";
import CarsInfo from "./CarsInfo";
import PropTypes from "prop-types";

const Cars = ({ cars }) => {
  return (
    <div className="p-6 border rounded-lg">
      <CarsTitle title={cars.title} />
      <CarsInfo carDetails={cars} checkPremium={cars.isPremium} />
    </div>
  );
};

Cars.propTypes = {
  cars: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Cars;
