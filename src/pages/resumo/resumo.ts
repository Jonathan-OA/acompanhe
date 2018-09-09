import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ResumoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resumo',
  templateUrl: 'resumo.html',
})
export class ResumoPage {

  resumo = {colaborador: '', pagamento: '', userid: '', valortotal: ''}
  postData:FormData;
  data:Observable<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, 
    private emailComposer: EmailComposer, private http:HttpClient) {
    this.resumo.valortotal = this.navParams.get('valortot');
    this.postData = this.navParams.get('postDatas');
    this.resumo.userid = this.navParams.get('userid');

    console.log(this.postData);
  }

  confirmar() {
    if(this.resumo.pagamento.length > 0 && this.resumo.colaborador.length > 0){
      let alert = this.alertCtrl.create({
        title: 'Termos do Serviço',
        message: "Contrato de prestação de serviço de técnico em enfermagem de acompanhamento celebrado entre Acompanhe Gestão de Serviços LTDA, CNPJ 09.122.175/0001-02     estabelecida na rua Comendador Custódio Ribeiro, nº 137, Centro, em Santa Rita do Sapucaí, Minas Gerais, 37540-000. Conforme cláusulas e condições abaixo",
        buttons: [
          {
            text: 'Não Concordo',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Concordo',
            handler: () => {
              
              var url = "http://www.acompanhe-jonathan-oa.c9users.io/WebService/novoAcompanhamento";
              this.postData.append('usuario_id', this.resumo.userid);
              this.postData.append('valor_total', this.resumo.valortotal);
              this.postData.append('colaborador', this.resumo.colaborador);
              this.postData.append('pagamento', this.resumo.pagamento);
              this.data = this.http.post(url, this.postData);
              this.data
                  .subscribe(datat => {
                    console.log(datat);
                  })
              let alertct  = this.alertCtrl.create({
                title: 'Sucesso!',
                subTitle: 'Serviço Agendado!',
                buttons: ['Fechar']
              });
              alertct.present();
            }

          }
        ]
      });
      alert.present();

    }else{
      let alertct  = this.alertCtrl.create({
        title: 'Erro!',
        subTitle: 'Preencha todos os campos!',
        buttons: ['Fechar']
      });
      alertct.present();
    }
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResumoPage');
  }

}
