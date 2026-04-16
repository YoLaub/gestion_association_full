// src/features/agenda/data/mockEvents.ts
import { AgendaEvent } from "../domain/Event";

const today = new Date().toISOString().split('T')[0]; // Récupère la date d'aujourd'hui YYYY-MM-DD

export const MOCK_EVENTS: AgendaEvent[] = [
    {
        id: '1',
        title: 'Cours de Yoga',
        start: `${today}T10:00:00`,
        end: `${today}T11:30:00`,
        backgroundColor: '#3788d8' // Bleu
    },
    {
        id: '2',
        title: 'Assemblée Générale',
        start: `${today}T14:00:00`,
        end: `${today}T17:00:00`,
        backgroundColor: '#d8374d' // Rouge
    }
];