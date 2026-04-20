import { Column } from "../../domain/entities/Column";
import { ColumnRepository } from "../../domain/repositories/Column.repository";
import { ColumnModel } from "@/generated/prisma/models";
import { prisma } from "@/lib/prisma";

export class PrismaColumnRepository implements ColumnRepository {

    async findById(id: string): Promise<Column | null> {

        const row = await prisma.column.findUnique({ where: { id } });

        if (!row) return null;
        return this.toDomainEntity(row);
    }

    async findByBoard(boardId: string): Promise<Column[]> {

        const rows = await prisma.column.findMany({ where: { boardId } });

        return rows.map((row: ColumnModel) => this.toDomainEntity(row));
    }

    async create(data: Omit<Column, "id">): Promise<Column> {
        const { tasks, ...prismaData } = data;
        const row = await prisma.column.create({ data: prismaData });
        return this.toDomainEntity(row);
    }

    async save(column: Column): Promise<void> {
        const { tasks, ...prismaData } = column;
        await prisma.column.update({
            where: { id: column.id },
            data: prismaData,
        });
    }

    async delete(id: string): Promise<void> {
        await prisma.column.delete({ where: { id } });
    }

    async move(id: string, position: number): Promise<void> {
        await prisma.column.update({
            where: { id },
            data: { position }
        });
    }

    private toDomainEntity(row: ColumnModel): Column {
        return {
            id: row.id,
            title: row.title,
            position: row.position,
            boardId: row.boardId
        }
    }

}