import { ITasksRepository } from "../../../infra/repositories/interfaces/tasksRepository";

export class FavoriteTaskUseCase {
  constructor(
    private _taskRepository: ITasksRepository
  ) { }

  async execute(taskId: string, isFavorite: boolean) {
    const teste = await this._taskRepository.favoriteTask(taskId, isFavorite);
    return teste;
  }
}
