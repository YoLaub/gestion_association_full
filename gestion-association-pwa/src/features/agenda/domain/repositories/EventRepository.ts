import { AgendaEvent } from "../Event";

export interface CreateEventDto {
    title: string;
    startDate: Date;
    endDate: Date;
    startTime?: Date;
    endTime?: Date;
    description?: string;
    place?: string;
    status: string;
    eventTypeId?: string;
    createdById?: string;
}

export interface UpdateEventDto extends Partial<Omit<CreateEventDto, "createdById">> {}

export interface EventRepository {
    getAll(): Promise<AgendaEvent[]>;
    getById(id: string): Promise<AgendaEvent | null>;
    create(data: CreateEventDto): Promise<AgendaEvent>;
    update(id: string, data: UpdateEventDto): Promise<AgendaEvent>;
    delete(id: string): Promise<void>;
}
