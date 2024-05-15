import { FastifyReply, FastifyRequest } from "fastify";
import { userSchema } from "../schema/userSchema";
import { prisma } from "../services/prisma";

export async function createUser(req: FastifyRequest, res: FastifyReply) {
  const { name, email, password, cpf } = userSchema.parse(req.body);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
      cpf,
    },
    select: {
      id: true,
      email: false,
      password: false,
      cpf: false,
    },
  });

  return res.status(201).send(user);
}
