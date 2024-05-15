import { FastifyInstance } from "fastify";
import { createUser } from "../controller/userController";

export async function userRoutes(server: FastifyInstance) {
  server.post("/user", createUser);
}
