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
    this.getUsers();
  }
  getUsers(){
    this.UserService.getUsers().subscribe((data)=>this.list=data)
  }
  deleteUser(id:number){
    this.UserService.deleteUser(id);
    this.getUsers();
  }
  public SearchHandler(term){
    console.log(term);
    
        // this.UserService.searchUserByAccountCategory(term).subscribe((data)=>this.list=data)
  }

}
