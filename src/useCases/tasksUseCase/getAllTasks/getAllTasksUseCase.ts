import { ITasksRepository } from "../../../infra/repositories/interfaces/tasksRepository";

export class GetAllTasksUseCase {
  constructor(
    private _taskRepository: ITasksRepository
  ) { }

  async execute(title?: string): Promise<unknown> {
    const tasks = await this._taskRepository.getAllTask(title);
    return tasks;
  }
}
