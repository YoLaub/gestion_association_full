import { PrismaBoardRepository } from "./infrastructure/repositories/PrismaBoard.repository";
import { PrismaColumnRepository } from "./infrastructure/repositories/PrismaColumn.repository";
import { PrismaTaskRepository } from "./infrastructure/repositories/PrismaTask.repository";

import { CreateBoardUseCase } from "./application/useCases/board/CreateBoardUseCase";
import { FindBoardById } from "./application/useCases/board/FindBoardByIdUseCase";

import { CreateColumnUseCase } from "./application/useCases/column/CreateColumnUseCase";
import { DeleteColumnUseCase } from "./application/useCases/column/DeleteColumnUseCase";
import { FindColumnUseCase } from "./application/useCases/column/FindColumnUseCase";
import { FindColumnsByBoardUseCase } from "./application/useCases/column/FindColumnsByBoardUseCase";
import { MoveColumnUseCase } from "./application/useCases/column/MoveColumnUseCase";
import { UpdateColumnUseCase } from "./application/useCases/column/UpdateColumnUseCase";

import { CreateTaskUseCase } from "./application/useCases/task/CreateTaskUseCase";
import { DeleteTaskUseCase } from "./application/useCases/task/DeleteTaskUseCase";
import { FindTaskUseCase } from "./application/useCases/task/FindTaskUseCase";
import { FindTasksByColumnUseCase } from "./application/useCases/task/FindTasksByColumnUseCase";
import { MoveTaskUseCase } from "./application/useCases/task/MoveTaskUseCase";
import { UpdateTaskUseCase } from "./application/useCases/task/UpdateTaskUseCase";
import { FindBoardByEventUseCase } from "./application/useCases/board/FindBoardByEventUseCase";
import { UpdateBoardUseCase } from "./application/useCases/board/UpdateBoardUseCase";
import { DeleteBoardUseCase } from "./application/useCases/board/DeleteBoardUseCase";

const boardRepository = new PrismaBoardRepository();
const columnRepository = new PrismaColumnRepository();
const taskRepository = new PrismaTaskRepository();

export const makeCreateBoardUseCase = () => new CreateBoardUseCase(boardRepository);
export const makeFindBoardByIdUseCase = () => new FindBoardById(boardRepository);
export const makeFindBoardByEventUseCase = () => new FindBoardByEventUseCase(boardRepository);
export const makeUpdateBoardUseCase = () => new UpdateBoardUseCase(boardRepository);
export const makeDeleteBoardUseCase = () => new DeleteBoardUseCase(boardRepository);


export const makeCreateColumnUseCase = () => new CreateColumnUseCase(columnRepository);
export const makeDeleteColumnUseCase = () => new DeleteColumnUseCase(columnRepository);
export const makeFindColumnUseCase = () => new FindColumnUseCase(columnRepository);
export const makeFindColumnsByBoardUseCase = () => new FindColumnsByBoardUseCase(columnRepository);
export const makeMoveColumnUseCase = () => new MoveColumnUseCase(columnRepository);
export const makeUpdateColumnUseCase = () => new UpdateColumnUseCase(columnRepository);

export const makeCreateTaskUseCase = () => new CreateTaskUseCase(taskRepository);
export const makeDeleteTaskUseCase = () => new DeleteTaskUseCase(taskRepository);
export const makeFindTaskUseCase = () => new FindTaskUseCase(taskRepository);
export const makeFindTasksByColumnUseCase = () => new FindTasksByColumnUseCase(taskRepository);
export const makeMoveTaskUseCase = () => new MoveTaskUseCase(taskRepository);
export const makeUpdateTaskUseCase = () => new UpdateTaskUseCase(taskRepository);
