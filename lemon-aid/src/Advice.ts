import { z } from 'zod';

const adviceSchema = z.object({
  id: z.number(),
  advice: z.string(),
});

export type Advice = z.infer<typeof adviceSchema>;

export const adviceResponseSchema = z.object({
  slip: adviceSchema,
});

export type AdviceResponse = z.infer<typeof adviceResponseSchema>;
