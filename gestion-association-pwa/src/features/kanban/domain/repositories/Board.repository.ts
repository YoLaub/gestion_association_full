import { Board } from "../entities/Board";

export interface BoardRepository {
    findById(id: string): Promise<Board | null>
    findByEvent(eventId: string): Promise<Board | null>
    create(data: Omit<Board, 'id'>): Promise<Board>
    save(board: Board): Promise<void>
    delete(id: string): Promise<void>
}