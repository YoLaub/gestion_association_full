import { Column } from "./Column"

export type Board = {
    id: string
    title: string
    eventId: string
    column?: Column[]
}