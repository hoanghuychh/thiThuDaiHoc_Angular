import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    //window.location.reload();
    //this.router.navigate(['account/signup']);
    this.router.navigateByUrl("account/signup");
    //location.reload();
  }
  onContainerClick(){

  }
  
}
