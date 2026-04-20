import { Task } from "@/features/kanban/domain/entities/Task";
import { TaskRepository } from "@/features/kanban/domain/repositories/Task.repository";

export class CreateTaskUseCase {

    constructor(
        private readonly taskRepository: TaskRepository
    ) { }

    async execute(task: Omit<Task, 'id'>): Promise<Task> {
        return this.taskRepository.create(task);
    }
}