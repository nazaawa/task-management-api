import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserRepository } from './users.repository';
import { User } from './user.entity';
import { JwtPayload } from './jwt-payloaf.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(User)
        private userRepository: UserRepository,
    ) {
        super({
            secretOrKey: 'topSecret1',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }

    async validate(payload: JwtPayload): Promise<User> {
        const { usernamed } = payload;

        const user: User = await this.userRepository.findOneBy({ usernamed });

        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
