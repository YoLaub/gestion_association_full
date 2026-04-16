import { eventRepository } from "./infrastructure/repositories/PrismaEventRepository";
import { GetEventsUseCase } from "./application/useCases/GetEventsUseCase";
import { CreateEventUseCase } from "./application/useCases/CreateEventUseCase";
import { UpdateEventUseCase } from "./application/useCases/UpdateEventUseCase";
import { DeleteEventUseCase } from "./application/useCases/DeleteEventUseCase";

export const makeGetEventsUseCase = () => new GetEventsUseCase(eventRepository);
export const makeCreateEventUseCase = () => new CreateEventUseCase(eventRepository);
export const makeUpdateEventUseCase = () => new UpdateEventUseCase(eventRepository);
export const makeDeleteEventUseCase = () => new DeleteEventUseCase(eventRepository);
