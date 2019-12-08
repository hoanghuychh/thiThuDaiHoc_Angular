import { Component } from '@angular/core';
// import { AuthenticationService } from './services/authentication.service';
import { AuthService} from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thiThuDaiHoc';
  constructor(
    // public auth:AuthenticationService,
    public auth:AuthService,
    private router:Router
  ){

  }
  // createClass(){
  //   if (!this.auth.isLog()){
  //     this.router.navigateByUrl("/login");
  //   }
  // }
}
