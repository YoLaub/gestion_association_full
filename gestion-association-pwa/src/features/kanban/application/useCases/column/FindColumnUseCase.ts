import { Column } from "@/features/kanban/domain/entities/Column";
import { ColumnRepository } from "@/features/kanban/domain/repositories/Column.repository";

export class FindColumnUseCase {

    constructor(
        private readonly columnRepository: ColumnRepository
    ) { }

    async execute(id: string): Promise<Column | null> {
        const column = this.columnRepository.findById(id);

        if (!column) return null
        return column;
    }
}