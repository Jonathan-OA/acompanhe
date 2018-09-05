import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PrincipalPage} from '../principal/principal'
import {CadastroPage} from '../cadastro/cadastro'
import {CadastrocolPage} from '../cadastrocol/cadastrocol'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:string;

  constructor(public navCtrl: NavController) {

  }

  login(){
    this.navCtrl.setRoot(PrincipalPage,{user: this.user});
  }

  cadastrocol(){
    
    this.navCtrl.push(CadastrocolPage);
  }

  cadastro(){
    
    this.navCtrl.push(CadastroPage);
  }
  
}
