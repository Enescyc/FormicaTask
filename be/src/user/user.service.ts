import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserRequest, UpdateUserRequet } from "./dto";
import * as argon from "argon2";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { find } from "rxjs";


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
            const user = this.findUserById(id);
            if (user) {
               return  await this.prismaService.tasksOnUsers.deleteMany({
                    where: {
                        userId: (await user).id
                    }
                })
                    .then(res => this.prismaService.user.delete({
                        where: {
                            id: id
                        }
                    }))
                    .catch(err => err)
            }

        }
        catch (error) {
            throw error;
        }

    }
    private async findUserById(id: number | any) {
        try {
            const task = await this.prismaService.user.findFirst({
                where: {
                    id: id
                }
            }).then(res => res)

            if (task === null) {
                throw new NotFoundException('User is not found');
            }
            return task;
        } catch (error) {
            throw error;

        }

    }

    async getUserById(id: number | any) {
        try {
            const user = await this.prismaService.user.findFirst({
                where: {
                    id: id
                },
                select: {
                    email: true,
                    id: true,
                    name: true,
                    secondName: true,
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

    async updateUser(user: UpdateUserRequet) {
        try {
            const isFind = await this.findUserById(user.id).then(res => res);

            if (isFind) {
                const hash = await argon.hash(user.password)
                return await this.prismaService.user.update({
                    where: {
                        id: isFind.id
                    },
                    data: {
                        email: user.email,
                        password: hash,
                        name: user.name,
                        secondName: user.secondName
                    },
                    select: {
                        email: true,
                        name: true,
                        secondName: true,
                        id: true
                    }
                })

            }

        }
        catch (err) {
            throw err;
        }
    }
}