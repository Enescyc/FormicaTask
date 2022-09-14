import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { TaskService } from "src/task/task.service";
import { UserService } from "src/user/user.service";
import { CreateUserOnTaskRequestDto } from "./dto/userontask.dto";



@Injectable()
export class UserOnTasksService{
    constructor(private userService : UserService ,
                private taskService : TaskService ,
                private prismaService: PrismaService) {}


    async createNewUserOnTasks(dto : CreateUserOnTaskRequestDto){
        const user = this.userService.getUserById(dto.userId);
        const task = this.taskService.getTaskById(dto.taskId);
        if(task && user ) {
            const taskUser= await this.prismaService.tasksOnUsers.create({
                data:{
                    taskId:dto.taskId,
                    userId:dto.userId
                }
            })
            return taskUser;
        }
        return new NotFoundException("User or Task Not Found");
        }

    async getAll() {
        return await this.prismaService.tasksOnUsers.findMany({
            select:{
                
                task:true,
                user:true
            }
        })
    }

    async getUserOnTaskByUserId(id: number) {
        return await this.prismaService.tasksOnUsers.findMany({
            select:{
                task:true,
            },
            where:{
                userId:id
            }
        })
    }

    async getUserOnTaskByTaskId(id:number) {
        return await this.prismaService.tasksOnUsers.findMany({
            select:{
                user:true,
            },
            where:{
                taskId:id
            }
        })
    }
}