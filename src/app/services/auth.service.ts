import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import {shareReplay,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLogin = false;
  private data : any;
  constructor(
    private http:HttpClient,
    private webService:WebRequestService,
    private router:Router
    ) { }
    
    login(username:string,password:string){
      return this.webService.login(username,password).pipe(
        shareReplay(),
        tap((res:HttpResponse<any>)=>{
          // the auth tokens will be in the header if this response
          this.setSession(res.body.user_id,res.body.access_token);
          console.log("LOGINED!");
          this.isLogin = true;
          
        })
        )
        
    }

    logout(){
      this.removeSession();
    }

    check_login(){
      return this.isLogin;  
    }
    private setSession(user_id:string,access_token:string){
      sessionStorage.setItem('user_id',user_id);
      sessionStorage.setItem('access_token',access_token)
    }

    private removeSession(){
      sessionStorage.removeItem('user_id');
      sessionStorage.removeItem('access_token');
    }

}
