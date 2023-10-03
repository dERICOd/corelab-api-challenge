import { Task } from "../../../../model/Task/Task";
import { ITasksRepository } from "../../interfaces/tasksRepository";

export class InMemoryTasksRepository implements ITasksRepository {
  private tasks: Task[] = [];

  async getAllTask(title?: string): Promise<Task[]> {

    if (title) {
      const taksFiltered = this.tasks.filter((t) => { return t.title.toLowerCase().includes(title.toLowerCase()); });
      return taksFiltered;
    }

    return this.tasks;
  }

  async findById(taskId: string): Promise<Task> {
    const task = this.findTaskById(taskId);
    return task;
  }

  async save(task: Task): Promise<Task> {
    this.tasks.push(task);
    return task;
  }

  async favoriteTask(taskId: string, isFavorite: boolean): Promise<Task> {
    const index = this.findIndexById(taskId);
    this.tasks[index].is_favorite = isFavorite;
    return this.tasks[index];
  }

  async updateColorTask(taskId: string, color: string): Promise<Task> {
    const index = this.findIndexById(taskId);
    this.tasks[index].color = color;
    return this.tasks[index];
  }

  async update(task: Partial<Task>): Promise<Task> {
    const index = this.findIndexById(task.id);
    this.tasks[index] = { ...this.tasks[index], ...task };
    return this.tasks[index];
  }

  async delete(taskId: string): Promise<void> {
    const index = this.findIndexById(taskId);
    this.tasks.splice(index, 1);
  }

  private findTaskById(taskId: string): Task {
    const task = this.tasks.find((t) => t.id === taskId);

    if (!task) throw new Error("Task not found");

    return task;
  }

  private findIndexById(taskId: string): number {
    const index = this.tasks.findIndex((t) => t.id === taskId);

    if (index === -1) throw new Error("Task not found");

    return index;
  }
}
