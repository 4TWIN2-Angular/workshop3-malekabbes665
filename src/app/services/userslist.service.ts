import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { User } from '../Models/User';
import { Users } from '../mock/listUser'
@Injectable({
  providedIn: 'root'
})
export class UserslistService {

  constructor() { }
  getUsers(): Observable<User[]> {
    const users= of (Users);
    return users
  }
    deleteUser(id:number){
    Users.splice(id,1)
    return Users ;
  }
  
  
  searchUserByAccountCategory(accountCategory:string):Observable<User[]>{
    const users = of ((Users.filter(user=>user.accountCategory.toUpperCase()==accountCategory.toUpperCase())))
    return users
  }
  liveSearchUserByAccountCategory(accountCategory:string):Observable<User[]>{ 
    const users = of (Users.filter(user=>user.accountCategory.toUpperCase().includes(accountCategory.toUpperCase())))
    return users
 }

}
