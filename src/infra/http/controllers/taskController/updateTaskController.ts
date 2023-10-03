import { Request, Response } from "express";
import { ITaskRequestDTO } from "../../../../useCases/tasksUseCase/createTask/createTaskDTO";
import { UpdateTaskUseCase } from "../../../../useCases/tasksUseCase/updateTask/updateTaskUseCase";

export class UpdateTaskController {
  constructor(
    private _updateTaskUseCase: UpdateTaskUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const taskRequest: ITaskRequestDTO = request.body;
    const taskId = request.params.id;
    try {
      const taskUpdated = await this._updateTaskUseCase.execute(taskRequest, taskId);
      return response.status(200).send({ taskUpdated });
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      });
    }
  }
}
