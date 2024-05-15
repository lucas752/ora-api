import { FastifyReply, FastifyRequest } from "fastify";
import { userSchema } from "../schema/userSchema";
import { prisma } from "../services/prisma";
import bcrypt from "bcrypt";

export async function createUser(req: FastifyRequest, res: FastifyReply) {
  const { name, email, password, cpf } = userSchema.parse(req.body);

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);

    const hasEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    const hasCpf = await prisma.user.findUnique({
      where: {
        cpf,
      },
    });

    if (!hasEmail && !hasCpf) {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
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
    } else {
      return res.status(400).send({ message: "E-mail ou CPF já cadastrado!" });
    }
  } catch (error) {
    return res.status(500).send({
      message: "Ocorreu um erro interno no servidor!",
    });
  }
}
