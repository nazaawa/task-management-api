import {  EntityRepository, Repository } from "typeorm";
import { Task } from "./task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskStatus } from "./task-status.enum";
import { GetTaskFilterDto } from "./dto/get-task-filter.dto";
import { Injectable } from "@nestjs/common";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        const { title, description } = createTaskDto;
        const task = this.create({
            title,
            description,
            status: TaskStatus.OPEN,
        });
        return await this.save(task);
    }   

    async getTasks(filterDto : GetTaskFilterDto) : Promise<Task[]> {
        const query = this.createQueryBuilder("task");
        const tasks = await query.getMany();
        return  tasks;
      }    
}