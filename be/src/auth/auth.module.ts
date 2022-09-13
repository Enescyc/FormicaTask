import { Module } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './strategy';

@Module({
    imports:[JwtModule.register({}),ConfigModule],
    providers:[AuthService,UserService,JwtStrategy],
    controllers:[AuthController]
})
export class AuthModule {}
