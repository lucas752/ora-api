import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  cpf: z.string(),
  password: z.string().min(8, {
    message: "A senha precisa ter pelo menos 8 dígitos",
  }),
  email: z.string().email(),
});
