import { ECarType } from '@/pages/api/cars/types';
import React from 'react';
import { useCarContext } from './CarContext';

const useCarViewModel = () => {
  const { cars, fetchCars } = useCarContext();
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = e.target.value as ECarType
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

export default useCarViewModel;
