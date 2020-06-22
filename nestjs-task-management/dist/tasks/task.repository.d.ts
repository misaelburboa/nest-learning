import { Task } from './task.entity';
import { Repository } from "typeorm";
import { CreateTaskDto } from './dto/CreateTaskDto';
import { GetTaskFilterDto } from './dto/GetTasksFilterDto';
import { User } from '../auth/user.entity';
export declare class TaskRepository extends Repository<Task> {
    private logger;
    getTasks(filterDto: GetTaskFilterDto, user: User): Promise<Task[]>;
    createTask(taskDto: CreateTaskDto, user: User): Promise<Task>;
}
