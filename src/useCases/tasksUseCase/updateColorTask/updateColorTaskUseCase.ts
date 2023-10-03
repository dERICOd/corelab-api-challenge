import { ITasksRepository } from "../../../infra/repositories/interfaces/tasksRepository";

export class UpdateColorTaskUseCase {
  constructor(private _taskRepository: ITasksRepository) {}

  async execute(taskId: string, color: string) {
    const taskUpdated = await this._taskRepository.updateColorTask(
      taskId,
      color
    );
    return taskUpdated;
  }
}
