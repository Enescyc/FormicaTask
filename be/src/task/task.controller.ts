import { Body, Controller, Delete, Get, Param, Post, Put , UseGuards} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CreateTaskRequestDto, UpdateTaskRequestDto } from "./dto";
import { TaskService } from "./task.service";


@Controller('task')
@UseGuards(AuthGuard('jwt'))
export class TaskController {
    constructor(private taskService: TaskService) { }

    @Get()
    getAllTasks() {
        return this.taskService.getAllTask();
    }

    @Get(':id')
    getTaskById(@Param("id") id: string) {
        return this.taskService.getTaskById(+id)
    }

    @Post()
    createNewTask(@Body() createNewTaskRequestDto: CreateTaskRequestDto) {
        return this.taskService.createNewTask(createNewTaskRequestDto);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        return this.taskService.removeTask(+id);
    }

    @Put()
    updateTask(@Body() updateTaskRequestDto : UpdateTaskRequestDto) {
        return this.taskService.updateTask(updateTaskRequestDto);
    }

}