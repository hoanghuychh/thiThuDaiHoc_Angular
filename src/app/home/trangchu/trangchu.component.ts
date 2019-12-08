import { Component, OnInit } from '@angular/core';
// import { AuthenticationService } from 'src/app/services/authentication.service';
import {AuthService}from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {

  constructor(
    // private auth:AuthenticationService,
    private auth : AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    if(!this.auth.check_login){
      this.router.navigateByUrl("login");
    }
    else{
      this.router.navigateByUrl("home");
    }
  }

}
