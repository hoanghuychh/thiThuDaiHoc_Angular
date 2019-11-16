import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.css']
})
export class NavLeftComponent implements OnInit {

  constructor(
    public nav:NavigationService
  ) { }

  ngOnInit() {
  }
  together(){
    this.nav.togetherLeft();
  }
}
