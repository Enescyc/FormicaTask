import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateTaskRequestDto, UpdateTasktRequestDto } from "./dto/task.dto";
import { TaskService } from "./task.service";


@Controller('task')
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
    updateTask(@Body() updateTaskRequestDto : UpdateTasktRequestDto) {
        return this.taskService.updateTask(updateTaskRequestDto);
    }

}