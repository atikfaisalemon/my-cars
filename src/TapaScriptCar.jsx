import Header from "./Header";
import SearchCars from "./SearchCars";
import ShowPremium from "./ShowPremium";
import CarList from "./CarList";
import { useState } from "react";

const TapaScriptCar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [premium, setPremium] = useState(false);

  console.log(searchTerm);

  const CARS = [
    {
      id: 1,
      title: "Luxury Sedan",
      brand: "Mercedes",
      year: 2023,
      price: 80000,
      isPremium: true,
    },
    {
      id: 2,
      title: "Family SUV",
      brand: "Toyota",
      year: 2022,
      price: 45000,
      isPremium: false,
    },
    {
      id: 3,
      title: "Sports Car",
      brand: "Porsche",
      year: 2023,
      price: 120000,
      isPremium: true,
    },
    {
      id: 4,
      title: "Electric Hatchback",
      brand: "Nissan",
      year: 2022,
      price: 35000,
      isPremium: false,
    },
    {
      id: 5,
      title: "Luxury SUV",
      brand: "BMW",
      year: 2023,
      price: 90000,
      isPremium: true,
    },
  ];

  console.log("premium 56", premium);

  return (
    <div className="mx-10 mt-6">
      <Header />
      <div className="flex items-center gap-3 mt-10">
        <SearchCars searchTerm={searchTerm} OnSearchTerm={setSearchTerm} />
        <ShowPremium onPremium={setPremium} isPremium={premium} />
      </div>

      <CarList searchTerm={searchTerm} carsData={CARS} isPremium={premium} />
    </div>
  );
};

export default TapaScriptCar;
