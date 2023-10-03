import { Request, Response } from "express";
import { ITaskRequestDTO } from "../../../../useCases/tasksUseCase/createTask/createTaskDTO";
import { UpdateColorTaskUseCase } from "../../../../useCases/tasksUseCase/updateColorTask/updateColorTaskUseCase";

export class UpdateColorTaskController {
  constructor(private _updateColorTask: UpdateColorTaskUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { color }: ITaskRequestDTO = request.body;
    const taskId = request.params.id;
    try {
      const taskUpdated = await this._updateColorTask.execute(taskId, color);
      return response.status(200).send({ taskUpdated });
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
