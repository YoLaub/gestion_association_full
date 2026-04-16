import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma/client";
import { AgendaEvent } from "../../domain/Event";
import {
    CreateEventDto,
    EventRepository,
    UpdateEventDto,
} from "../../domain/repositories/EventRepository";

type ActivityWithType = Prisma.ActivityGetPayload<{ include: { eventType: true } }>;

function toIsoString(date: Date | null, time: Date | null): string {
    if (!date) return new Date().toISOString();
    const d = new Date(date);
    if (time) d.setHours(time.getHours(), time.getMinutes(), time.getSeconds());
    return d.toISOString();
}

function mapToAgendaEvent(activity: ActivityWithType): AgendaEvent {
    return {
        id: activity.id,
        title: activity.title,
        start: toIsoString(activity.startDate, activity.startTime),
        end: toIsoString(activity.endDate ?? activity.startDate, activity.endTime),
        backgroundColor: activity.eventType?.colorCode ?? "#3788d8",
        borderColor: activity.eventType?.colorCode ?? "#3788d8",
    };
}

export class PrismaEventRepository implements EventRepository {
    async getAll(): Promise<AgendaEvent[]> {
        const activities = await prisma.activity.findMany({
            include: { eventType: true },
            orderBy: { startDate: "asc" },
        });
        return activities.map(mapToAgendaEvent);
    }

    async getById(id: string): Promise<AgendaEvent | null> {
        const activity = await prisma.activity.findUnique({
            where: { id },
            include: { eventType: true },
        });
        if (!activity) return null;
        return mapToAgendaEvent(activity);
    }

    async create(data: CreateEventDto): Promise<AgendaEvent> {
        const createData: Prisma.ActivityUncheckedCreateInput = {
            title: data.title,
            description: data.description,
            startDate: data.startDate,
            endDate: data.endDate,
            startTime: data.startTime,
            endTime: data.endTime,
            place: data.place,
            status: data.status ?? "planned",
            eventTypeId: data.eventTypeId,
            createdById: data.createdById ?? null,
        };
        const activity = await prisma.activity.create({
            data: createData,
            include: { eventType: true },
        });
        return mapToAgendaEvent(activity);
    }

    async update(id: string, data: UpdateEventDto): Promise<AgendaEvent> {
        const updateData: Prisma.ActivityUncheckedUpdateInput = {
            ...(data.title && { title: data.title }),
            ...(data.description !== undefined && { description: data.description }),
            ...(data.startDate && { startDate: data.startDate }),
            ...(data.endDate && { endDate: data.endDate }),
            ...(data.startTime !== undefined && { startTime: data.startTime }),
            ...(data.endTime !== undefined && { endTime: data.endTime }),
            ...(data.place !== undefined && { place: data.place }),
            ...(data.status && { status: data.status }),
            ...(data.eventTypeId !== undefined && { eventTypeId: data.eventTypeId }),
        };
        const activity = await prisma.activity.update({
            where: { id },
            data: updateData,
            include: { eventType: true },
        });
        return mapToAgendaEvent(activity);
    }

    async delete(id: string): Promise<void> {
        await prisma.activity.delete({ where: { id } });
    }
}

export const eventRepository = new PrismaEventRepository();
