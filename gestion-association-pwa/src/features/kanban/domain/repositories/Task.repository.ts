import { Task } from "../entities/Task";

export interface TaskRepository {
    findById(id: string): Promise<Task | null>;
    findByColumn(columnId: string): Promise<Task[]>;
    create(data: Omit<Task, 'id'>): Promise<Task>
    save(task: Task): Promise<void>
    delete(id: string): Promise<void>
    move(id: string, position: number, columnId: string): Promise<void>
}