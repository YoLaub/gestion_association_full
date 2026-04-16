"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { EventClickArg } from "@fullcalendar/core";
import { AgendaEvent } from "../domain/Event";
import EventModal, { EventFormData, eventToFormData } from "./EventModal";

function buildIso(date: string, time: string): string {
    if (!date) return new Date().toISOString();
    return time ? `${date}T${time}:00` : `${date}T00:00:00`;
}

export default function AgendaView() {
    const [events, setEvents] = useState<AgendaEvent[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState<"create" | "edit">("create");
    const [selectedEvent, setSelectedEvent] = useState<AgendaEvent | null>(null);
    const [initialForm, setInitialForm] = useState<Partial<EventFormData>>({});
    const calendarRef = useRef<InstanceType<typeof FullCalendar>>(null);

    const fetchEvents = useCallback(async () => {
        const res = await fetch("/api/events");
        if (res.ok) setEvents(await res.json());
    }, []);

    useEffect(() => {
        fetchEvents();
    }, [fetchEvents]);

    // Clic sur une case vide → créer
    const handleDateClick = (arg: DateClickArg) => {
        const date = arg.dateStr.slice(0, 10);
        let startTime = "";
        let endTime = "";
        if (!arg.allDay && arg.dateStr.length > 10) {
            startTime = arg.dateStr.slice(11, 16);
            const [h, m] = startTime.split(":").map(Number);
            const endH = (h + 1) % 24;
            endTime = `${String(endH).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
        }
        setModalMode("create");
        setSelectedEvent(null);
        setInitialForm({ startDate: date, endDate: date, startTime, endTime });
        setModalOpen(true);
    };

    // Clic sur un événement → modifier
    const handleEventClick = (arg: EventClickArg) => {
        const event = events.find((e) => e.id === arg.event.id);
        if (!event) return;
        setModalMode("edit");
        setSelectedEvent(event);
        setInitialForm(eventToFormData(event));
        setModalOpen(true);
    };

    // Glisser-déposer → mise à jour rapide
    const handleEventDrop = async (info: { event: { id: string; startStr: string; endStr: string } }) => {
        await fetch(`/api/events/${info.event.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                startDate: info.event.startStr.slice(0, 10),
                endDate: (info.event.endStr || info.event.startStr).slice(0, 10),
                startTime: info.event.startStr.length > 10 ? new Date(info.event.startStr).toISOString() : undefined,
                endTime: info.event.endStr?.length > 10 ? new Date(info.event.endStr).toISOString() : undefined,
            }),
        });
        fetchEvents();
    };

    const handleSave = async (form: EventFormData) => {
        const payload = {
            title: form.title,
            startDate: buildIso(form.startDate, form.startTime),
            endDate: buildIso(form.endDate, form.endTime),
            startTime: form.startTime ? buildIso(form.startDate, form.startTime) : undefined,
            endTime: form.endTime ? buildIso(form.endDate, form.endTime) : undefined,
            description: form.description || undefined,
            place: form.place || undefined,
        };

        if (modalMode === "create") {
            await fetch("/api/events", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
        } else if (selectedEvent) {
            await fetch(`/api/events/${selectedEvent.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
        }
        fetchEvents();
    };

    const handleDelete = async () => {
        if (!selectedEvent) return;
        await fetch(`/api/events/${selectedEvent.id}`, { method: "DELETE" });
        fetchEvents();
    };

    return (
        <div className="p-4">
            <div className="flex flex-col h-[calc(100vh-140px)] bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <FullCalendar
                    ref={calendarRef}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="timeGridWeek"
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    buttonText={{
                        today: "Aujourd'hui",
                        month: "Mois",
                        week: "Semaine",
                        day: "Jour",
                    }}
                    events={events}
                    locale="fr"
                    nowIndicator={true}
                    editable={true}
                    selectable={true}
                    dayMaxEvents={3}
                    height="100%"
                    slotMinTime="07:00:00"
                    slotMaxTime="22:00:00"
                    allDaySlot={true}
                    scrollTime="08:00:00"
                    eventDisplay="block"
                    dateClick={handleDateClick}
                    eventClick={handleEventClick}
                    eventDrop={handleEventDrop}
                />
            </div>

            <EventModal
                isOpen={modalOpen}
                mode={modalMode}
                initialData={initialForm}
                onClose={() => setModalOpen(false)}
                onSave={handleSave}
                onDelete={modalMode === "edit" ? handleDelete : undefined}
            />
        </div>
    );
}
