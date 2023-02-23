import axios from 'axios';
import { Advice, AdviceResponse } from './Advice';

const ADVICE_API_URL = 'https://api.adviceslip.com/advice';

export const fetchAdvice = async (): Promise<Advice> => {
  const response = await axios.get<AdviceResponse>(ADVICE_API_URL);
  return response.data.slip;
};
