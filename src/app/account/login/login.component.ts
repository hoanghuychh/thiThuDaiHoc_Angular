import { Component, OnInit } from '@angular/core';
// import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { $, $$ } from 'protractor';
import { AuthService } from 'src/app/services/auth.service';
import { HttpRequest,HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService:AuthService,
    private router:Router,
  ) { }
    ngOnInit(){
      if(sessionStorage.access_token!=null){
        this.router.navigateByUrl("home");
      }
    }
 
    onLoginButtonClicked(usename:string , password:string){
      this.authService.login(usename,password).subscribe((res:HttpResponse<any>)=>
      {
        console.log(res);
        if(res.body.success==true){
          this.router.navigateByUrl("home");
        }
        else{
          alert("Login Failed");
        }
      })
    }

//noAPI
 // ngOnInit() { 
  //   if(!this.auth.isLogin){
  //     this.router.navigateByUrl("account/login");
  //   }
  //   else{
  //     this.router.navigateByUrl("home");
  //   }
  // }
  // login(){
  //   if(this.account==="student"){
  //     this.auth.isStudent();
  //     this.auth.login();
  //   }
  //   else if(this.account==="teacher"){
  //     this.auth.isTeacher();
  //     this.auth.login();
  //   }
  //   else{
  //     alert(this.account+"error");
  //   }
  //  this.router.navigateByUrl("home")
  //this.router.navigate(['account/signup']);
  
  // }
  // login() {
  //   console.log("login", this.account, this.password);
  //   this.auth.login(this.account, this.password).subscribe((res) => {

  //     if (res.error == 0) {
  //       this.router.navigate(["login"]);
  //     } else {
  //       alert("Login failed");
  //     }
  //   });
  // }
  
}
