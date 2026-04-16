import { NextResponse } from "next/server";
import { makeCreateEventUseCase, makeGetEventsUseCase } from "@/features/agenda/main";

export async function GET() {
    try {
        const events = await makeGetEventsUseCase().execute();
        return NextResponse.json(events);
    } catch (error) {
        console.error("[GET /api/events]", error);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const event = await makeCreateEventUseCase().execute({
            title: body.title,
            startDate: new Date(body.startDate),
            endDate: new Date(body.endDate),
            startTime: body.startTime ? new Date(body.startTime) : undefined,
            endTime: body.endTime ? new Date(body.endTime) : undefined,
            description: body.description,
            place: body.place,
            status: body.status ?? "planned",
        });

        return NextResponse.json(event, { status: 201 });
    } catch (error) {
        console.error("[POST /api/events]", error);
        return NextResponse.json({ error: "Erreur création" }, { status: 400 });
    }
}
