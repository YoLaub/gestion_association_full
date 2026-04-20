import { Board } from "@/features/kanban/domain/entities/Board";
import { BoardRepository } from "@/features/kanban/domain/repositories/Board.repository";

export class CreateBoardUseCase {

    constructor(
        private readonly boardRepository: BoardRepository
    ) {}

    async execute(data: Omit<Board, 'id'>): Promise<Board> {
        return this.boardRepository.create(data);
    }
}