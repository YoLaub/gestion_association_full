// src/features/agenda/domain/Event.ts

export interface AgendaEvent {
    id: string;
    title: string;
    start: string; // Format ISO '2023-12-25T09:00:00'
    end: string;
    backgroundColor?: string; // Pour distinguer Cours vs Event
    borderColor?: string;
}
