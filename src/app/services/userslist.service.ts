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

}
