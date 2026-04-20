import { BoardRepository } from "@/features/kanban/domain/repositories/Board.repository";

export class DeleteBoardUseCase {

    constructor(
        private readonly boardRepository: BoardRepository
    ) {}

    async execute(id: string): Promise<void> {
        return this.boardRepository.delete(id);
    }
}