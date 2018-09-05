import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  tipo:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.tipo = navParams.get('tipo');
  }


  enviarCadastro() {
    let alertct  = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Cadastro Realizado!',
      buttons: ['Fechar']
    });
    alertct.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
