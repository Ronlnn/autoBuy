import axios from 'axios';

const PHONE_URL = 'https://67ea495b34bcedd95f62dee3.mockapi.io/api/v1/phone';

export interface PhoneData {
  digits: string;
}
export const fetchPhones = async (): Promise<PhoneData[]> => {
  try {
    const response = await axios.get<PhoneData[]>(PHONE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching phones:', error);
    throw error;
  }
};
