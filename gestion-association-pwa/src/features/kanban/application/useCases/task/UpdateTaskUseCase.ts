import { Task } from "@/features/kanban/domain/entities/Task";
import { TaskRepository } from "@/features/kanban/domain/repositories/Task.repository";

export class UpdateTaskUseCase {

    constructor(
        private readonly taskRepository: TaskRepository
    ) {}

    async execute(task: Task): Promise<void> {
        return this.taskRepository.save(task);
    }
}