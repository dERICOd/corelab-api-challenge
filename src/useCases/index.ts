// Imports relacionados às entidades e casos de uso
import { CreateTaskUseCase } from "./tasksUseCase/createTask/createTaskUseCase";
import { FindByIdTaskUseCase } from "./tasksUseCase/findByIdTask/findByIdTaskUseCase";
import { DeleteTaskUseCase } from "./tasksUseCase/deleteTask/deleteTaskUseCase";
import { UpdateTaskUseCase } from "./tasksUseCase/updateTask/updateTaskUseCase";

// Imports relacionados aos controladores
import { CreateTaskController } from "../infra/http/controllers/taskController/createTaskController";
import { GetAllTasksController } from "../infra/http/controllers/taskController/getAllTasksController";
import { GetTaskByIdController } from "../infra/http/controllers/taskController/getTaskByIdController";
import { DeleteTaskController } from "../infra/http/controllers/taskController/deleteTaskController";
import { InMemoryTasksRepository } from "../infra/repositories/implementations/inMemory/taskRepositoryInMemory";
import { GetAllTasksUseCase } from "./tasksUseCase/getAllTasks/getAllTasksUseCase";
import { UpdateTaskController } from "../infra/http/controllers/taskController/updateTaskController";
import { FavoriteTaskUseCase } from "./tasksUseCase/favoriteTask/favoriteTaskUseCase";
import { FavoriteTaskController } from "../infra/http/controllers/taskController/favoriteTaskController";
import { UpdateColorTaskController } from "../infra/http/controllers/taskController/updateColorTaskController";
import { UpdateColorTaskUseCase } from "./tasksUseCase/updateColorTask/updateColorTaskUseCase";

// Imports relacionados aos repositórios em memória
const inMemoryTasksRepository = new InMemoryTasksRepository();

const createTaskUseCase = new CreateTaskUseCase(inMemoryTasksRepository);
const getAllTasksUseCase = new GetAllTasksUseCase(inMemoryTasksRepository);
const findTaskByIdUseCase = new FindByIdTaskUseCase(inMemoryTasksRepository);
const deleteTaskUseCase = new DeleteTaskUseCase(inMemoryTasksRepository);
const updateTaskUseCase = new UpdateTaskUseCase(inMemoryTasksRepository);
const favoriteTaskUseCase = new FavoriteTaskUseCase(inMemoryTasksRepository);
const updateColorTaskUseCase = new UpdateColorTaskUseCase(
  inMemoryTasksRepository
);

const createTaskController = new CreateTaskController(createTaskUseCase);
const getAllTasksController = new GetAllTasksController(getAllTasksUseCase);
const findTaskByIdController = new GetTaskByIdController(findTaskByIdUseCase);
const deleteTaskController = new DeleteTaskController(deleteTaskUseCase);
const updateTaskController = new UpdateTaskController(updateTaskUseCase);
const favoriteTaskController = new FavoriteTaskController(favoriteTaskUseCase);
const updateColorTaskController = new UpdateColorTaskController(
  updateColorTaskUseCase
);

export {
  createTaskController,
  getAllTasksController,
  findTaskByIdController,
  deleteTaskController,
  updateTaskController,
  favoriteTaskController,
  updateColorTaskController,
};
