import { Body, Controller, Delete, Get, Param, Post , UseGuards} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CreateUserRequest } from "./dto";
import { UserService } from "./user.service";



@Controller('user')
@UseGuards(AuthGuard('jwt'))

export class UserController {
    constructor(private userService: UserService) { }
  
    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }


    @Post()
    createUser(@Body() createUserRequestDto: CreateUserRequest) {
        return this.userService.createUser(createUserRequestDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.removeUser(+id);
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.userService.getUserById(+id);
    }

}