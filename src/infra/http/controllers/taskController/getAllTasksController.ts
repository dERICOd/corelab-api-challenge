import { Request, Response } from "express";
import { GetAllTasksUseCase } from "../../../../useCases/tasksUseCase/getAllTasks/getAllTasksUseCase";

export class GetAllTasksController {
  constructor(
    private _getAllTasksUseCase: GetAllTasksUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {

    try {
      const title = request.query.title;
      const tasks = await this._getAllTasksUseCase.execute(title as string);
      return response.status(200).send({ tasks });
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      });
    }
  }
}
