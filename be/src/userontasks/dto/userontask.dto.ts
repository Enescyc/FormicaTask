import { IsNotEmpty } from "class-validator";


export class CreateUserOnTaskRequestDto{

    @IsNotEmpty()
    taskId: number;
    @IsNotEmpty()
    userId: number;
    assignedBy: string;
}