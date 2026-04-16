import { AgendaEvent } from "../../domain/Event";
import { EventRepository } from "../../domain/repositories/EventRepository";

export class GetEventsUseCase {
    constructor(private readonly eventRepository: EventRepository) {}

    async execute(): Promise<AgendaEvent[]> {
        return await this.eventRepository.getAll();
    }
}
