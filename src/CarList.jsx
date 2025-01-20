import Cars from "./Cars";

const CarList = ({ searchTerm, carsData, isPemium }) => {
  console.log("isPremium", isPemium);

  const rows = [];
  carsData.filter((car) => {
    if (car.isPremium) {
      return;
    }
    rows.push(<Cars key={car.id} cars={car} />);
  });

  carsData.forEach((cars) => {
    if (cars.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }
    rows.push(<Cars key={cars.id} cars={cars} />);
  });

  return <ul className="grid grid-cols-3 gap-5 mt-5">{rows}</ul>;
};
export default CarList;
