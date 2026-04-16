import { NextResponse } from "next/server";
import { makeDeleteEventUseCase, makeUpdateEventUseCase } from "@/features/agenda/main";

interface RouteContext {
    params: Promise<{ id: string }>;
}

export async function PUT(request: Request, { params }: RouteContext) {
    try {
        const { id } = await params;
        const body = await request.json();

        const event = await makeUpdateEventUseCase().execute(id, {
            ...(body.title && { title: body.title }),
            ...(body.startDate && { startDate: new Date(body.startDate) }),
            ...(body.endDate && { endDate: new Date(body.endDate) }),
            startTime: body.startTime ? new Date(body.startTime) : undefined,
            endTime: body.endTime ? new Date(body.endTime) : undefined,
            ...(body.description !== undefined && { description: body.description }),
            ...(body.place !== undefined && { place: body.place }),
            ...(body.status && { status: body.status }),
        });

        return NextResponse.json(event);
    } catch (error) {
        console.error("[PUT /api/events/:id]", error);
        return NextResponse.json({ error: "Erreur modification" }, { status: 400 });
    }
}

export async function DELETE(_request: Request, { params }: RouteContext) {
    try {
        const { id } = await params;
        await makeDeleteEventUseCase().execute(id);
        return new NextResponse(null, { status: 204 });
    } catch (error) {
        console.error("[DELETE /api/events/:id]", error);
        return NextResponse.json({ error: "Erreur suppression" }, { status: 400 });
    }
}
