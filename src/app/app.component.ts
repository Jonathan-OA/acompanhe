import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';
import { AcompanhamentosPage } from '../pages/acompanhamentos/acompanhamentos';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  acompPage:any = AcompanhamentosPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  acompanhamentos(){
    this.rootPage = AcompanhamentosPage;
    this.menuCtrl.close();
  }

  logoutt(){
    this.rootPage = HomePage;
    this.menuCtrl.close();

  }
}

