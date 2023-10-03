import { Router } from "express";
import { createTaskController, deleteTaskController, favoriteTaskController, findTaskByIdController, getAllTasksController, updateColorTaskController, updateTaskController } from "../../../useCases";

const taskRoutes = Router();

taskRoutes.post("/task", (request, response) => {
  return createTaskController.handle(request, response);
});

taskRoutes.get("/task", (request, response) => {
  return getAllTasksController.handle(request, response);
});
taskRoutes.get("/task/:id", (request, response) => {
  return findTaskByIdController.handle(request, response);
});
taskRoutes.delete("/task/:id", (request, response) => {
  return deleteTaskController.handle(request, response);
});

taskRoutes.put("/task/:id", (request, response) => {
  return updateTaskController.handle(request, response);
});

taskRoutes.patch("/task/:id/favorite", (request, response) => {
  return favoriteTaskController.handle(request, response);
});

taskRoutes.patch("/task/:id/update-color", (request, response) => {
  return updateColorTaskController.handle(request, response);
});

export { taskRoutes };
