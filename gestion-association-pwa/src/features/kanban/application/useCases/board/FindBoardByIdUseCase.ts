import { Board } from "@/features/kanban/domain/entities/Board";
import { BoardRepository } from "@/features/kanban/domain/repositories/Board.repository";

export class FindBoardById {
    constructor(
        private readonly boardRepository: BoardRepository
    ) { }

    async execute(id: string): Promise<Board | null> {
        return this.boardRepository.findById(id);
    }
}