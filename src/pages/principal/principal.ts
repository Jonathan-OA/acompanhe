import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController,NavParams } from 'ionic-angular';
import {ResumoPage} from '../resumo/resumo'
import { MenuController } from 'ionic-angular';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  user:string;
  totalhoras:number;
  valortotal:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public alertCtrl: AlertController, public menuC:MenuController) {
      this.user = navParams.get('user');
  }

  public event = {
    month: '2018-01-01',
    month2: '2018-01-01',
    timeStarts: '07:43',
    timeEnds: '2019-02-20'
  }

  enviarOrcamento() {
      this.valortotal = this.totalhoras * 15;
      this.navCtrl.setRoot(ResumoPage,{valortot:this.valortotal});


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }


}
