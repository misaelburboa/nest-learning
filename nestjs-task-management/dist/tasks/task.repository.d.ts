import { Task } from './task.entity';
import { Repository } from "typeorm";
import { CreateTaskDto } from './dto/CreateTaskDto';
import { GetTaskFilterDto } from './dto/GetTasksFilterDto';
export declare class TaskRepository extends Repository<Task> {
    getTasks(filterDto: GetTaskFilterDto): Promise<Task[]>;
    createTask(taskDto: CreateTaskDto): Promise<Task>;
}
