import { Column } from "../entities/Column"

export interface ColumnRepository {
    findById(id: string): Promise<Column | null>
    findByBoard(boardId: string): Promise<Column[]>
    create(data: Omit<Column, 'id'>): Promise<Column>
    save(column: Column): Promise<void>
    delete(id: string): Promise<void>
    move(id: string, position: number): Promise<void>
}