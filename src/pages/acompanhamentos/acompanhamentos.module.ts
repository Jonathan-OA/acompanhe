import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcompanhamentosPage } from './acompanhamentos';

@NgModule({
  declarations: [
    AcompanhamentosPage,
  ],
  imports: [
    IonicPageModule.forChild(AcompanhamentosPage),
  ],
})
export class AcompanhamentosPageModule {}
