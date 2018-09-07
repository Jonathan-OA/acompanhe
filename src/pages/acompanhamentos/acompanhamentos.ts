import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the AcompanhamentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acompanhamentos',
  templateUrl: 'acompanhamentos.html',
})
export class AcompanhamentosPage {

  loading: Loading;
  userCad = {nome : '', email: '', telefone: '', cpf: '', senha: ''};
  data: Observable<any>;
  listAc:Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient, private loadingCtrl: LoadingController,public alertCtrl: AlertController) {
  
    var url = "http://www.acompanhe-jonathan-oa.c9users.io/WebService/acompanhamentos/3";
    this.data = this.http.get(url);
    this.data
        .subscribe(datat => {
          console.log(datat);
          this.listAc = datat;
        })
    }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Aguarde...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();
 
    let alertCt = this.alertCtrl.create({
      title: 'Erro',
      subTitle: text,
      buttons: ['OK']
    });
    alertCt.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AcompanhamentosPage');
  }

}
