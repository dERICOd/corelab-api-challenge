import { ITasksRepository } from "../../../infra/repositories/interfaces/tasksRepository";
import { Task } from "../../../model/Task/Task";
import { ITaskRequestDTO } from "./createTaskDTO";

export class CreateTaskUseCase {
  constructor(
    private __taskRepository: ITasksRepository
  ) { }

  async execute(taskData: ITaskRequestDTO) {
    const task = new Task(taskData.title, taskData.is_favorite, taskData.color, taskData.content);
    return await this.__taskRepository.save(task);
  }
}
