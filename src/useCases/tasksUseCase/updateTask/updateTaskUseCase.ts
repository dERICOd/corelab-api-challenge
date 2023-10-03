import { ITasksRepository } from "../../../infra/repositories/interfaces/tasksRepository";
import { Task } from "../../../model/Task/Task";
import { ITaskRequestDTO } from "../createTask/createTaskDTO";

export class UpdateTaskUseCase {
  constructor(
    private _taskRepository: ITasksRepository
  ) { }

  async execute(taskData: ITaskRequestDTO, taskId: string) {
    const task = new Task(taskData.title, taskData.is_favorite, taskData.color, taskData.content, taskId);
    const taskUpdated = await this._taskRepository.update(task);
    return taskUpdated;
  }
}
