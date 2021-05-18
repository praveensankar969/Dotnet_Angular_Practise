import { HttpClient } from '@angular/common/http';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from '../_model/user';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: any;

  constructor(private http: HttpClient, public accountService: AccountsService){}

  ngOnInit(): void {
    this.getUsers();
  }

 
  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe(res =>{
      this.users = res;
      console.log(this.users);
      },err =>{
        console.log(err)
      });
  }
}
