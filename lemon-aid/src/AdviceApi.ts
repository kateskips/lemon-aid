import axios from 'axios';
import { Advice, AdviceResponse, adviceResponseSchema } from './Advice';
import * as z from 'zod';

const ADVICE_API_URL = 'https://api.adviceslip.com/advice';

export const fetchAdvice = async (): Promise<Advice> => {
  const response = await axios.get<AdviceResponse>(ADVICE_API_URL);
  const validatedResponse = adviceResponseSchema.parse(response.data);
  return validatedResponse.slip;
  console.log(validatedResponse);
};
