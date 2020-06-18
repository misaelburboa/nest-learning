import { PipeTransform, ArgumentMetadata } from "@nestjs/common";
import { TaskStatus } from "../task.model";
export declare class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses: TaskStatus[];
    transform(value: string, metadata: ArgumentMetadata): any;
    private isStatusValid;
}
