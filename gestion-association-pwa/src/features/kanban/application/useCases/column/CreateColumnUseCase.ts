import { Column } from "@/features/kanban/domain/entities/Column";
import { ColumnRepository } from "@/features/kanban/domain/repositories/Column.repository";

export class CreateColumnUseCase {

    constructor(
        private readonly columnRepository: ColumnRepository
    ) { }

    async execute(column: Omit<Column, 'id'>): Promise<Column> {
        return this.columnRepository.create(column);
    }
}