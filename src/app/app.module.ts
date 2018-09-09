import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { EmailComposer } from '@ionic-native/email-composer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CadastrocolPage } from '../pages/cadastrocol/cadastrocol';
import { PrincipalPage } from '../pages/principal/principal';
import { AvaliacaoPage } from '../pages/avaliacao/avaliacao';
import { ResumoPage } from '../pages/resumo/resumo';
import { AcompanhamentosPage } from '../pages/acompanhamentos/acompanhamentos';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResumoPage,
    CadastroPage,
    CadastrocolPage,
    PrincipalPage,
    AcompanhamentosPage,
    AvaliacaoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResumoPage,
    CadastroPage,
    CadastrocolPage,
    PrincipalPage,
    AcompanhamentosPage,
    AvaliacaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]

})
export class AppModule {

}


