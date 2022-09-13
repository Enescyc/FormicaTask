import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserontasksModule } from './userontasks/userontasks.module';
import { AuthController } from './auth/auth.controller';


@Module({
  imports: [UserModule, TaskModule, AuthModule, PrismaModule, UserontasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
