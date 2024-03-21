import { CarResponseData, ECarType } from '@/pages/api/cars/types';
import React, { createContext, useContext, useState } from 'react';

type CarContextType = {
  cars: CarResponseData
  fetchCars: (type: ECarType | "") => void;
}

type CarContextProviderProps = {
  children: React.ReactNode;
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export const useCarContext = () => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error('useCarContext must be used within a CarProvider');
  }
  return context;
};

export const CarProvider = ({ children }: CarContextProviderProps) => {
  const [cars, setCars] = useState<CarResponseData>([]);

  const fetchCars = React.useCallback(async (type: ECarType | "") => {
    await fetch(`/api/cars?type=${type}`)
      .then((response) => response.json())
      .then((data) => setCars(data));
  }, []);

  const memoizedValue = React.useMemo(() => ({ cars, fetchCars }), [cars, fetchCars]);

  return (
    <CarContext.Provider value={memoizedValue}>
      {children}
    </CarContext.Provider>
  );
};
