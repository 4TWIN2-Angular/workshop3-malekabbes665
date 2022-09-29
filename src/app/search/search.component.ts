import { Component, OnInit,Input,Output,EventEmitter,OnDestroy } from '@angular/core';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {Subject, Subscription} from 'rxjs';
import { UserslistService } from '../services/userslist.service';
import { User } from '../Models/User';
import { FormsModule } from '@angular/forms';
    
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit,OnDestroy {
  imports: [
    FormsModule
 ]
 term!:string;
  @Output() SearchUser= new EventEmitter<string>();
  

  public Search(term: string): void {
    this.SearchUser.emit(term);
    
}

  constructor(private UserService:UserslistService) {}

  ngOnInit() {
   
  }

  ngOnDestroy() {
  }

  
}
