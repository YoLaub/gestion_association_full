"use client";

import { useEffect, useState } from "react";
import { X, Trash2 } from "lucide-react";
import { AgendaEvent } from "../domain/Event";

interface EventModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: EventFormData) => Promise<void>;
    onDelete?: () => Promise<void>;
    initialData?: Partial<EventFormData>;
    mode: "create" | "edit";
}

export interface EventFormData {
    title: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    description: string;
    place: string;
}

function toDateInput(iso: string): string {
    return iso ? iso.slice(0, 10) : "";
}

function toTimeInput(iso: string): string {
    return iso ? iso.slice(11, 16) : "";
}

export function eventToFormData(event: AgendaEvent): EventFormData {
    return {
        title: event.title,
        startDate: toDateInput(event.start),
        endDate: toDateInput(event.end),
        startTime: toTimeInput(event.start),
        endTime: toTimeInput(event.end),
        description: "",
        place: "",
    };
}

const EMPTY_FORM: EventFormData = {
    title: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    description: "",
    place: "",
};

export default function EventModal({ isOpen, onClose, onSave, onDelete, initialData, mode }: EventModalProps) {
    const [form, setForm] = useState<EventFormData>(EMPTY_FORM);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setForm(initialData ? { ...EMPTY_FORM, ...initialData } : EMPTY_FORM);
    }, [initialData, isOpen]);

    if (!isOpen) return null;

    const set = (field: keyof EventFormData, value: string) =>
        setForm((prev) => ({ ...prev, [field]: value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.title || !form.startDate || !form.endDate) return;
        setLoading(true);
        try {
            await onSave(form);
            onClose();
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!onDelete || !confirm("Supprimer cet événement ?")) return;
        setLoading(true);
        try {
            await onDelete();
            onClose();
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" onClick={onClose} />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-lg font-semibold text-gray-800">
                        {mode === "create" ? "Nouvel événement" : "Modifier l'événement"}
                    </h2>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100 text-gray-500">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Titre */}
                    <input
                        type="text"
                        placeholder="Titre *"
                        value={form.title}
                        onChange={(e) => set("title", e.target.value)}
                        required
                        className="w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none py-2 text-gray-800 placeholder-gray-400 text-base transition-colors"
                    />

                    {/* Dates */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-xs text-gray-500 font-medium">Début *</label>
                            <input
                                type="date"
                                value={form.startDate}
                                onChange={(e) => set("startDate", e.target.value)}
                                required
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 font-medium">Fin *</label>
                            <input
                                type="date"
                                value={form.endDate}
                                onChange={(e) => set("endDate", e.target.value)}
                                required
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Heures */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-xs text-gray-500 font-medium">Heure début</label>
                            <input
                                type="time"
                                value={form.startTime}
                                onChange={(e) => set("startTime", e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 font-medium">Heure fin</label>
                            <input
                                type="time"
                                value={form.endTime}
                                onChange={(e) => set("endTime", e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Lieu */}
                    <input
                        type="text"
                        placeholder="Lieu"
                        value={form.place}
                        onChange={(e) => set("place", e.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Description */}
                    <textarea
                        placeholder="Description"
                        value={form.description}
                        onChange={(e) => set("description", e.target.value)}
                        rows={2}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-1">
                        {mode === "edit" && onDelete ? (
                            <button
                                type="button"
                                onClick={handleDelete}
                                disabled={loading}
                                className="flex items-center gap-1.5 text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
                            >
                                <Trash2 size={16} />
                                Supprimer
                            </button>
                        ) : (
                            <div />
                        )}

                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                Annuler
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-5 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50"
                            >
                                {loading ? "..." : mode === "create" ? "Créer" : "Enregistrer"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
