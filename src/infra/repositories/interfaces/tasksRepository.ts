import { Task } from "../../../model/Task/Task";


export interface ITasksRepository {
    save(_task: Task): Promise<Task | Error>
    findById(_taskId: string, _userId: string): Promise<unknown>
    getAllTask(_title?: string): Promise<Task[]>
    update(_task: Partial<Task>): Promise<Task>
    delete(_taskId: string): Promise<void>
    favoriteTask(__taskId: string, _isFavorite: boolean): Promise<Task>
    updateColorTask(__taskId: string, _color: string): Promise<Task>

}
