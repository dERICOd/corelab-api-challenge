import { Request, Response } from "express";
import { ITaskRequestDTO } from "../../../../useCases/tasksUseCase/createTask/createTaskDTO";
import { CreateTaskUseCase } from "../../../../useCases/tasksUseCase/createTask/createTaskUseCase";

export class CreateTaskController {
  constructor(
    private _createTaskUsecase: CreateTaskUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const taskRequest: ITaskRequestDTO = request.body;
    try {
      const createdTask = await this._createTaskUsecase.execute(taskRequest);
      return response.status(201).send(createdTask);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      });
    }
  }
}
