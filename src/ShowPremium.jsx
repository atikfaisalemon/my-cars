import PropTypes from "prop-types";

const ShowPremium = ({ isPremium, onPremium }) => {
  return (
    <div className="flex gap-3">
      <input
        onChange={(e) => onPremium(e.target.checked)}
        value={isPremium}
        type="checkbox"
      />
      <h2>Show Premium Only</h2>
    </div>
  );
};

ShowPremium.propTypes = {
  isPremium: PropTypes.bool.isRequired,
  onPremium: PropTypes.func.isRequired,
};

export default ShowPremium;
