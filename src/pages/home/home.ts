import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name;
  quantity:number;
  submit : boolean = false;

  
  constructor(public navCtrl: NavController) {
   this.quantity = 0;
  }

  

  OnClick(num : number){
    if(num == 1){
      this.quantity = this.quantity + 1;
  }
}


Click(num : number){
  if(num == 0){
    this.quantity = this.quantity - 1;
}
}

Clickr(){
  this.quantity = 0;
 }

 Clicko(){
  this.submit = true;
 }

}