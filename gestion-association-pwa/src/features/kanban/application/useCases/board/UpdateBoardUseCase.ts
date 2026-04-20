import { Board } from "@/features/kanban/domain/entities/Board";
import { BoardRepository } from "@/features/kanban/domain/repositories/Board.repository";

export class UpdateBoardUseCase {

    constructor(
        private readonly boardRepository: BoardRepository
    ) {}

    async execute(board: Board): Promise<void> {
        return this.boardRepository.save(board);
    }
}