import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {

  constructor(
    private auth:AuthenticationService,
    private router:Router
  ) { }

  ngOnInit() {
    if(!this.auth.isLogin){
      this.router.navigateByUrl("account/login");
    }
  }

}
