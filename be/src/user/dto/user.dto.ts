import {IsEmail , IsNotEmpty, IsString} from 'class-validator'

export class CreateUserRequest {
    @IsNotEmpty()
    @IsEmail()
    email : string

    @IsString()
    @IsNotEmpty()
    password : string

    @IsNotEmpty()
    name:string
    @IsNotEmpty()
    secondName:string
}

