import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {

  constructor(
    public auth:AuthenticationService,
    private nav:NavigationService
  ) { }

  ngOnInit() {
  }
  
  togetherLeft(){
    this.nav.togetherLeft();
    console.log("click")
  }
}