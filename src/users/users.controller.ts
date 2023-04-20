/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';
import * as bcrypt from 'bcrypt'
@Controller('api')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    @Post('/register')
    async createUser(
        @Body('password') password: string,
        @Body('username') username: string,
        @Body('name') name: string,
    ): Promise<User> {
        const saltOrRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltOrRounds)
        const createuser = this.usersService.createUser(username, name, hashPassword);
        return createuser
    }
}
