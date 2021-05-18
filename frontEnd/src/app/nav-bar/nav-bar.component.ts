import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_model/user';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

 model : any = {};

  constructor(public accountService: AccountsService) { }

  ngOnInit(): void {
    this.setCurrentUser();
  }

  login(){
    this.accountService.Login(this.model).subscribe(res => {
      console.log(res);
    }, error => {
      console.log("error");
    });
  }
  
  setCurrentUser(){
    const user : User = JSON.parse(localStorage.getItem('user')!);
    this.accountService.setCurrentUser(user);
  }

  logout(){
    this.accountService.Logout();
  }

}
