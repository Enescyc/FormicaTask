import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTaskRequestDto, UpdateTaskRequestDto, TaskState } from "./dto";

@Injectable()
export class TaskService {
    constructor(private prismaService: PrismaService) { }



    private async findTaskById(taskId: number) {
        try {
            const task = await this.prismaService.task.findFirst({
                where: {
                    id: taskId
                }
            }).then(res => res)

            if (task === null) {
                throw new NotFoundException('Task is not found');
            }
            return task;
        } catch (error) {
            throw error;

        }

    }

    async getAllTask() {
        return await this.prismaService.task.findMany();
    }

    async getTaskById(id: number) {
        try {
            const task = this.findTaskById(id);
            return task;
        }
        catch (error) {
            throw error;
        }
    }

    async createNewTask(createNewTaskRequestDto: CreateTaskRequestDto) {
        try {
            const task = await this.prismaService.task.create({
                data: {
                    title: createNewTaskRequestDto.title,
                    taskDescription: createNewTaskRequestDto.description,
                    state: TaskState.STARTED,
                }
            })

            return task;

        }
        catch (error) {
            throw error;
        }
    }

    async removeTask(taskId: number) {
        try {
            const task = await this.findTaskById(taskId);
            if (task) {
                await this.prismaService.tasksOnUsers.deleteMany({
                    where: {
                        taskId: task.id
                    }
                })
                return await this.prismaService.task.delete({
                    where: {
                        id: task.id
                    }
                })
            }

        }
        catch (err) {
            throw err;
        }
    }

    async updateTask(updateTaskRequestDto: UpdateTaskRequestDto) {
        try {
            await this.findTaskById(updateTaskRequestDto.id);
            const updatedTask = await this.prismaService.task.update({
                data: {
                    title: updateTaskRequestDto.title,
                    taskDescription: updateTaskRequestDto.description,
                    state: updateTaskRequestDto.state,
                    updatedDate: new Date()
                },
                where: {
                    id: updateTaskRequestDto.id

                }
            })

            return updatedTask;
        } catch (error) {
            return error;
        }
    }



}