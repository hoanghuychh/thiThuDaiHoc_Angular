import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public account:String="hoanghuy";
  constructor(
    private auth:AuthenticationService,
    private router:Router,

  ) { }

  ngOnInit() {
    
  }

  login(){
    //alert("login " + this.account)
    this.auth.login();
   this.router.navigateByUrl("home")
  //this.router.navigate(['account/signup']);
  
  }

}
