import { Component } from '@angular/core';
import { NavController,LoadingController, Loading,AlertController, IonicPage  } from 'ionic-angular';
import {PrincipalPage} from '../principal/principal';
import {CadastroPage} from '../cadastro/cadastro';
import {CadastrocolPage} from '../cadastrocol/cadastrocol';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:string;
  loading: Loading;
  userLogin = { email: '', password: '' };

  constructor(public navCtrl: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {

  }

  public login() {
    this.showLoading()
    this.auth.login(this.userLogin).subscribe(allowed => {
      if (allowed) {        
        this.navCtrl.setRoot(PrincipalPage,{user: this.userLogin.email});
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
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
      subTitle: 'Login / Senha inválido(s)',
      buttons: ['OK']
    });
    alertCt.present();
  }

  cadastrocol(){
    
    this.navCtrl.push(CadastrocolPage);
  }

  cadastro(){
    
    this.navCtrl.push(CadastroPage);
  }
  
}
