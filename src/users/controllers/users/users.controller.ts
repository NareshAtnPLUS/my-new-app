import { Body, Controller, Get, Post } from '@nestjs/common';
import IUser from 'src/data/IUser.interface';
import { UsersService } from 'src/users/services/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}
    @Get()
    getUsers(){
        return {payload:this.usersService.getUsers()}
    }
    @Post("/")
    addUsers(@Body() body:any){
        const users:IUser[] = body.users
        return {payload:this.usersService.addBulkUsers(users)}
    }
    @Post("/single")
    addUser(@Body() body:any){
        const user:IUser = body.user
        return {payload:this.usersService.addUser(user)}
    }

}
