import { Column } from "@/features/kanban/domain/entities/Column";
import { ColumnRepository } from "@/features/kanban/domain/repositories/Column.repository";

export class UpdateColumnUseCase {

    constructor(
        private readonly columnRepository: ColumnRepository
    ) {}

    async execute(column: Column): Promise<void> {
        return this.columnRepository.save(column);
    }
}