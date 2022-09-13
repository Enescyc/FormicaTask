import { Body, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as argon from "argon2";
import { env } from "process";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserRequest } from "src/user/dto";
import { UserService } from "src/user/user.service";
import { UserLoginRequestDto } from "./dto/auth.dto";
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
        private prismaService: PrismaService,
        private jwt: JwtService,
        private config: ConfigService) { }


    async login(@Body() userLoginRequest: UserLoginRequestDto) {
        const user = await this.prismaService.user.findUnique({
            where: {
                email: userLoginRequest.email
            }
        });
        if (!user) {
            throw new NotFoundException('Login infos not found')
        }
        const passMatches = await argon.verify(user.password, userLoginRequest.password);
        if (!passMatches) {
            throw new NotFoundException('Login Error')
        }

        return this.signToken(user.id, user.email)
    }

    register(@Body() userSignUpRequest: CreateUserRequest) {
        return this.userService.createUser(userSignUpRequest);
    }

    async signToken(userId: number, email: string): Promise<{access_token : string}>{
        const payload = {
            sub: userId,
            email: email
        }
        const secret = this.config.get('JWT_SECRET');

        const token = await this.jwt.signAsync(payload, {
            expiresIn: '60m',
            secret: secret
        })
        return { access_token: token, };
    }

}