import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario:string = "Renato"; // declaracao de variavel 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
//criando funcao
   public soma(nun1:number, num2:number):void{
     alert(nun1+num2);
   }

  ionViewDidLoad() {
   //this.soma(10,33); // chamando funcao 
  }

}
