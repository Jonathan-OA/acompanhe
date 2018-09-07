import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, Loading, NavController, NavParams, AlertController,LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import {HomePage} from '../home/home'

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
  loading: Loading;
  userCad = {nome : '', email: '', telefone: '', cpf: '', senha: ''};
  data: Observable<any>;

  constructor(public navCtrl: NavController, private http:HttpClient, private loadingCtrl: LoadingController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.tipo = navParams.get('tipo');
  }


  enviarCadastro() {
    this.showLoading();
    var url = "http://www.acompanhe-jonathan-oa.c9users.io/WebService/cadastrar";
    let postData = new FormData();
    postData.append('nome', this.userCad.nome);
    postData.append('email', this.userCad.email);
    postData.append('cpf', this.userCad.cpf);
    postData.append('telefone', this.userCad.telefone);
    postData.append('senha', this.userCad.senha);

    if(this.userCad.email.length > 0 && this.userCad.telefone.length > 0 && this.userCad.senha.length > 0){
      this.data = this.http.post(url, postData);
      this.data
          .subscribe(datat => {
            if(datat.erro == 0){
              let alertct  = this.alertCtrl.create({
                title: 'Sucesso!',
                subTitle: 'Usuário cadastrado com sucesso!',
                buttons: ['Fechar']
              });
              alertct.present();
              this.navCtrl.setRoot(HomePage);
            }else{
              this.showError('Já existe um usuário com este email!');
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
    console.log('ionViewDidLoad CadastroPage');
  }

}
