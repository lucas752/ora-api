import fastify from "fastify";
import { userRoutes } from "./routes/useRoutes";

const app = fastify();

userRoutes(app);

app
  .listen({
    host: "0.0.0.0",
    port: 3333,
  })
  .then(() => {
    console.log("Server running");
  });
