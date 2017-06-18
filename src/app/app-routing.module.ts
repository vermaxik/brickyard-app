import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageStateComponent } from './manage-state/manage-state.component';

const routes: Routes = [
  {
    path: '',
    component: ManageStateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
