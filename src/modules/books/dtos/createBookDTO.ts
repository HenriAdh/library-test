import { z } from "zod";

export const createBookBody = z.object({
  title: z.string(),
  author: z.string(),
});

export type CreateBookData = z.infer<typeof createBookBody>;
