import { Task } from './task.entity';
import { Repository, EntityRepository } from "typeorm";
import { CreateTaskDto } from './dto/CreateTaskDto';
import { TaskStatus } from './task-status.enum';
import { GetTaskFilterDto } from './dto/GetTasksFilterDto';
import { User } from '../auth/user.entity';
import { InternalServerErrorException, Logger } from '@nestjs/common';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
    private logger = new Logger('TaskRepository');
    async getTasks(
        filterDto: GetTaskFilterDto,
        user: User
    ): Promise<Task[]> {
        const { status, search } = filterDto;
        const query = this.createQueryBuilder('task');

        query.where('task.userId = :userId', { userId: user.id });

        if (status) {
            query.andWhere('task.status = :status', { status })
        }
        
        if (search) {
            query.andWhere('(task.title LIKE :search OR task.description LIKE :search)', { search: `%${search}%` });
        }

        try {
            const tasks = query.getMany();
            return tasks;
        } catch(error) {
            this.logger.error(`Failed to ger tasks for user ${user.username}, Filters: ${JSON.stringify(filterDto)}`, error.stack);
            throw new InternalServerErrorException();
        }
        
    }

    async createTask(
        taskDto: CreateTaskDto,
        user: User
    ): Promise<Task> {
        const { title, description } = taskDto;

        const task = new Task();
        task.title = title;
        task.description = description,
        task.status = TaskStatus.OPEN;
        task.user = user;

        try {
            await task.save();
        } catch(error) {
            this.logger.error(`Failed to create task for user ${user.username}, Data: ${JSON.stringify(taskDto)}`, error.stack);
            throw new InternalServerErrorException();
        }

        delete task.user;
        return task;
    }
}