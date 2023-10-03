import { Request, Response } from "express";
import { ITaskRequestDTO } from "../../../../useCases/tasksUseCase/createTask/createTaskDTO";
import { FavoriteTaskUseCase } from "../../../../useCases/tasksUseCase/favoriteTask/favoriteTaskUseCase";

export class FavoriteTaskController {
  constructor(
    private _favoriteTaskUsecase: FavoriteTaskUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { is_favorite }: ITaskRequestDTO = request.body;
    const taskId = request.params.id;
    try {
      const taskUpdated = await this._favoriteTaskUsecase.execute(taskId, is_favorite);
      return response.status(200).send({ taskUpdated });
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      });
    }
  }
}
