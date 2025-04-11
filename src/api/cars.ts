import axios from 'axios';

const CARS_URL = 'https://67ea495b34bcedd95f62dee3.mockapi.io/api/v1/car';

export interface CarsData {
  id: string;
  name: string;
  img: string;
  type: string;
  post_date: string;
  price: number;
  city: string;
  trade: string;
  kilometer: number;
}

export const fetchCars = async (): Promise<CarsData[]> => {
  try {
    const response = await axios.get<CarsData[]>(CARS_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching Cars', error);
    throw error;
  }
};
