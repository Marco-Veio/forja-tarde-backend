import { Router } from "express";

// Inicializa o router
const routes = Router();

// Rota inicial para verificar se o servidor está rodando
routes.get("/", (request, response) => {
  return response.status(200).json({ message: "Hello World!" });
});

routes.get("/numbers", (request, response) => {
  return response.status(200).json(Math.floor(Math.random() * 100));
});

routes.get("/fibonacci/:quantidade", (request, response) => {
  const { quantidade } = request.params;

  return response.status(200).json(quantidade);
});

export default routes;
