import { BoardModel, ColumnModel, TaskModel } from "@/generated/prisma/models";
import { Board } from "../../domain/entities/Board";
import { BoardRepository } from "../../domain/repositories/Board.repository";
import { prisma } from "@/lib/prisma";

export class PrismaBoardRepository implements BoardRepository {

    async findById(id: string): Promise<Board | null> {
        const row = await prisma.board.findUnique({ where: { id } });

        if (!row) return null;
        return this.toDomainEntity(row);
    }

    async findByEvent(eventId: string): Promise<Board | null> {
        const row = await prisma.board.findUnique({
            where: { eventId },
            include: { columns: { include: { tasks: true } } }
        });

        if (!row) return null;
        return this.toDomainEntity(row);
    }

    async create(data: Omit<Board, "id">): Promise<Board> {
        const { column, ...prismaData } = data;
        const row = await prisma.board.create({ data: prismaData });
        return this.toDomainEntity(row);
    }

    async save(board: Board): Promise<void> {
        const { column, ...prismaData } = board;
        await prisma.board.update({
            where: { id: board.id },
            data: prismaData,
        });
    }

    async delete(id: string): Promise<void> {
        await prisma.board.delete({ where: { id } });
    }

    private toDomainEntity(row: BoardModel &
    {
        columns?: (ColumnModel &
        { tasks?: TaskModel[] })[]
    }): Board {
        return {
            id: row.id,
            title: row.title,
            eventId: row.eventId,
            column: row.columns?.map((col) => ({
                id: col.id,
                title: col.title,
                position: col.position,
                boardId: col.boardId,
                tasks: col.tasks?.map((t) => ({
                    id: t.id,
                    title: t.title,
                    startDate: t.startDate,
                    endDate: t.endDate,
                    status: t.status,
                    description: t.description,
                    comment: t.comment,
                    position: t.position,
                    createdAt: t.createdAt,
                    updatedAt: t.updatedAt,
                    columnId: t.columnId
                }))
            }))
        }
    }

}