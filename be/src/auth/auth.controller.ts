import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserLoginRequestDto, UserRegisterRequestDto } from "./dto/auth.dto";


@Controller('/auth') 
export class AuthController {
    constructor(private authService : AuthService){}

    @Post('register')
    signIn(@Body() dto: UserRegisterRequestDto ) {
        return this.authService.register(dto);
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() dto : UserLoginRequestDto) {
        return this.authService.login(dto);
    }
}