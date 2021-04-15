import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdPageRoutingModule } from './prod-routing.module';

import { ProdPage } from './prod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdPageRoutingModule
  ],
  declarations: [ProdPage]
})
export class ProdPageModule {}
