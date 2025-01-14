import Header from "./Header";
import SearchCars from "./SearchCars";
import ShowPremium from "./ShowPremium";
import CarList from "./CarList";

const TapaScriptCar = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center gap-3 mt-10">
        <SearchCars />
        <ShowPremium />
      </div>

      <CarList />
    </div>
  );
};

export default TapaScriptCar;
