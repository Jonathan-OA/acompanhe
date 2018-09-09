import { Component } from '@angular/core';
import { NavController,LoadingController, Loading,AlertController, IonicPage  } from 'ionic-angular';
import {PrincipalPage} from '../principal/principal';
import {CadastroPage} from '../cadastro/cadastro';
import {CadastrocolPage} from '../cadastrocol/cadastrocol';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:string;
  loading: Loading;
  userLogin = { email: '', password: '' };
  data: Observable<any>;

  constructor(public navCtrl: NavController, private auth: AuthServiceProvider, private http:HttpClient,  private alertCtrl: AlertController, private loadingCtrl: LoadingController) {

  }

  public login() {
    this.showLoading();
    if(this.userLogin.email.length > 0 && this.userLogin.password.length > 0){
      
      var url = "http://www.acompanhe-jonathan-oa.c9users.io/WebService/login/"+this.userLogin.email+"/"+this.userLogin.password;
      this.data = this.http.get(url);
      this.data
          .subscribe(datat => {
            //console.log(datat);
            if(datat.nome != 0){
              this.auth.setUser(datat.nome,this.userLogin.email,datat.id );
              this.navCtrl.setRoot(PrincipalPage, {user: datat.nome, userid: datat.id});
            }else{
              this.showError('Usuário/Senha inválidos');
            }
            
          })
      }else{
        this.showError('Informe um usuário e senha');
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

  cadastrocol(){
    
    this.navCtrl.push(CadastrocolPage);
  }

  cadastro(){
    
    this.navCtrl.push(CadastroPage);
  }
  
}
