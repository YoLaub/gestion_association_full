import { Column } from "@/features/kanban/domain/entities/Column";
import { ColumnRepository } from "@/features/kanban/domain/repositories/Column.repository";

export class FindColumnsByBoardUseCase {

    constructor(
        private readonly columnRepository: ColumnRepository
    ) {}

    async execute(boardId: string): Promise<Column[]> {
        return this.columnRepository.findByBoard(boardId);
    }
}