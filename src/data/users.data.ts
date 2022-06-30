import { Injectable } from "@nestjs/common"
import IUser from "./IUser.interface"
import {v4 as uuid} from 'uuid'
@Injectable()
export default class UsersData  {
    private data:IUser[]
    constructor(){
        this.data = [{
            id:uuid(),
            name:"Naresh Kumar",
            email:"nareshkmr219@gmail.com",
            mobile:"+917904303142",
            secret:"password123$"
        },
        {
            id:uuid(),
            name:"Naresh Kumar Test",
            email:"nareshkmr219test@gmail.com",
            mobile:"+917904303144",
            secret:"password1234$"
        }]
    }
    get users(){
        return this.data
    }
   set addUser(newData:IUser){
    this.data = [...this.data,{...newData,id:uuid()}]
   }
   set addUsers(newData:IUser[]){
    this.data = [...this.data,...newData.map((data:IUser)=>({...data,id:uuid()}))]
   }
}