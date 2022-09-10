import { IsEmail, IsNotEmpty } from "class-validator";
import { CreateUserRequest } from "src/user/dto";


export class UserLoginRequestDto{

    @IsNotEmpty()
    @IsEmail()
    email : string;

    @IsNotEmpty()
    password: string;
}


export class UserRegisterRequestDto extends CreateUserRequest{

}