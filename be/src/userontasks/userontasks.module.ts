import { Module } from '@nestjs/common';
import { TaskService } from 'src/task/task.service';
import { UserService } from 'src/user/user.service';
import { UserOnTasksController } from './userontasks.controller';
import { UserOnTasksService } from './userontasks.service';

@Module({
    providers:[UserOnTasksService , UserService, TaskService],
    controllers:[UserOnTasksController]
})
export class UserontasksModule {}
