import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BlogModel } from 'src/db/models/blog.model';
import { UserModel } from 'src/db/models/user.model';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [SequelizeModule.forFeature([UserModel, BlogModel])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
