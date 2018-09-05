import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

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

  valortotal:number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, private emailComposer: EmailComposer) {
    this.valortotal = this.navParams.get('valortot');
  }

  sendEmail() {
    let email = {
      to: 'jonathan-o.a@hotmail.com',
      subject: 'ACOMPANHE - Novo Pedido',
      body: 'Usuário: xxx - Valor Total: R$ 15,00 - Colaborador: Masculino',
      isHtml: true
    };
 
    this.emailComposer.open(email);
  }

  confirmar() {
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

    this.sendEmail();

    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResumoPage');
  }

}
