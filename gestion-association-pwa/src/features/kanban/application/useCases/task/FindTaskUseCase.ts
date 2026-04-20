import { Task } from "@/features/kanban/domain/entities/Task";
import { TaskRepository } from "@/features/kanban/domain/repositories/Task.repository";

export class FindTaskUseCase {

    constructor(
        private readonly taskRepository: TaskRepository
    ) { }

    async execute(id: string): Promise<Task | null> {
        const task = this.taskRepository.findById(id);

        if (!task) return null
        return task;
    }
}