import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('user') private readonly userModel: Model<UserDocument>,
    ) { }
    async createUser(
        username: string,
        name: string,
        password: string,
    ): Promise<User> {
        return this.userModel.create({
            username,
            name,
            password,
        });
    }
    async getUser(query: object): Promise<User> {
        return this.userModel.findOne(query);
    }
}
