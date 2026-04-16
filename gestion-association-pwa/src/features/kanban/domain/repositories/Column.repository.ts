import { Column } from "../entities/Column"

export interface ColumnRepository {
    findById(id: string): Promise<Column | null>
    findByBoard(boardId: string): Promise<Column[]>
    create(column: Omit<Column, 'id'>): Promise<Column>
    save(column: Column): Promise<void>
    delete(id: string): Promise<void>
}