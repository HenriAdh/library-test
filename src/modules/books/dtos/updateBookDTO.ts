import { z } from "zod";

export const updateBookParams = z.object({
  id: z.string(),
});

export const updateBookBody = z.object({
  title: z.string().optional(),
  author: z.string().optional(),
  available: z.boolean().optional(),
});

export type UpdateBookBody = z.infer<typeof updateBookBody>;
