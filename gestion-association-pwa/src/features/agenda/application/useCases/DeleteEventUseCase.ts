import { EventRepository } from "../../domain/repositories/EventRepository";

export class DeleteEventUseCase {
    constructor(private readonly eventRepository: EventRepository) {}

    async execute(id: string): Promise<void> {
        return await this.eventRepository.delete(id);
    }
}
