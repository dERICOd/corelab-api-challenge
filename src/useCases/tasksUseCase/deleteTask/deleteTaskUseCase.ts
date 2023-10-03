import { ITasksRepository } from "../../../infra/repositories/interfaces/tasksRepository";

export class DeleteTaskUseCase {
  constructor(
    private _taskRepository: ITasksRepository
  ) { }

  async execute(taskId: string): Promise<void> {
    await this._taskRepository.delete(taskId);
  }
}
