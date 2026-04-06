import { z } from "zod";

export const findBookByIdParams = z.object({
  id: z.string(),
});
