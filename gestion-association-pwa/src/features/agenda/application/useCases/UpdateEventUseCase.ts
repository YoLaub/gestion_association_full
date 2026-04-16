import { AgendaEvent } from "../../domain/Event";
import { EventRepository, UpdateEventDto } from "../../domain/repositories/EventRepository";

export class UpdateEventUseCase {
    constructor(private readonly eventRepository: EventRepository) {}

    async execute(id: string, data: UpdateEventDto): Promise<AgendaEvent> {
        return await this.eventRepository.update(id, data);
    }
}
