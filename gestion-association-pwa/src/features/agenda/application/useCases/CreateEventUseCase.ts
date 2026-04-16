import { AgendaEvent } from "../../domain/Event";
import { CreateEventDto, EventRepository } from "../../domain/repositories/EventRepository";

export class CreateEventUseCase {
    constructor(private readonly eventRepository: EventRepository) {}

    async execute(data: CreateEventDto): Promise<AgendaEvent> {
        return await this.eventRepository.create(data);
    }
}
