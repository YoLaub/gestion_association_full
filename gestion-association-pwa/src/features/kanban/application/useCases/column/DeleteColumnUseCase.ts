import { ColumnRepository } from "@/features/kanban/domain/repositories/Column.repository";

export class DeleteColumnUseCase {

    constructor(
        private readonly columnRepository: ColumnRepository
    ) {}

    async execute(id: string): Promise<void> {
        return this.columnRepository.delete(id);
    }
}