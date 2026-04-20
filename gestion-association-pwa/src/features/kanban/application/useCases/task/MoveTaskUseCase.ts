import { TaskRepository } from "@/features/kanban/domain/repositories/Task.repository";

export class MoveTaskUseCase {
    constructor(
        private readonly taskRepository: TaskRepository
    ) { }

    async execute(id: string, position: number, columnId: string): Promise<void> {
        return this.taskRepository.move(id, position, columnId);
    }
}