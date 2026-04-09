// src/features/agenda/presentation/AgendaView.tsx
"use client"; // <--- TRES IMPORTANT pour FullCalendar

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { MOCK_EVENTS } from '../data/mockEvents'; // On importe nos fausses données

export default function AgendaView() {
    return (
        <div className="p-5 h-[80vh]" > {/* Un peu de style pour la hauteur */}
            < h1 className="text-2xl font-bold mb-4" > Planning de l'association</h1>

            < FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek" // Vue par semaine par défaut
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }
                }
                events={MOCK_EVENTS} // <--- On branche nos données ici !
                locale="fr" // Si tu veux le calendrier en français
                nowIndicator={true}
                editable={true} // Permet de bouger les events (visuellement pour l'instant)
                selectable={true} // Permet de sélectionner des cases
            />
        </div>
    );
}