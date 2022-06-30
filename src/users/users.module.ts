import { Module } from '@nestjs/common';
import UsersData from 'src/data/users.data';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users.service';
@Module({
  controllers: [UsersController],
  providers: [UsersService,UsersData]
})
export class UsersModule {}
