import { Injectable } from '@nestjs/common';
import IUser from 'src/data/IUser.interface';
import UsersData from 'src/data/users.data';

@Injectable()
export class UsersService {
    constructor(private readonly usersData:UsersData){}

    getUsers(){
        return this.usersData.users
    }
    addBulkUsers(users:any[]){
        const transformedUsers:IUser[] = users.map((user:any)=>({name:`${user.firstname} ${user.lastname}`,mobile:user.mobile,secret:user.secret,email:user.email}))
        return this.usersData.addUsers = transformedUsers
    }
    addUser(user:any){
        const transformedUser:IUser = {name:`${user.firstname} ${user.lastname}`,mobile:user.mobile,secret:user.secret,email:user.email}
        return this.usersData.addUser = transformedUser
         
    }
}
