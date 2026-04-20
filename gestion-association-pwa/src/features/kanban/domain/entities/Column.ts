import { Task } from "./Task"

export type Column = {
    id: string
    title: string
    position: number
    boardId: string
    tasks?: Task[]
}