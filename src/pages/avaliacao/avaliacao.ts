import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AcompanhamentosPage } from '../acompanhamentos/acompanhamentos';

/**
 * Generated class for the AvaliacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avaliacao',
  templateUrl: 'avaliacao.html',
})
export class AvaliacaoPage {

  acompanhamento_id:number;
  datafim:string;
  data: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private view:ViewController, private http:HttpClient) {
      this.acompanhamento_id = navParams.get('acompanhamento_id');
      this.datafim = navParams.get('data_fim');
  }

  closeModal(){
    this.view.dismiss();
  }

  nota(id, nota){
    var url = "http://www.acompanhe-jonathan-oa.c9users.io/WebService/avaliar/"+id+"/"+nota;
    this.data = this.http.get(url);

    this.data
        .subscribe(datat => {
          console.log('ID: '+id+' - Nota: '+nota);
          this.view.dismiss();
        })
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvaliacaoPage');
  }

}
