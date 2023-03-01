import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from 'src/db/models/user.model';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(UserModel)
        private userModel: typeof UserModel,
    ) { }

    async findAll(): Promise<UserModel[]> {
        return this.userModel.findAll();
    }
}
