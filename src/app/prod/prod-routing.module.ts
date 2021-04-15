import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdPage } from './prod.page';

const routes: Routes = [
  {
    path: '',
    component: ProdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdPageRoutingModule {}
