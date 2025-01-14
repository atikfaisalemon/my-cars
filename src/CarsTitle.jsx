import PropTypes from "prop-types";

const CarsTitle = ({ title }) => {
  return <div className="text-left font-semibold">{title}</div>;
};
CarsTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default CarsTitle;
