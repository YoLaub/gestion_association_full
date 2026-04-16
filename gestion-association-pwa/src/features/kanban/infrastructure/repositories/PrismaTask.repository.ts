import { PrismaClient } from "@prisma/client/extension";
import { Task } from "../../domain/entities/Task";
import { TaskRepository } from "../../domain/repositories/Task.repository";
import type { TaskModel } from "@/generated/prisma/models/Task"

export class PrismaTaskRepository implements TaskRepository {

    constructor(private prisma: PrismaClient) { }

    async findById(id: string): Promise<Task | null> {
        const row = await this.prisma.task.findUnique({ where: { id } });

        if (!row) return null;
        return this.toDomainEntity(row);
    }

    async findByColumn(columnId: string): Promise<Task[]> {
        const rows = await this.prisma.task.findMany({ where: { columnId } });

        return rows.map((row: TaskModel) => this.toDomainEntity(row));
    }

    async create(data: Omit<Task, "id">): Promise<Task> {
        const row = await this.prisma.task.create({ data });

        return this.toDomainEntity(row);
    }

    async save(task: Task): Promise<void> {
        await this.prisma.task.update({
            where: { id: task.id },
            data: task,
        })
    }

    async delete(id: string): Promise<void> {
        await this.prisma.task.delete({ where: { id } })
    }

    private toDomainEntity(row: TaskModel): Task {
        return {
            id: row.id,
            title: row.title,
            startDate: row.startDate,
            endDate: row.endDate,
            status: row.status,
            description: row.description,
            comment: row.comment,
            position: row.position,
            createdAt: row.createdAt,
            updatedAt: row.updatedAt,
            columnId: row.columnId
        }
    }

}