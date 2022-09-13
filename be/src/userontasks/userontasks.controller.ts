import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { JwtGuard } from "src/auth/guard";
import { CreateUserOnTaskRequestDto } from "./dto/userontask.dto";
import { UserOnTasksService } from "./userontasks.service";



@Controller('userontask')
@UseGuards(AuthGuard('jwt'))
export class UserOnTasksController{
    constructor(private userOnTaskService: UserOnTasksService) {}


    @Post()
    createNewUserOnTasks(@Body() dto : CreateUserOnTaskRequestDto){
        return this.userOnTaskService.createNewUserOnTasks(dto);
    }

    @Get()
    getAllUserOnTasks() {
        return this.userOnTaskService.getAll();
    }

    @Get(':id')
    getUserOnTaskByUserId(@Param('id') id: string){
        return this.userOnTaskService.getUserOnTaskByUserId(+id);
    }

    @Get('task/:id')
    getUserOnTaskByTaskId(@Param('id') id: string){
        return this.userOnTaskService.getUserOnTaskByTaskId(+id);
    }

}