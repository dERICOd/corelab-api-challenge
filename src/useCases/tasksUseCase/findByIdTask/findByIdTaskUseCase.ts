import { ITasksRepository } from "../../../infra/repositories/interfaces/tasksRepository";

export class FindByIdTaskUseCase {
  constructor(
    private _taskRepository: ITasksRepository
  ) { }

  async execute(taskId: string, userId: string): Promise<unknown> {
    const task = await this._taskRepository.findById(taskId, userId);
    return task;
  }
}
