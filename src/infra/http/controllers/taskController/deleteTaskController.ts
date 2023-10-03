import { Request, Response } from "express";
import { DeleteTaskUseCase } from "../../../../useCases/tasksUseCase/deleteTask/deleteTaskUseCase";

export class DeleteTaskController {
  constructor(
    private _deleteTaskUseCase: DeleteTaskUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    try {
      await this._deleteTaskUseCase.execute(id);
      return response.status(204).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      });
    }
  }
}
