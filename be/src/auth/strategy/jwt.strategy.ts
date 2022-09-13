import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy , 'jwt') {
    constructor(config: ConfigService , private prismaService: PrismaService ) {
      super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.get('JWT_SECRET'),
      });
     }

    async validate(payload: {
        email: string;
      }) {
        const user =
          await this.prismaService.user.findUnique({
            where: {
              email: payload.email
            },
          });
        delete user.password;
        return user;
      }
}