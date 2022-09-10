import { Body, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import * as argon from "argon2";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserRequest } from "src/user/dto";
import { UserService } from "src/user/user.service";
import { UserLoginRequestDto } from "./dto/auth.dto";


@Injectable()
export class AuthService {
    constructor(private userService : UserService,
                private prismaService : PrismaService) {}


    async login(@Body() userLoginRequest: UserLoginRequestDto) {
            const user = await this.prismaService.user.findUnique({
                where:{
                    email:userLoginRequest.email
                }
            });
            if(!user) {
              throw new NotFoundException('Login infos not found')          
            }
            const passMatches = await argon.verify(user.password, userLoginRequest.password);
            if(!passMatches) {
                throw new ForbiddenException('Login Error')         
            }
            delete user.password;
            return user;
    }

    register(@Body() userSignUpRequest: CreateUserRequest) {
        return this.userService.createUser(userSignUpRequest);
    }
 
}