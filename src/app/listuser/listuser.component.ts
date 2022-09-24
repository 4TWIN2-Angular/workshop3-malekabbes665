import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { UserslistService } from '../services/userslist.service';
import { Users } from '../mock/listUser'
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  list : User[]= [];
    getList() { 
      return { ...this.list };
    }
  
  constructor(private UserService:UserslistService ) { 

  }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe((users)=>this.list=users)
    
  }

}
