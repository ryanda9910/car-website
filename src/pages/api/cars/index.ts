import { NextApiRequest, NextApiResponse } from "next";
import { CarResponseData } from "./types";

const carsData: CarResponseData = [
  {
    id: 1,
    name: "Tesla Model S",
    type: "electrical",
    parts: ["Battery", "Electric Motor"],
  },
  {
    id: 2,
    name: "Harley-Davidson Sportster",
    type: "2 wheels",
    parts: ["Engine", "Wheels"],
  },
  {
    id: 3,
    name: "Porsche 911",
    type: "sport",
    parts: ["Engine", "Aerodynamics"],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { type } = req.query;
  if (!type) {
    res.status(200).json(carsData);
    return;
  }
  const filteredCars = carsData.filter((car) => car.type === type);
  res.status(200).json(filteredCars);
}
