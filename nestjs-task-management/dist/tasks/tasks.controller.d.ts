import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/CreateTaskDto';
import { GetTaskFilterDto } from './dto/GetTasksFilterDto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTasks(filterDto: GetTaskFilterDto): Task[];
    getTaskById(id: string): Task;
    createTask(CreateTaskDto: CreateTaskDto): Task;
    deleteTaskById(id: string): void;
    updateTaskStatus(id: string, status: TaskStatus): Task;
}
