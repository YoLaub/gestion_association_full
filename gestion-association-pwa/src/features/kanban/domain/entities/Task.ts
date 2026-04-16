export type Task = {
    id: string
    title: string
    startDate: Date | null
    endDate: Date | null
    status: string
    description: string | null
    comment: string | null
    position: number
    createdAt: Date
    updatedAt: Date
    columnId: string
}