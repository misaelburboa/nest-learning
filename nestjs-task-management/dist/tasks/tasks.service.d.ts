import { CreateTaskDto } from './dto/CreateTaskDto';
import { GetTaskFilterDto } from './dto/GetTasksFilterDto';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: any);
    getTask(filterDto: GetTaskFilterDto): Promise<Task[]>;
    getTaskById(id: number): Promise<Task>;
    createTask(taskDto: CreateTaskDto): Promise<Task>;
    deleteTask(id: number): Promise<void>;
    updateTaskStatus(id: number, status: TaskStatus): Promise<Task>;
}
