import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, Loading, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';

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

  userCad = {nome : '', email: '', telefone: '', cpf: '', curriculo: ''};
  data: Observable<any>;
  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public alertCtrl: AlertController, public http:HttpClient,
             public loadingCtrl: LoadingController) {
  }

  enviarCadastro() {
    this.showLoading();
    var url = "http://www.acompanhe-jonathan-oa.c9users.io/WebService/cadastrarCol";
    let postData = new FormData();
    postData.append('nome', this.userCad.nome);
    postData.append('email', this.userCad.email);
    postData.append('cpf', this.userCad.cpf);
    postData.append('telefone', this.userCad.telefone);
    postData.append('curriculo', this.userCad.curriculo);

    console.log(this.userCad);

    if(this.userCad.email.length > 0 && this.userCad.telefone.length > 0 ){
      this.data = this.http.post(url, postData);
      this.data
          .subscribe(datat => {
            
            if(datat.erro == 0){
              let alertct  = this.alertCtrl.create({
                title: 'Currículo Enviado!',
                subTitle: 'Em breve entraremos em contato.',
                buttons: ['Fechar']
              });
              alertct.present();
              this.navCtrl.setRoot(HomePage);
            }else{
              this.showError('Já existe um colaborador com este email!');
            }
          })
      
    }else{
      this.showError('Preencha os campos obrigatórios!');
    }
    
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
    console.log('ionViewDidLoad CadastrocolPage');
  }

}
