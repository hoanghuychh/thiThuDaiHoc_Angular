import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public showLeft=false;
  constructor() { }

  togetherLeft(){
    this.showLeft = !this.showLeft;
  }

}
