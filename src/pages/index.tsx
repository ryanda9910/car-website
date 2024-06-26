import { ViewModelProvider } from "@/providers/ViewModelContext";

import { useGetCarPage } from "@/viewmodel/useGetCarPage";
export default function Home() {
  const viewModel = useGetCarPage()
  const { cars, handleTypeChange } = viewModel
  
  return (
    <ViewModelProvider {...viewModel}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Car Website</h1>
        <label style={{ margin: 20 }} htmlFor="carType">Select Car Type:</label>
        <select style={{ width: 200 }} id="carType" onChange={handleTypeChange}>
          <option value="">All</option>
          <option value="electrical">Electrical</option>
          <option value="2 wheels">2 Wheels</option>
          <option value="sport">Sport</option>
        </select>
        <ul>
          {cars.map((car) => (
            <li key={car.id}>
              {car.name} - Parts: {car.parts.join('')}
            </li>
          ))}
        </ul>
      </div>
    </ViewModelProvider>
  )
}
