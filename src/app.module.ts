import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DbModule, AuthModule
  ], // create db.module.ts and create the db connection
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
