import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  
  public objeto_feed = {
    titulo: "Marcos Paulo",
    data: "Junho 12, 1997",
    descricao: "Teste de Descição lero lero",
    qtd_likes: 29,
    qtd_comments: 512,
    time_coment: "10h atrás"

  }

  public nome_usuario:string = "Marcos Paulo do codigo";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1:number, num2:number): void{
  	alert(num1 + num2);
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(5,10);
  }

}
