import { Task } from "@/features/kanban/domain/entities/Task";
import { TaskRepository } from "@/features/kanban/domain/repositories/Task.repository";

export class FindTasksByColumnUseCase {

    constructor(
        private readonly taskRepository: TaskRepository
    ) {}

    async execute(columndId: string): Promise<Task[]> {
        return this.taskRepository.findByColumn(columndId);
    }
}