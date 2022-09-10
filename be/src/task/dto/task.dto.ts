import { IsDate, isNotEmpty, IsNotEmpty, IsObject, IsString } from "class-validator";
import { isDeepStrictEqual } from "util";

export class CreateTaskRequestDto {
    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    description: string

}

export class UpdateTaskRequestDto extends CreateTaskRequestDto {

    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    state: string;
}



export enum TaskState {
    STARTED = "HENUZ BAŞLAMADI",
    IN_PROGRESS = "GELİŞTİRME AŞAMASINDA",
    FINISH = "TAMAMLANDI"
}