import { CarResponseData, ECarType } from "@/pages/api/cars/types";
import React, { useState } from "react";

export const useGetCarPage = () => {
  const [cars, setCars] = useState<CarResponseData>([]);

  const fetchCars = React.useCallback(async (type: ECarType | "") => {
    await fetch(`/api/cars?type=${type}`)
      .then((response) => response.json())
      .then((data) => setCars(data));
  }, []);

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = e.target.value as ECarType;
    fetchCars(selectedType);
  };

  React.useEffect(() => {
    fetchCars("");
  }, [fetchCars]);

  return {
    handleTypeChange,
    cars,
    fetchCars,
  };
};

export type CarPageViewModel = ReturnType<typeof useGetCarPage>;
