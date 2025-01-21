import PropTypes from "prop-types";

const CarsInfo = ({ carDetails, checkPremium }) => {
  return (
    <div className="mt-3 text-left text-gray-600">
      <p>
        <span className="font-bold">Brand:</span> {carDetails.brand}
      </p>
      <p>
        <span className="font-bold">Year:</span> {carDetails.year}
      </p>
      <p>
        <span className="font-bold">Price:</span> ${carDetails.price}
      </p>
      <p>
        <span className="font-bold">Premium: </span>
        {checkPremium ? "Yes" : "No"}
      </p>
    </div>
  );
};

CarsInfo.propTypes = {
  carDetails: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  checkPremium: PropTypes.bool.isRequired,
};

export default CarsInfo;
