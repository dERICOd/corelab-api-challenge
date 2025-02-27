import { Request, Response } from "express";
import { FindByIdTaskUseCase } from "../../../../useCases/tasksUseCase/findByIdTask/findByIdTaskUseCase";

export class GetTaskByIdController {
  constructor(
    private _getTaskByIdUseCase: FindByIdTaskUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const userId = request.headers.userID;
    try {
      const task = await this._getTaskByIdUseCase.execute(id, userId as string);
      return response.status(200).send(task);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      });
    }
  }
}
