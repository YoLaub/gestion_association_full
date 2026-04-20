import { TaskRepository } from "@/features/kanban/domain/repositories/Task.repository";

export class DeleteTaskUseCase {

    constructor(
        private readonly taskRepository: TaskRepository
    ) {}

    async execute(id: string): Promise<void> {
        return this.taskRepository.delete(id);
    }
}