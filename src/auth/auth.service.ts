import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository : UserRepository,
    ){}


    async signUp(authCredentialsDto :  AuthCredentialsDto) :  Promise<void>{
        const { usernamed, password } = authCredentialsDto;
        const user = this.userRepository.create({usernamed,password});
        await this.userRepository.save(user); 
       }
}
