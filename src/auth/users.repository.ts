import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class UserRepository extends Repository<User> {
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { usernamed, password } = authCredentialsDto;
    const user = this.create({usernamed,password});
    await this.save(user);
  }
}
