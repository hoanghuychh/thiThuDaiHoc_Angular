// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Host } from './config'

// import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService {

//   // httpOptions = {
//   //   headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};

//   [x: string]: any;
//   public isLogin= false;
//   public isTeachers=false;
//   public isStudents=false;
//   constructor() { 
//     // var str = localStorage.getItem("auth");
//     // if (str!=null){
//     //    var json = JSON.parse(str);
//     //    if (json == null)
//     //    return;
//     //    this.isAuth = json.auth;
//     //    this.data = json.data;

//     // }
//  } 
//   isLog(){
//     return this.isLogin;
//   }
//   login(){
//     this.isLogin = true;
//   }
//   logout(){
//     this.isLogin = false;
//   }
//   isTeacher(){
//     this.isTeachers=true;
//   }
//   isStudent(){
//     this.isStudents=true;
//   }
  
//   // login(account:String,password:String):Observable<any>{
//   //   return this.http
//   //          .post(Host+"/api/login",{account,password },this.httpOptions )
//   //          .pipe( 
//   //            tap((rest) => {
//   //               if (rest.error !=0){
//   //                 return false;
//   //               }
//   //              this.data = rest.data;
//   //              this.isAuth = true;
//   //              localStorage.setItem("auth",JSON.stringify({data:this.data,auth:this.isAuth}));
//   //               return true;
//   //            })
//   //          );
//   //  }
//   auth()
//   {
//     return this.isAuth;
//   }
//   // logout():Observable<boolean>
//   // {
//   //   return Observable.create((observer)=>{
//   //     this.isAuth = false;
//   //     this.data = null;
//   //     localStorage.removeItem('auth');
//   //     observer.next(true);
//   //     observer.complete();
//   //   })
//   // }
// }
