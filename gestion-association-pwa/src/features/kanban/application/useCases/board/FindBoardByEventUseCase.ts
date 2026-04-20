import { Board } from "@/features/kanban/domain/entities/Board";
import { BoardRepository } from "@/features/kanban/domain/repositories/Board.repository";

export class FindBoardByEventUseCase {

    constructor(
        private readonly boardRepository: BoardRepository
    ) {}

    async execute(eventId: string): Promise<Board | null> {
        const board = this.boardRepository.findByEvent(eventId);

        if (!board) return null;
        return board;
    }
}