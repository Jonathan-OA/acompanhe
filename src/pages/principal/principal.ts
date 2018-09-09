import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController,NavParams, Loading, LoadingController} from 'ionic-angular';
import {ResumoPage} from '../resumo/resumo'
import { MenuController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

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

  loading: Loading;
  user:string;
  userid:number;
  valortotal:number;
  acomp = {servico : '', local: '', totalhoras: 0, deficiencia: '', paciente: ''};
  data: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public alertCtrl: AlertController, public menuC:MenuController,
               private http:HttpClient, private loadingCtrl: LoadingController,
              public auth:AuthServiceProvider) {

        this.user = navParams.get('user');
        this.userid = navParams.get('userid');
        //console.log(this.auth.currentUser);
  }

  public event = {
    data_ini: '2018-01-01',
    data_fim: '2018-01-01',
    timeStarts: '07:43',
    timeEnds: '2019-02-20'
  }

  enviarOrcamento() {
      //Valor Hora
      this.valortotal = this.acomp.totalhoras * 15;
      

      this.showLoading();
      if(this.acomp.servico.length > 0 && this.acomp.paciente.length > 0 && 
          this.acomp.totalhoras > 0 && this.acomp.local.length > 0){
        var url = "http://www.acompanhe-jonathan-oa.c9users.io/WebService/novoAcompanhamento";
        let postData = new FormData();
        postData.append('servico', this.acomp.servico);
        postData.append('local', this.acomp.local);
        postData.append('horas', "'"+this.acomp.totalhoras+"'");
        postData.append('pcd', this.acomp.deficiencia);
        postData.append('data_ini', this.event.data_ini);
        postData.append('data_fim', this.event.data_fim);
        postData.append('paciente', this.acomp.paciente);
        
        this.navCtrl.setRoot(ResumoPage,{valortot:this.valortotal, postDatas: postData, userid: this.userid});
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
    console.log('ionViewDidLoad PrincipalPage');
  }


}
