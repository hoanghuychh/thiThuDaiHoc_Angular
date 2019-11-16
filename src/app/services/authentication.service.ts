import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public isLogin= false;
  constructor() { }

  login(){
    this.isLogin = true;
  }
  logout(){
    this.isLogin = false;
  }
}
