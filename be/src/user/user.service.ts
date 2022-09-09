import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserRequest } from "./dto";
import * as argon from "argon2";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";


@Injectable()
export class UserService {

    constructor(private prismaService: PrismaService) { }

    async getAllUsers() {
        return this.prismaService.user.findMany();
    }

    async createUser(createUserRequestDto: CreateUserRequest) {
        try {
            const hash = await argon.hash(createUserRequestDto.password)
            const user = await this.prismaService.user.create({
                data: {
                    email: createUserRequestDto.email,
                    password: hash,
                    name: createUserRequestDto.name,
                    secondName: createUserRequestDto.secondName
                },
                select: {
                    id: true,
                    email: true,
                    name: true,
                }
            })

            return user;
        }

        catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                return new ForbiddenException('Email Taken',)
            }
            throw error;
        }

    }

    async removeUser(id: number) {
        try {
            const deletedUser = await this.prismaService.user.delete({
                where: {
                    id: id
                }
            })
            if (deletedUser !== null) {
                return deletedUser;
            }
            return new ForbiddenException('User not found');

        }
        catch (error) {
            throw error;
        }

    }

    async getUserById(id: number) {
        try {
            const user = await this.prismaService.user.findFirst({
                where: {
                    id: id
                }
            })
            if (user !== null) {
                return user;
            }
            return new ForbiddenException('User Not Found');

        } catch (error) {
            throw error;
        }

    }
}