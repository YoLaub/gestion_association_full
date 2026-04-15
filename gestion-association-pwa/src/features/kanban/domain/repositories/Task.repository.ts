import { Task } from "../entities/Task";

export interface TaskRepository {
    findById(id: string): Promise<Task | null>;
    findByColumn(columnId: string): Promise<Task[]>;
    save(task: Task): Promise<void>
}