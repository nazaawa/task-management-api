import { IsEnum } from "class-validator";
import { TaskStatus } from "../task-status.enum";

export class UpdateStatusDto {
    @IsEnum(TaskStatus)
    status : TaskStatus;
}