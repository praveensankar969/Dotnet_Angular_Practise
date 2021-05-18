import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { User } from '../_model/user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  baseUrl: string = 'https://localhost:5001/api/';
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  Login(model : any){
    return this.http.post(this.baseUrl +'account/login', model).pipe(
      map(res=> {
        const user = res as User;
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }
  setCurrentUser(user:User){
    this.currentUserSource.next(user);
  }
  Logout(){
    this.currentUserSource.next(undefined);
    localStorage.removeItem('user');
  }
}
