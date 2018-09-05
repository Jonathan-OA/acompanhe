import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the CadastrocolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrocol',
  templateUrl: 'cadastrocol.html',
})
export class CadastrocolPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  enviarCadastroCol() {
    let alertct  = this.alertCtrl.create({
      title: 'Curriculo Enviado!',
      subTitle: 'Em breve entraremos em contato!',
      buttons: ['Fechar']
    });
    alertct.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrocolPage');
  }

}
