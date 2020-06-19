import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/CreateTaskDto';
import { GetTaskFilterDto } from './dto/GetTasksFilterDto';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTasks(filterDto: GetTaskFilterDto): Promise<Task[]>;
    getTaskById(id: number): Promise<Task>;
    createTask(CreateTaskDto: CreateTaskDto): Promise<Task>;
    deleteTaskById(id: number): Promise<void>;
    updateTaskStatus(id: number, status: TaskStatus): Promise<Task>;
}
