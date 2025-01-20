const ShowPremium = ({ carsData, onPremium }) => {
  return (
    <div className="flex gap-3">
      <input
        onChange={(e) => onPremium(e.target.checked)}
        type="checkbox"
        name=""
        id=""
      />
      <h2>Show Premium Only</h2>
    </div>
  );
};

export default ShowPremium;
