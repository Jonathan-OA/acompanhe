import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

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
  userCad = {nome : '', email: '', telefone: '', cpf: '', senha: ''};
  data: Observable<any>;

  constructor(public navCtrl: NavController, private http:HttpClient, public navParams: NavParams, public alertCtrl: AlertController) {
    this.tipo = navParams.get('tipo');
  }


  enviarCadastro() {

    var url = "http://www.acompanhe-jonathan-oa.c9users.io/WebService/cadastrar";
    let postData = new FormData();
    postData.append('nome', this.userCad.nome);
    postData.append('email', this.userCad.email);
    postData.append('cpf', this.userCad.cpf);
    postData.append('telefone', this.userCad.telefone);
    postData.append('senha', this.userCad.senha);
    this.data = this.http.post(url, postData);
    this.data
        .subscribe(datat => {
          console.log(datat);
        })
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
