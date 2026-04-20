import { ColumnRepository } from "@/features/kanban/domain/repositories/Column.repository";

export class MoveColumnUseCase {
    constructor(
        private readonly columnRepository: ColumnRepository
    ) { }

    async execute(id: string, position: number): Promise<void> {
        return this.columnRepository.move(id, position);
    }
}